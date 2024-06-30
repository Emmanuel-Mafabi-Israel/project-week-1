## Software Engineering Projects [**Author: Israel Mafabi Emmanuel**]
### Week 1 Project, Language - JavaScript:
Scripts Involved:
1. student_grade_generator.js
2. speed_detector.js
3. net_pay.js
4. bubble_sort.js (Bonus Project)
5. staircase.js (Bonus Project)

### Installation:
- Clone this repository to your local machine.
- Make sure you have **Node.js** installed.
- Node Module in Use **readline-sync**:
```sh
npm install readline-sync
```
- console_io.js - for readline-sync: functions, methods and  objects access

# Scripts, Programs Explanation
## **1. Student Grade Generator**
This program calculates a student's grade based on their marks.
It considers various grade ranges and provides corresponding results.

### Usage
*Run the Program*
- Open a terminal or command prompt.
- Navigate to the project directory.
- Run the following command: 
`node student_grade_generator.js`

*Required Input*
- Enter the Student's marks (numerical values only).

*Computed Output*
- The program will display the corresponding grade based on the following ranges:
* A: 80-100
* B: 60-79
* C: 50-59
* D: 40-49
* E: 0-39

### Key Components:
*Determine Grade Function:* Determines the grade based on the provided marks.
*Input Validation:* Checks if the input is a valis numerical value.
*Error Handling:* Provides informative error messages for invalid input or out-of-range values.

### Example:
```sh
$ node grade_calculator.js
:Student's Marks: 75
Result: B
```

## **2. Speed Detector Program**
The Speed Detector Program calculates demerit points based on a vehicle's speed relative to the reference speed. It provides information about speeding violation and potential license suspension.

### Program Logic
*Reference Speed:* The reference speed is set at 70km/h.
*Speed change calculation:* The program calculates the speed change as the difference between the vehicle's speed and the reference speed: `speed_change = vehicl_speed - base_speed`.
*Demerit Points:* Demerit points are assigned based on the speed change:
- If speed_change is less than or equal to 0, no demerit points are given.
- If speed_change is exactly 0, the message indicates that the speed equals the limit.
- If speed_change is negative (below the limit), the message advises the driver to keep their license.
- If speed_change is positive, demerit points are assigned:  demerit_points = speed_change / 5.
- If demerit_points exceed 12, the license is suspended.

### Usage
*Run the Program*
- Open a terminal or command prompt.
- Navigate to the project directory.
- Run the following command: 
`node speed_detector.js`

*Required Input*
- Enter the Vehicle's marks (numerical values only).

*Computed Output*
- The program will display the demerit points or relevant messages based on the speed.

### Example:
```sh
$ node speed_detector.js
:Vehicle's Speed: 100
Points assigned: 6
```

## **3. Net Pay Calculator Program**
The program calculates the net annual pay based on the user's
gross salary, considering various deductions and tax rates.

### Usage
*Run the Program*
- Open a terminal or command prompt.
- Navigate to the project directory.
- Run the following command: 
`node salary_calculator.js`

*Required Input*
- Enter your gross salary (numerical values only).

*Computed Output*
- The program will display the net annual pay after considering 
NSSF deductions, P.A.Y.E tax, NHIF contributions and housing levy - (for our case it's not optional, required).

### Key Components: Variables
*Gross Salary:* The User Provides their gross salary.
*NSSF Deductions:* Calculated based on income thresholds.
*Tax Rate Computation:* Determines the P.A.Y.E based on taxable amount.
*NHIF Deductions:* 2.5% of gross salary.
*Housing Levy:* 18% of gross salart - in a year.

### Example:
```sh
$ node net_pay.js
Enter Your Gross Salary[numerical values only]: 12,000,000
Debug_info: NSSF[2160], TA[11997840], PAYE[4199244], HousingLevy[2160000]
Your Net annual Pay is: 5338596
Result: B
```