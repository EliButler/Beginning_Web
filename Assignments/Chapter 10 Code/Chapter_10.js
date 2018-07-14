/*
* 1. Take in salary
* 2. Calculate commission + 300
*   total_pay = 200 + (weekly_sales * 0.09)
* 3. correlate data into the 9 element array
* 4. when complete, generate table
*
* */

/*
* start function: begins the entry phase
* calculate function: outputs the table data and sets off sentinel value to stop loop
* */

var emp_data = new Array(9);
var sentinel = true;
var num_entry;
var emp_commission;

function start()
{

    num_entry = document.getElementById("user_entry");

    //Commission Calculation
    emp_commission = 200 + (num_entry * 0.09);
    emp_commission.toFixed(0);

    //Entering Data into Array
    switch (emp_commission)
    {
        case (emp_commission < 299):
            emp_data[0] += 1;
            break;

        case (emp_commission > 299 && emp_commission < 400):
            emp_data[1] += 1;
            break;

        case (emp_commission > 399 && emp_commission < 500):
            emp_data[2] += 1;
            break;

        case (emp_commission > 499 && emp_commission < 600):
            emp_data[3] += 1;
            break;

        case (emp_commission > 599 && emp_commission < 700):
            emp_data[4] += 1;
            break;

        case (emp_commission > 699 && emp_commission < 800):
            emp_data[5] += 1;
            break;

        case (emp_commission > 799 && emp_commission < 900):
            emp_data[6] += 1;
            break;

        case (emp_commission > 899 && emp_commission < 1000):
            emp_data[7] += 1;
            break;

        case (emp_commission > 1000):
            emp_data[8] += 1;
            break;


    }

}

function calculate()
{
    //Assigning Table to HTML
    var table_div = document.getElementById("table_div_html")

    table_div.innerHTML = "<table>" +
    "<caption> Employee Commission Data </caption>" +
        "<thead><th>Employee Pay Range</th><th>Employee Pay Results</th></thead>"+

    "</table>"
}

/*You are in the process of creating a button that will show the table. DO IT!!!*/