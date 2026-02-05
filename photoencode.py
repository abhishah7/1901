import cv2
import os
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from Crypto.Random import get_random_bytes

# --- 1. Capture Photo ---
def capture_photo(filename="photo.jpg"):
    cam = cv2.VideoCapture(0) # Open default camera
    ret, frame = cam.read()
    if ret:
        cv2.imwrite(filename, frame)
        print(f"Photo captured and saved as {filename}")
    cam.release()
    return ret

# --- 2. Encrypt Photo ---
def encrypt_image(input_file, key):
    # AES-256 requires a 32-byte key
    # Generating a random 16-byte Initialization Vector (IV)
    iv = get_random_bytes(16)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    
    with open(input_file, 'rb') as f:
        image_data = f.read()
    
    # Encrypt data (with padding to meet 16-byte block size)
    encrypted_data = cipher.encrypt(pad(image_data, AES.block_size))
    
    # Save the IV + Encrypted Data to a new file
    with open(input_file + ".enc", 'wb') as f:
        f.write(iv + encrypted_data)
    print(f"Image encrypted to {input_file}.enc")

# --- Execution ---
password = b'this_is_a_32_byte_key_exactly!!' # Must be 32 bytes for AES-256

if capture_photo():
    encrypt_image("photo.jpg", "pass")
