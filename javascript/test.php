
### Q1. Shopping App – Discounted Total



You are given a list of item prices.

**Tasks:**



1. Keep only items costing more than 500

2. Apply a 10% discount to those items

3. Find the total amount to pay



```js

const prices = [200, 800, 1200, 450, 700];

```



Ans: const total = prices

.filter(price => price > 500)

.map(price => price \* 0.9)

.reduce((sum, price) => sum + price, 0);



---



### Q2. Fitness App – Total Active Minutes



You are given daily activity minutes.

**Tasks:**



1. Keep only days with more than 30 minutes activity

2. Convert minutes to calories (1 min = 5 calories)

3. Calculate total calories burned



```js

const minutes = [20, 45, 60, 15, 90];

```

Ans:

const totalCalories = minutes

.filter(min => min > 30)

.map(min => min * 5)

.reduce((total, cal) => total + cal, 0);



---



### Q3. Exam System – Average of Passed Marks



You are given marks of students.

**Tasks:**



1. Keep only passing marks (>= 40)

2. Calculate the average of passed marks



```js

const marks = [35, 72, 88, 40, 25, 90];

```

Ans:

const passed = marks.filter(mark => mark >= 40);

const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

---



### Q4. Salary System – Monthly Payout



You are given daily wages.

**Tasks:**



1. Keep wages greater than 500

2. Add a bonus of 100 to each

3. Calculate total payout



```js

const wages = [300, 800, 450, 1000, 600];

```

Ans: const totalPayout = wages

.filter(wage => wage > 500)

.map(wage => wage + 100)

.reduce((total, wage) => total + wage, 0);

---



### Q5. Online Course – Completion Points



You are given lesson completion percentages.

**Tasks:**



1. Keep only completed lessons (>= 50%)

2. Convert percentage into points (percentage × 2)

3. Calculate total points



```js

const progress = [20, 50, 75, 40, 100];

```

Ans: const totalPoints = progress

.filter(p => p >= 50)

.map(p => p * 2)

.reduce((sum, p) => sum + p, 0);



---



### Q6. Bank Transactions – Final Balance



You are given a list of transactions.

**Tasks:**



1. Keep only credit transactions (positive values)

2. Add 2% interest to each credit

3. Calculate final credited amount



```js

const transactions = [1000, -500, 2000, -300, 1500];

```

Ans: const creditedAmount = transactions

.filter(amount => amount > 0)

.map(amount => amount * 1.02)

.reduce((total, amount) => total + amount, 0);



---



### Q7. Game App – Final Score



You are given scores from multiple rounds.

**Tasks:**



1. Keep scores greater than 50

2. Add bonus points (+10)

3. Calculate final score



```js

const scores = [30, 60, 90, 45, 80];

```

Ans: const finalScore = scores

.filter(score => score > 50)

.map(score => score + 10)

.reduce((sum, score) => sum + score, 0);



---



### Q8. E-commerce – Total Taxed Amount



You are given item prices.

**Tasks:**



1. Keep items priced above 1000

2. Add 18% tax

3. Calculate final payable amount



```js

const prices = [500, 1200, 3000, 800, 1500];

```

Ans: const finalAmount = prices

.filter(price => price > 1000)

.map(price => price * 1.18)

.reduce((sum, price) => sum + price, 0);

---



### Q9. Attendance System – Reward Points



You are given daily attendance hours.



**Tasks:**



1. Keep days with attendance >= 8 hours

2. Convert hours into points (1 hour = 10 points)

3. Find total points earned



```js

const hours = [6, 8, 9, 7, 10];

```

ans: const totalPoints = hours

.filter(hour => hour >= 8)

.map(hour => hour * 10)

.reduce((sum, point) => sum + point, 0);

---



### Q10. Interview Brain Teaser ⭐



You are given a list of numbers.

**Tasks:**



1. Keep only even numbers

2. Square each number

3. Find the sum of squares



```js

const numbers = [1, 2, 3, 4, 5, 6];

```

ans: const sumOfSquares = numbers

.filter(num => num % 2 === 0)

.map(num => num * num)

.reduce((sum, num) => sum + num, 0);

 