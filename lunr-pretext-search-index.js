var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ExcelCalculus-2-3",
  "level": "1",
  "url": "ExcelCalculus-2-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright   "
},
{
  "id": "ExcelCalculus-2-4",
  "level": "1",
  "url": "ExcelCalculus-2-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": "  This book got its start at a talk by Felkel and Richardson at ICTCM in 2000 where they claimed \"Business students should be taught math using spreadsheets.\" A number of years later I tried teaching with their book and found much to appreciate from their approach. Their book, Networked Business Mathematics, is the initial inspiration of this book. However, as often happens when an academic looks at a textbook, I found the authors had made some choices I disagreed with, so I wanted to write my own text. As I was going through beta versions of this book, I discovered the 2004 report of the Curriculum Reform Across the First Two Years (CRAFTY) sub-committee of the Mathematical Association of America (MAA), and the MAA's 2004 curriculum guide. That report has guided many decision concerning this text.  The book has been rewritten in PreTeXt ( https:\/\/pretextbook.org\/index.html ), making it possible to quickly output print, web, PDF versions and more from the same source.  The continued development of my attempt to make make courses that better fit the needs of business students has has received support from the National Science Foundation (Award #DUE-16251423.)  "
},
{
  "id": "ExcelCalculus-2-5",
  "level": "1",
  "url": "ExcelCalculus-2-5.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This text is intended for a one semester calculus course for business students with the equivalent of a college algebra prerequisite. Rather than being a three-semester engineering calculus course that has been watered down to fit into one semester it is designed for the business students.  We assume that  The student has easy access to a spreadsheet and the internet.  This is probably the last math class the student will take.  The student is either majoring in business, or will use mathematics in a business setting.    This text tries to follow the recommendations of the CRAFTY reports.  The MAA curriculum guide (2004) notes that many of our current math courses were designed in the last century in response to the needs of physics and engineering. One might caricaturize a standard textbook for business calculus, often called brief calculus as a watered down version of a three-semester course in calculus that was designed for physics or math majors. Since it is trying to cover more topics in less time, the main emphasis is skill in symbolic manipulation. The standard text for a one semester survey of calculus is also used for both business and the life sciences. To allow for broad marketing the text is technology agnostic, follows the arrangement of a course for majors, and uses the notational conventions of mathematics.  In contrast, following the Curriculum Reform Project recommendations, a course for business calculus should:  Use spreadsheets as the primary computational engine.  Have greater emphasis on constructing mathematical models from data.  Increase the emphasis on numerical methods rather than symbolic manipulation.  Whenever possible use the terminology and notational conventions of the business world.  Consistently use examples that the students will recognize as relevant to the courses in their major.    Following the CRAFTY guidelines lead to a number of subtle but pervasive shifts in a calculus text.  Teaching the technology in a way that makes it portable: Experience showed, as expected, that the students would have to be taught to use Excel. Since the intent was to have the students see the material as usable outside of class, the text does not use any macros or instructor provided tools. Students are also expected to use “Good Excel Style” and make worksheets readable with sufficient documentation.  Use of business terminology and conventions: Economics examples traditionally use p and q axes with q as the independent variable. In business disciplines a marginal function is not a derivative, as it is often described in calculus texts, but a difference quotient with denominator 1.  Use of business examples: The standard textbook example for related rates is that of a person on a ladder that is sliding down a wall. One student commented that he learned to never stand on an unsecured ladder. In contrast our text uses the Cobb-Douglas equation and rate of change of revenue with respect to cost to illustrate related rates, given that both are functions of quantity. Other examples in the text include the standard supply and demand problems, marginal cost, revenue and profit problems, and present and future value of an investment.  Change of order of topics: Checking with business faculty we have found that partial derivatives are considered more important than integrals. We reorder the sequence of topics to do multivariable functions and partial derivatives before integration.  Numerical techniques: With a spreadsheet, approximations of the derivative using the symmetric difference and Riemann sums for integration are reasonable tasks that work effectively for a wide variety of functions. The numerical examples shift from simply being theoretical underpinnings to being a practical approach. With the use of numerical techniques presented first, the main examples are introduced before the student has learned symbolic techniques.  Use of CAS: Finding the current value of a revenue stream is an application of integration at the end of the course. The students know enough to set up the problem, but only have the integration techniques for solving symbolically if the stream is constant or exponential. Using simple CAS allows the focus to remain on a conceptual understanding of the problem.  An increased emphasis on real data and modeling: With a spreadsheet is becomes reasonable to have students collect data from the web and to find a variety of best fitting curves. In the review of pre-calculus topics students are asked to decide which model should be expected to go with the data in a situation and then to find real data and produce an appropriate best fitting curve.  Focus on communication and application: As mentioned above, the conventions of school mathematics use a terse style with one letter names like x, y, f, and g used as variable and function names to aid in symbol manipulation. If the goal is to produce work that someone else can read and understand 6 months later more descriptive variable and function names are used, and having sufficient documentation is considered part of answering the question.   The initial reaction from students and teachers to the text have been positive. In particular, many report leaving the course with an understanding of how the course connects to the rest of their business curriculum  This book remains a work in progress. Feel free to send comments, corrections, or rebuttals.   Mike May, S.J.  mike dot may at slu dot edu  St Louis, MO 2023   "
},
{
  "id": "ExcelCalculus-2-6",
  "level": "1",
  "url": "ExcelCalculus-2-6.html",
  "type": "Preface",
  "number": "",
  "title": "Notes for Instructors",
  "body": "Notes for Instructors  This text continues to be a work in progress, with features being added as we get requests and have time.  Recent improvements.   Excel worksheets were attached to sections where Excel was used in the text. This allows students to examine the worksheet and the underlying code.    Unworked versions of the Excel worksheets were attached to sections where Excel was used in the text. This allows the student to follow along.    Screencast videos of the Excel problems are being added.    A significant number of the problems have been converted to WeBWorK. This allows individualized problems for the students with automatic grading. A library of problems is available from the author.    WeBWorK hosting is available through Edfinity and Runestone.    Teaching materials, like calendars, sample quizzes, and sample tests are available to instructors on request.    A landing page ( https:\/\/mathstat.slu.edu\/~may\/ExcelCalculus\/LandingPage.html ) was established with resources that useful for offline work:  There is a pdf version of the book that can be downloaded.  There is a compressed collection of the Excel files used in the text that can be downloaded.       The text was designed for a particular syllabus at a particular institution. Let us know if a few additional optional topics would better suit your needs.  We welcome suggestions, comments, and corrections.   Mike May, S.J.  mike.may@slu.edu  St Louis, MO, 2023   "
},
{
  "id": "ExcelCalculus-2-7",
  "level": "1",
  "url": "ExcelCalculus-2-7.html",
  "type": "Preface",
  "number": "",
  "title": "Notes for Students",
  "body": "Notes for Students  This text has been written to make life better for business students taking calculus. You should be able to see connections between this course and your business courses. While it uses Excel, it does not assume that you are familiar with it. The excel worksheets used in the text are available for you to use and see the underlying code. We are in the process of making them available in both the worked version, so you can see what was done, and an unworked version so you can follow along. We recommend you start with the unworked version. We are also adding videos of all the Excel examples used in the text.  The rules for using Excel in the class violate several de facto rules you have learned in all your previous math courses. This is done intentionally. This is probably either your last math class or your second to last math class. We have added much greater emphasis to how your skills will be used after the course is over. Mathematicians have worked for millennia to develop techniques for fast symbol manipulation freed from context. That means the same skills can be used in many contexts. In a business setting you want to make work products that you can come back to months or years later. You also want your work to be understood by others. When practical, we use longer variable names and break steps apart in Excel. This makes the material easier to read. It also means that students make fewer mistakes with long formulas.  Excel has special functions for almost any financial calculation you can think of. For the most part, we will not use the advanced formulas. When your job is to work with a specific formula every day for months, it will make sense to learn the special formulas. At this point, the syntax is too complicated and you will forget them in a short period of time.  Final thoughts:  If nothing else, this text is free, so it is one less text you need to buy.  We welcome suggestions, comments, and corrections.  Videos of the Excel problems are being added.     Mike May, S.J.  mike.may@slu.edu  St Louis, MO, 2021   "
},
{
  "id": "sec-1-1-LinearFunctionsAndModels",
  "level": "1",
  "url": "sec-1-1-LinearFunctionsAndModels.html",
  "type": "Section",
  "number": "1.1",
  "title": "Linear Functions and models",
  "body": " Linear Functions and models   We will start this chapter with a review of linear functions, which are common in business. In business there are quite a few examples of linear equations. We start by reviewing some standard concepts related to lines, including the slope.  Following the conventions of microeconomics, we will often use the variables q and p, for quantity and price, rather than x and y. We will also follow the conventions of economics in treating quantity as the independent variable. (The q-axis will be the horizontal axis. A fast web search for supply and demand equilibrium will convince you this standard usage.)   Equations of a line  From prior courses, such as college algebra, you will remember that lines can be written in several different forms. If we are given the slope and the -intercept, the slope intercept form will be the equation of choice. If we are given a point and a slope, it might be faster if we use the point-slope form of a line.   Kinds of Linear Equations      the slope-intercept form of a line     the point-slope form of a line     In a business setting we are likely to use instead of and instead of .  With this notation these standard equations of a line become:      the slope-intercept form of a line     the point-slope form of a line      Supply and Demand Curves  Supply and demand equations are often modeled by linear equations. The supply function is a line with a positive slope, and the demand function is a line with a negative slope.   The intersection of a supply and demand curve   The intersection of a supply and demand curve    The vertical axis shows the price, the horizontal axis shows quantity. Both supply (S) and demand (D) are linear functions. In this diagram B denotes a surplus of supply, and A denotes a surplus of demand.   Recall, that the slope of a line through the points and is given by:      The intersection of a supply and demand curve   There are two other forms of a line that are sometimes used. The general form of a line is a standard notation used in mathematics. The 2-point form of a line is very handy in those situations where we are not given a slope, but we are given information about two points that lie on the line.      The general form of a line     The 2-point form of a line     As above, in the setting of this course we may be using (price) and (quantity) as our variables. This would result in equations that look as follows:      The general form of a line     The 2-point form of a line      Finding four versions of a line   We find that we can sell 150 widgets a day if we sell them at $10. If we raise the price to $15, we can only sell 110 widgets a day. Assume that there is a linear relationship between price and quantity sold. Find the equation of the line in all four forms.    Writing this using our variables (price) and (quantity of widgets) we see that when , and when , . Points are (usually) given as , so this means we have two point and on the line. We always need to find the slope of the line, and in this case .  We are given two points, so the 2-point form of the line should be the easiest formula to find: .  In our case this becomes: .  We just found the slope and we just need to pick a point to finish the problem. (Recall that and are the variables, so we want to leave those as they are.) In this case lets pick . Then we get this simplified version, which is also the point-slope form of this line. .  From here we can very easily find the slope intercept form by some straight-forward algebra: implies that .  Thus .  And finally the general form will be another exercise in algebra. We clear the fractions and put everything on one side. .     Finding a line from two points   Suppose that a linear cost-quantity relationship exists in producing widgets. There is a fixed cost of $400. There is also a per-unit cost of $11.    Find the equation of the line.  Find the cost of making 200 widgets.         We have one point of the form (quantity, cost) at (0, 400) from the fixed cost. This point happens to be an intercept. The slope of the line is . We will let stand for Cost and stand for quantity. The general formula for a line with these variables will have the form   In this example and , hence the equation of the line is     Using the equation form part a) we see that the cost of producing 200 widgets is         A nonlinear function   Sarah is paid $500 for working up to 40 hours per week. For work beyond 40 hours per week she is paid $18\/hour.    Find the equation of the line.  How much is she paid if she works 56 hours in a week?  What is she paid for working 30 hours in a week?         For this example we will use designer variables , longer variables that make the equation easier to read. The output will be Pay, and the input variable the number of hours worked will be hrs. We are told that Pay = 500 when hrs = 40. The slope of the line for work beyond 40 hours is . Another way to think of this is to say that there is a fixed Pay of $500 and a variable Pay for any hours in excess of 40: (hrs - 40). Thus, the equation of the line, according to the point-slope form is .  This gives us .    The pay for working 56 hours is 18(56-40)+500=$788.    The pay for working 30 hours is $500. This is a trick question part of the problem. From the text of the problem, the linear model only works for overtime, with a flat rate applying to less than 40 hours per week. Comment: The function should be written as a piecewise defined function.     This question is all about the function defined by     It can be useful when writing reports to have variables that convey some meaning. We could have used for , and for , but using the much more easily interpreted variables named Pay and hrs helps when reading the formulas.    Reading Check  Reading check, Linear Functions and Models   This question checks your reading comprehension of the material is section 1.1, Linear functions and models, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In this class we will sometimes use and instead of and .    is often referred to as the general form of the line.    is often referred to as the slope-intercept form of the line.    The demand function is a line with a positive slope.    If they are not labeled, there is no way to tell which is the supply curve and which is the demand curve.    is often referred to as the point-slope form of the line.    The supply curve has a positive slope.    The slope can be defined as rise over run.    None of the above                 Exercises 1.1 Linear Functions and models    Given two points in the plane and a value :    Find the slope of the line determined by the points.  Give the equation of the line determined by the points.  Give the value of predicted for by the line.      Points and , with .  Find the slope and use the point-slope form     First find the slope:     Next we find the equation of the line. There are several ways to do this and two methods are outlined below.     Method 1: use the point-slope equation: . We can choose either one of the points, so in this case we will find the line using the point . This gives the equation .  Rewrite this as    Method 2: use the slope- intercept equation . Use and and solve for : . And solving for we have that , and hence       Evaluate at the given point.      Points and , with .    Points and , with .   Just as in problem 1 we find the slope and then find the equation of the line.     First find the slope:     Using with and , we get . Solving for we get .    Evaluate at the given point. .       Points and , with .    Points and , with .   Just as in problem 1 we find the slope and then find the equation of the line.     First find the slope:     Using with and , we get . (We can combine the constant terms the and the , but leaving the equation in this form is acceptable.)    Evaluate at the given point.        Points and , with .      For the following problems, start with the information given:  Give the equation of the line determined by that information.  Using the line, give the predicted value of for the given .  Give the value of for which the predicted value of is .      A slope of , passing through , with .      Using , we get , so and the equation of the line is .   If , then   The predicted value of is , when . Solving for we get . [Comment: in part a) we could have used the point-slope for as well.]       A slope of , passing through , with .    A slope of , passing through , with .      Using we get .    When , we get that . And hence .    The predicted value of is , when . Solving for we get: This implies . Therefore, .       A slope of , passing through , with .    A slope of 0, passing through , with .      Using we get or .    When , we get that . (This is a constant function, and the output is going to be no matter what value of we plug in.)    The predicted value of is never , because the predicted value of p is always 9.8.       A slope that is undefined, passing through , explaining why part b would not make sense.      For problems 13-18, start with the equation given:    Give the slope of the line or say that the slope is undefined.  Give the intercepts of the line with the axes.  Give two points that are on the line but not on the axes.       .      Solve for so we can read off the slope more easily: . Hence the slope is     To get the -intercept we set , so that , and we get . To get the -intercept we set , so that , and we get .    We can pick any two values for (except and because those are intercepts), so arbitrarily pick some values: say and . If , then , and hence so the point would be . If , then , and hence so the point would be .        .     .     The slope is   The y-intercept is . There is no -intercept  No matter what we choose the value will always be . So we can pick any two values of (not to avoid the intercept). For instance , , , etc are all points on the line.       .     .     The slope is   To get the -intercept we set , so that ,  To get the -intercept we set , so that . Solve for and we get and   Avoiding the intercepts we can choose to be any number other than and . We may look for nice values of that make the arithmetic come out nice: for example choose and . When , , and we get the point . When , , and we get the point .       .     Suppose that the relationship between price and quantity of widgets sold is linear. When the price is $23, we can sell 4783 widgets. If we raise the price to $27, we can only sell 4295 widgets. Find the equation of the line.   The information tells us we have two points: and . (Note that in business the quantity is usually the input and price is usually the output.)  Next we need the slope:  Using we get . We can rewrite the latter as .    Suppose that the relationship between price and quantity of gizmo kits we can buy is linear. When the price is $15, we can buy 6000 gizmo kits. If we lower the price we will pay to $13, we can only buy 4500 kits. Find the equation of the line.    "
},
{
  "id": "sec-1-1-LinearFunctionsAndModels-3-7",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#sec-1-1-LinearFunctionsAndModels-3-7",
  "type": "Example",
  "number": "1.1.1",
  "title": "Supply and Demand Curves.",
  "body": " Supply and Demand Curves  Supply and demand equations are often modeled by linear equations. The supply function is a line with a positive slope, and the demand function is a line with a negative slope.   The intersection of a supply and demand curve   The intersection of a supply and demand curve    The vertical axis shows the price, the horizontal axis shows quantity. Both supply (S) and demand (D) are linear functions. In this diagram B denotes a surplus of supply, and A denotes a surplus of demand.  "
},
{
  "id": "sec-1-1-LinearFunctionsAndModels-3-15",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#sec-1-1-LinearFunctionsAndModels-3-15",
  "type": "Example",
  "number": "1.1.3",
  "title": "Finding four versions of a line.",
  "body": " Finding four versions of a line   We find that we can sell 150 widgets a day if we sell them at $10. If we raise the price to $15, we can only sell 110 widgets a day. Assume that there is a linear relationship between price and quantity sold. Find the equation of the line in all four forms.    Writing this using our variables (price) and (quantity of widgets) we see that when , and when , . Points are (usually) given as , so this means we have two point and on the line. We always need to find the slope of the line, and in this case .  We are given two points, so the 2-point form of the line should be the easiest formula to find: .  In our case this becomes: .  We just found the slope and we just need to pick a point to finish the problem. (Recall that and are the variables, so we want to leave those as they are.) In this case lets pick . Then we get this simplified version, which is also the point-slope form of this line. .  From here we can very easily find the slope intercept form by some straight-forward algebra: implies that .  Thus .  And finally the general form will be another exercise in algebra. We clear the fractions and put everything on one side. .   "
},
{
  "id": "sec-1-1-LinearFunctionsAndModels-3-16",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#sec-1-1-LinearFunctionsAndModels-3-16",
  "type": "Example",
  "number": "1.1.4",
  "title": "Finding a line from two points.",
  "body": " Finding a line from two points   Suppose that a linear cost-quantity relationship exists in producing widgets. There is a fixed cost of $400. There is also a per-unit cost of $11.    Find the equation of the line.  Find the cost of making 200 widgets.         We have one point of the form (quantity, cost) at (0, 400) from the fixed cost. This point happens to be an intercept. The slope of the line is . We will let stand for Cost and stand for quantity. The general formula for a line with these variables will have the form   In this example and , hence the equation of the line is     Using the equation form part a) we see that the cost of producing 200 widgets is       "
},
{
  "id": "sec-1-1-LinearFunctionsAndModels-3-17",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#sec-1-1-LinearFunctionsAndModels-3-17",
  "type": "Example",
  "number": "1.1.5",
  "title": "A nonlinear function.",
  "body": " A nonlinear function   Sarah is paid $500 for working up to 40 hours per week. For work beyond 40 hours per week she is paid $18\/hour.    Find the equation of the line.  How much is she paid if she works 56 hours in a week?  What is she paid for working 30 hours in a week?         For this example we will use designer variables , longer variables that make the equation easier to read. The output will be Pay, and the input variable the number of hours worked will be hrs. We are told that Pay = 500 when hrs = 40. The slope of the line for work beyond 40 hours is . Another way to think of this is to say that there is a fixed Pay of $500 and a variable Pay for any hours in excess of 40: (hrs - 40). Thus, the equation of the line, according to the point-slope form is .  This gives us .    The pay for working 56 hours is 18(56-40)+500=$788.    The pay for working 30 hours is $500. This is a trick question part of the problem. From the text of the problem, the linear model only works for overtime, with a flat rate applying to less than 40 hours per week. Comment: The function should be written as a piecewise defined function.     This question is all about the function defined by    "
},
{
  "id": "Reading_Check_Sec1-1b",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#Reading_Check_Sec1-1b",
  "type": "Reading Question",
  "number": "1.1.2.1",
  "title": "Reading check, Linear Functions and Models.",
  "body": "Reading check, Linear Functions and Models   This question checks your reading comprehension of the material is section 1.1, Linear functions and models, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In this class we will sometimes use and instead of and .    is often referred to as the general form of the line.    is often referred to as the slope-intercept form of the line.    The demand function is a line with a positive slope.    If they are not labeled, there is no way to tell which is the supply curve and which is the demand curve.    is often referred to as the point-slope form of the line.    The supply curve has a positive slope.    The slope can be defined as rise over run.    None of the above             "
},
{
  "id": "exercises-set-sec-1-1-2-2",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-2-2",
  "type": "Exercise",
  "number": "1.1.3.1",
  "title": "",
  "body": " Points and , with .  Find the slope and use the point-slope form     First find the slope:     Next we find the equation of the line. There are several ways to do this and two methods are outlined below.     Method 1: use the point-slope equation: . We can choose either one of the points, so in this case we will find the line using the point . This gives the equation .  Rewrite this as    Method 2: use the slope- intercept equation . Use and and solve for : . And solving for we have that , and hence       Evaluate at the given point.    "
},
{
  "id": "exercises-set-sec-1-1-2-3",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-2-3",
  "type": "Exercise",
  "number": "1.1.3.2",
  "title": "",
  "body": " Points and , with .  "
},
{
  "id": "exercises-set-sec-1-1-2-4",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-2-4",
  "type": "Exercise",
  "number": "1.1.3.3",
  "title": "",
  "body": " Points and , with .   Just as in problem 1 we find the slope and then find the equation of the line.     First find the slope:     Using with and , we get . Solving for we get .    Evaluate at the given point. .     "
},
{
  "id": "exercises-set-sec-1-1-2-5",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-2-5",
  "type": "Exercise",
  "number": "1.1.3.4",
  "title": "",
  "body": " Points and , with .  "
},
{
  "id": "exercises-set-sec-1-1-2-6",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-2-6",
  "type": "Exercise",
  "number": "1.1.3.5",
  "title": "",
  "body": " Points and , with .   Just as in problem 1 we find the slope and then find the equation of the line.     First find the slope:     Using with and , we get . (We can combine the constant terms the and the , but leaving the equation in this form is acceptable.)    Evaluate at the given point.      "
},
{
  "id": "exercises-set-sec-1-1-2-7",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-2-7",
  "type": "Exercise",
  "number": "1.1.3.6",
  "title": "",
  "body": " Points and , with .  "
},
{
  "id": "exercises-set-sec-1-1-3-2",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-3-2",
  "type": "Exercise",
  "number": "1.1.3.7",
  "title": "",
  "body": " A slope of , passing through , with .      Using , we get , so and the equation of the line is .   If , then   The predicted value of is , when . Solving for we get . [Comment: in part a) we could have used the point-slope for as well.]     "
},
{
  "id": "exercises-set-sec-1-1-3-3",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-3-3",
  "type": "Exercise",
  "number": "1.1.3.8",
  "title": "",
  "body": " A slope of , passing through , with .  "
},
{
  "id": "exercises-set-sec-1-1-3-4",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-3-4",
  "type": "Exercise",
  "number": "1.1.3.9",
  "title": "",
  "body": " A slope of , passing through , with .      Using we get .    When , we get that . And hence .    The predicted value of is , when . Solving for we get: This implies . Therefore, .     "
},
{
  "id": "exercises-set-sec-1-1-3-5",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-3-5",
  "type": "Exercise",
  "number": "1.1.3.10",
  "title": "",
  "body": " A slope of , passing through , with .  "
},
{
  "id": "exercises-set-sec-1-1-3-6",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-3-6",
  "type": "Exercise",
  "number": "1.1.3.11",
  "title": "",
  "body": " A slope of 0, passing through , with .      Using we get or .    When , we get that . (This is a constant function, and the output is going to be no matter what value of we plug in.)    The predicted value of is never , because the predicted value of p is always 9.8.     "
},
{
  "id": "exercises-set-sec-1-1-3-7",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-3-7",
  "type": "Exercise",
  "number": "1.1.3.12",
  "title": "",
  "body": " A slope that is undefined, passing through , explaining why part b would not make sense.  "
},
{
  "id": "exercises-set-sec-1-1-4-2",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-4-2",
  "type": "Exercise",
  "number": "1.1.3.13",
  "title": "",
  "body": "  .      Solve for so we can read off the slope more easily: . Hence the slope is     To get the -intercept we set , so that , and we get . To get the -intercept we set , so that , and we get .    We can pick any two values for (except and because those are intercepts), so arbitrarily pick some values: say and . If , then , and hence so the point would be . If , then , and hence so the point would be .     "
},
{
  "id": "exercises-set-sec-1-1-4-3",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-4-3",
  "type": "Exercise",
  "number": "1.1.3.14",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-1-1-4-4",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-4-4",
  "type": "Exercise",
  "number": "1.1.3.15",
  "title": "",
  "body": "  .     The slope is   The y-intercept is . There is no -intercept  No matter what we choose the value will always be . So we can pick any two values of (not to avoid the intercept). For instance , , , etc are all points on the line.    "
},
{
  "id": "exercises-set-sec-1-1-4-5",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-4-5",
  "type": "Exercise",
  "number": "1.1.3.16",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-1-1-4-6",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-4-6",
  "type": "Exercise",
  "number": "1.1.3.17",
  "title": "",
  "body": "  .     The slope is   To get the -intercept we set , so that ,  To get the -intercept we set , so that . Solve for and we get and   Avoiding the intercepts we can choose to be any number other than and . We may look for nice values of that make the arithmetic come out nice: for example choose and . When , , and we get the point . When , , and we get the point .    "
},
{
  "id": "exercises-set-sec-1-1-4-7",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-4-7",
  "type": "Exercise",
  "number": "1.1.3.18",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-1-1-5",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-5",
  "type": "Exercise",
  "number": "1.1.3.19",
  "title": "",
  "body": " Suppose that the relationship between price and quantity of widgets sold is linear. When the price is $23, we can sell 4783 widgets. If we raise the price to $27, we can only sell 4295 widgets. Find the equation of the line.   The information tells us we have two points: and . (Note that in business the quantity is usually the input and price is usually the output.)  Next we need the slope:  Using we get . We can rewrite the latter as .  "
},
{
  "id": "exercises-set-sec-1-1-6",
  "level": "2",
  "url": "sec-1-1-LinearFunctionsAndModels.html#exercises-set-sec-1-1-6",
  "type": "Exercise",
  "number": "1.1.3.20",
  "title": "",
  "body": " Suppose that the relationship between price and quantity of gizmo kits we can buy is linear. When the price is $15, we can buy 6000 gizmo kits. If we lower the price we will pay to $13, we can only buy 4500 kits. Find the equation of the line.  "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting",
  "level": "1",
  "url": "sec-1-2-FunctionsBusinessSetting.html",
  "type": "Section",
  "number": "1.2",
  "title": "Functions in the Business setting",
  "body": " Functions in the Business setting   Link to worksheets used in this section  Not all functions we encounter in a business setting are linear. There are several other families of functions we should (re-) familiarize ourselves with. These models include:    Quadratic functions  Exponential functions  Logistic functions  Normal distribution functions  Sinusoidal functions      Quadratic Functions   Quadratic functions should be very familiar from previous mathematics courses. They are of the form . These are our standard parabolas.  In business we encounter quadratic equations when we study revenue and profit functions. Recall from your economics course that: In some of the models we will investigate later in the course price will be a linear function. We will assume . This implies that If , then the revenue function will look like a parabola that opens up. If then the revenue function will look like a parabola that opens down.   A quadratic function   The intersection revenue and demand price    For a quadratic model we are often very interested in the coordinates of the vertex, and any possible zeros. For the general equation the sign of the coefficient of , , will determine if we have a maximum or a minimum. If is positive, the parabola opens up and the vertex will be a minimum. If is negative, the parabola opens down and the vertex will be a maximum.  Recall that we can find the zeros of a quadratic by using the quadratic equation. . From this equation we see that the vertex must be located at . The discriminant (the term underneath the radical sign determines if there are 0, 1, or 2 roots.    If , then there are 2 roots.  If , then there is 1 root (the vertex will touch the axis)   If , then there are no roots. This means the entire graph must lie above the -axis ( ) or below the -axis ( ).     Sometimes we may need more general polynomials in a model, with an equation of the form . In such cases we remember that the number of turning points of the graph can be no more than .    Exponential functions  The exponential model , with an equation of the form . Sometimes the exponential function is denoted by . Excel will use this format, so it is worth looking at the notation in this case. can also be written as   Exponential functions are used for proportional growth or decay. In business, compound interest is given as an exponential function. In particular, if is the principal and is the interest rate compounded continuously (expressed as a decimal), then the amount after time is given by . The relationship (in general) between a future value (FV) and the present value (PV) given an interest rate per period, with being the number of compounding periods is given by:     It is also useful in determining a fair value today of a promised future payout. The sign of the rate will determine if the graph turns up or down.  A word of warning - Math books (and Excel) like using a base of because it makes the mathematics easier when we do calculus, so the equation is written as or where is the instantaneous rate of change. However, in real world applications we tend to use , where is the effective rate of change. We also use . The reader is warned that in and both and are referred to as the rate . You will have to use the context to tell them apart.  When modeling real world behavior, we often know some special features of the problem. For instance, we may know that our present value is $2,000 and that we would like the future value to be $10,000 after 10 years. The question would be what function would describe such a model? A method commonly used to solve such a problem is to plug in the values we are given and see if we can determine what the remaining quantities should be. We know that . The extra information tells us PV = 2000, and when t = 10 we know that . This is enough information to solve for . Dividing both sides by 2000 shows that .  To solve this equation we need rules of exponents. We obtain , and hence . This means that to obtain such a growth we would need a rate of growth of about 17.46%. The function modeling that growth would be . In general we can set up equations and solve for the unknown quantities.    Logistic Functions  The exponential model assumes growth without end. That is impossible in most business situations. Instead there is typically a point where the market is saturated. The alternative model says that the rate of change is proportional both to the current quantity and to the distance from the theoretical maximum value. This is called logistic growth. A typical formula for logistic growth given an interest rate , market saturation point , and constant a depending on the problem is .  In Excel we would write this function as: f(x)=M\/(1+a exp(-r x)) . Using Excel it is fairly easy to create a table and graph a logistic function.   Graph of a logistic function     Sinusoidal Functions  The sinusoidal model is for data that repeats on a natural cycle. Typical examples would include need for heating oil, electricity for air conditioning and sales for seasonal items such as Christmas. The typical equation is , where the mean is the average value, the amplitude is the distance from the mean to the maximum, the period is the length of time till the cycle repeats, and the shift is where we start the cycle for .  With an appropriate shift we can interchange the sine and cosine functions. (The functions and arise from trigonometry.) In this course, we will not focus on trigonometric functions and their properties. We are only concerned with having a periodic function for seasonal variations.   The intersection revenue and demand price     Normal Distribution Functions  The normal distribution or bell curve is used because many populations follow a normal distribution on many scales. The equation looks a bit intimidating, but we will be able to use the power of a spreadsheet to easily handle it.  In retail, there are several examples of items that follow a normal distribution. In a store selling shoes for women for instance, we would expect to see that some sizes are more prevalent than others. This would be a factor in determining what sizes to have in stock, and at what quantities. The typical scenario in which we will be using this curve model is one where we ask what range of sizes do we need to cover for the population in an area to be large enough to justify a specialty store.   A normal curve   The normal distribution function has certain interesting features. The graph shows a maximum value. The maximum occurs when . And when , we know that , hence the maximum value is .  There are a few more models that will show up from time to time and are worth mentioning.    Inversely Proportional Functions  If we see the phrase that two quantities are inversely proportional, it means that is a constant times . We might expect to use such a model when a fixed amount of money will be spent to acquire all of a given product. Thus, we may see it used to describe price as a function of supply.   An inversely proportional function     Logarithmic Functions  The logarithmic model looks at equations of the form or . This model shows up in two ways. It can be obtained as the accumulation of a quantity that is inversely proportional to our variable. It also shows up as the inverse of the exponential model. (If is described as an exponential function of , then is a logarithmic function of .)   A logarithmic function graph     Reading Check  Reading check, Functions in the Business Setting   This question checks your reading comprehension of the material is section 1.2, Functions in the Business Setting, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In business, compound interest is given as an exponential function.    The normal distribution or bell curve is used because many populations follow a normal distribution on many scales.    The exponential model models growth over prolonged periods in most business situations.    If we see the phrase that two quantities are inversely proportional, it means that is a constant times .    Quadratic functions always have two roots.    Present and future values is given by a linear function.    When the rate of change is proportional both to the current quantity and to the distance from the theoretical maximum value we have logistic growth.    In business we encounter quadratic equations when we study revenue and profit functions.    The sinusoidal model is for data that repeats on a natural cycle.    None of the above                Exercises Functions in the Business Setting    For each model, some features of the graph are listed. Describe how to change each feature by changing the parameters of the model. ( , With the linear model, , the parameters are and . The place where the line intercepts the -axis is , so any -intercept can be produced with and equal to the desired value.)    For a linear model, , how do I get a graph with  A positive -intercept?  A negative slope?        How to obtain a positive -intercept: The -intercept is determined by , so we just let .    How to obtain a negative slope: The slope is determined by in the formula above, so we let .       Suppose we are working with a quadratic model,   How do we get a graph, that points down? (i.e. a graph that has a maximum)?  How will we know if the graph of the function intercepts the -axis at two positive values?      For a quadratic model, , How do I get a graph where the vertex has ?   Quadratics are parabolas and the zeros (if they exist) are at .  The vertex is always located at . So if the vertex is to be at we need to make sure . There are many ways to do this (there are infinitely many different parabolas with their vertex located at ). One possible solution would be to let and .    For a polynomial model, , how do I get a graph that goes up at both ends?    For an exponential model, , how do I get a graph with , that goes to zero as x gets large?     , so if we know that .  If goes to 0 as gets large it must be an exponential decay function which means that the coefficient must be negative.      For an exponential model, , how do I get a graph where goes to 10 as gets large, , and is at least ?    For a logistic growth model, , how do I get a graph where goes to as gets large, , and is at least ?   We have several conditions here that need to be met. We use them to find our parameters one at a time.      goes to as gets large. If , then gets very large as gets large which would send down to , but goes to So we know that .  When , goes to for large . So the whole equation must go to . Hence .     . When we get , Hence .     is at least . With and we have that This implies that and hence . This means that        For a sinusoidal model, , based on seasonal change through the year, if is measured in months, what value should period have?    For a normal model, , how do I produce a graph with a high point at , and the value of between 1 and 2? (You need to use trial and error on this problem.)     The high point of the graph occurs when . This happens at , so this means that as well.  Once we know that , then But , so . This means that .  If the value of is between and , is between and . We can solve for     and hence So and . Hence .      For a normal model, , how do I produce a graph with a high point at , and the value of between 1 and 2? (You need to use trial and error on this problem.)    For the power model, , how do I produce a graph with and ?   means that .  means that hence and hence .  So which implies that .    For the inversely proportional model, , how do I produce a graph with and     For the logarithmic model, how do I produce a graph with ?   , hence      For each situation, explain which model you would use for each situation (linear, quadratic, etc.). Be sure to explicitly mention what you are using as the free variable (the equivalent of x), what you are using as the dependent variable (the equivalent of y), and why that model makes sense in the given situation.    The cost of producing an amount of a product is the sum of the fixed costs, like warehouse rent, and the variable costs, like labor and materials, which we can assume to be the same for each unit produced.    When looking at revenue, we can assume that sales will be linear function of the price of the object.   Using a linear model we get .  Price is the free variable (the input) and sales is the dependent variable (the output)    The amount I expect to be able to withdraw from an account at a future date, assuming that interest is compounded continuously and is fixed.    The amount of time it takes an investment to double assuming a fixed interest rate.   The Future value is given by  Here the Future value ( ) will be the input (it will be ) and the output will be the time .    The amount of electricity needed for air conditioners in a Washington, D.C. at various times of the year.    The amount of metal needed to build a fuel tank as a function of the amount of fuel to be stored.   Volume is 3-dimensional and the metal would be related to the surface area which is 2-dimensional so the formula would be something like: . is the input, the is some constant and is the output.    The total length of booms needed to contain an oil spill as a function of the size of the spill.    The monthly sales of a hot new electronic device in a country.   Sales will likely increase a lot initially, but then level out. So a logistic equation may be a reasonable model. .    The distribution of sales of pairs of pants by leg length.     "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-3-2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quadratic functions "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-3-4",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-3-4",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " A quadratic function   The intersection revenue and demand price   "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-4-2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential model "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-4-3",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "future value present value "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-4-6",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rate "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-5-2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic growth "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-6-2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sinusoidal model "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-7-2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal distribution bell curve "
},
{
  "id": "sec-1-2-FunctionsBusinessSetting-9-2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#sec-1-2-FunctionsBusinessSetting-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithmic model "
},
{
  "id": "Reading_Check_Sec1.2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#Reading_Check_Sec1.2",
  "type": "Reading Question",
  "number": "1.2.8.1",
  "title": "Reading check, Functions in the Business Setting.",
  "body": "Reading check, Functions in the Business Setting   This question checks your reading comprehension of the material is section 1.2, Functions in the Business Setting, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In business, compound interest is given as an exponential function.    The normal distribution or bell curve is used because many populations follow a normal distribution on many scales.    The exponential model models growth over prolonged periods in most business situations.    If we see the phrase that two quantities are inversely proportional, it means that is a constant times .    Quadratic functions always have two roots.    Present and future values is given by a linear function.    When the rate of change is proportional both to the current quantity and to the distance from the theoretical maximum value we have logistic growth.    In business we encounter quadratic equations when we study revenue and profit functions.    The sinusoidal model is for data that repeats on a natural cycle.    None of the above             "
},
{
  "id": "exercises-set-sec-1-2-2-2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-2",
  "type": "Exercise",
  "number": "1.2.9.1",
  "title": "",
  "body": " For a linear model, , how do I get a graph with  A positive -intercept?  A negative slope?        How to obtain a positive -intercept: The -intercept is determined by , so we just let .    How to obtain a negative slope: The slope is determined by in the formula above, so we let .     "
},
{
  "id": "exercises-set-sec-1-2-2-3",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-3",
  "type": "Exercise",
  "number": "1.2.9.2",
  "title": "",
  "body": " Suppose we are working with a quadratic model,   How do we get a graph, that points down? (i.e. a graph that has a maximum)?  How will we know if the graph of the function intercepts the -axis at two positive values?    "
},
{
  "id": "exercises-set-sec-1-2-2-4",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-4",
  "type": "Exercise",
  "number": "1.2.9.3",
  "title": "",
  "body": " For a quadratic model, , How do I get a graph where the vertex has ?   Quadratics are parabolas and the zeros (if they exist) are at .  The vertex is always located at . So if the vertex is to be at we need to make sure . There are many ways to do this (there are infinitely many different parabolas with their vertex located at ). One possible solution would be to let and .  "
},
{
  "id": "exercises-set-sec-1-2-2-5",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-5",
  "type": "Exercise",
  "number": "1.2.9.4",
  "title": "",
  "body": " For a polynomial model, , how do I get a graph that goes up at both ends?  "
},
{
  "id": "exercises-set-sec-1-2-2-6",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-6",
  "type": "Exercise",
  "number": "1.2.9.5",
  "title": "",
  "body": " For an exponential model, , how do I get a graph with , that goes to zero as x gets large?     , so if we know that .  If goes to 0 as gets large it must be an exponential decay function which means that the coefficient must be negative.    "
},
{
  "id": "exercises-set-sec-1-2-2-7",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-7",
  "type": "Exercise",
  "number": "1.2.9.6",
  "title": "",
  "body": " For an exponential model, , how do I get a graph where goes to 10 as gets large, , and is at least ?  "
},
{
  "id": "exercises-set-sec-1-2-2-8",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-8",
  "type": "Exercise",
  "number": "1.2.9.7",
  "title": "",
  "body": " For a logistic growth model, , how do I get a graph where goes to as gets large, , and is at least ?   We have several conditions here that need to be met. We use them to find our parameters one at a time.      goes to as gets large. If , then gets very large as gets large which would send down to , but goes to So we know that .  When , goes to for large . So the whole equation must go to . Hence .     . When we get , Hence .     is at least . With and we have that This implies that and hence . This means that      "
},
{
  "id": "exercises-set-sec-1-2-2-9",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-9",
  "type": "Exercise",
  "number": "1.2.9.8",
  "title": "",
  "body": " For a sinusoidal model, , based on seasonal change through the year, if is measured in months, what value should period have?  "
},
{
  "id": "exercises-set-sec-1-2-2-10",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-10",
  "type": "Exercise",
  "number": "1.2.9.9",
  "title": "",
  "body": " For a normal model, , how do I produce a graph with a high point at , and the value of between 1 and 2? (You need to use trial and error on this problem.)     The high point of the graph occurs when . This happens at , so this means that as well.  Once we know that , then But , so . This means that .  If the value of is between and , is between and . We can solve for     and hence So and . Hence .    "
},
{
  "id": "exercises-set-sec-1-2-2-11",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-11",
  "type": "Exercise",
  "number": "1.2.9.10",
  "title": "",
  "body": " For a normal model, , how do I produce a graph with a high point at , and the value of between 1 and 2? (You need to use trial and error on this problem.)  "
},
{
  "id": "exercises-set-sec-1-2-2-12",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-12",
  "type": "Exercise",
  "number": "1.2.9.11",
  "title": "",
  "body": " For the power model, , how do I produce a graph with and ?   means that .  means that hence and hence .  So which implies that .  "
},
{
  "id": "exercises-set-sec-1-2-2-13",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-13",
  "type": "Exercise",
  "number": "1.2.9.12",
  "title": "",
  "body": " For the inversely proportional model, , how do I produce a graph with and   "
},
{
  "id": "exercises-set-sec-1-2-2-14",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-2-14",
  "type": "Exercise",
  "number": "1.2.9.13",
  "title": "",
  "body": " For the logarithmic model, how do I produce a graph with ?   , hence  "
},
{
  "id": "exercises-set-sec-1-2-3-2",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-2",
  "type": "Exercise",
  "number": "1.2.9.14",
  "title": "",
  "body": " The cost of producing an amount of a product is the sum of the fixed costs, like warehouse rent, and the variable costs, like labor and materials, which we can assume to be the same for each unit produced.  "
},
{
  "id": "exercises-set-sec-1-2-3-3",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-3",
  "type": "Exercise",
  "number": "1.2.9.15",
  "title": "",
  "body": " When looking at revenue, we can assume that sales will be linear function of the price of the object.   Using a linear model we get .  Price is the free variable (the input) and sales is the dependent variable (the output)  "
},
{
  "id": "exercises-set-sec-1-2-3-4",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-4",
  "type": "Exercise",
  "number": "1.2.9.16",
  "title": "",
  "body": " The amount I expect to be able to withdraw from an account at a future date, assuming that interest is compounded continuously and is fixed.  "
},
{
  "id": "exercises-set-sec-1-2-3-5",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-5",
  "type": "Exercise",
  "number": "1.2.9.17",
  "title": "",
  "body": " The amount of time it takes an investment to double assuming a fixed interest rate.   The Future value is given by  Here the Future value ( ) will be the input (it will be ) and the output will be the time .  "
},
{
  "id": "exercises-set-sec-1-2-3-6",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-6",
  "type": "Exercise",
  "number": "1.2.9.18",
  "title": "",
  "body": " The amount of electricity needed for air conditioners in a Washington, D.C. at various times of the year.  "
},
{
  "id": "exercises-set-sec-1-2-3-7",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-7",
  "type": "Exercise",
  "number": "1.2.9.19",
  "title": "",
  "body": " The amount of metal needed to build a fuel tank as a function of the amount of fuel to be stored.   Volume is 3-dimensional and the metal would be related to the surface area which is 2-dimensional so the formula would be something like: . is the input, the is some constant and is the output.  "
},
{
  "id": "exercises-set-sec-1-2-3-8",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-8",
  "type": "Exercise",
  "number": "1.2.9.20",
  "title": "",
  "body": " The total length of booms needed to contain an oil spill as a function of the size of the spill.  "
},
{
  "id": "exercises-set-sec-1-2-3-9",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-9",
  "type": "Exercise",
  "number": "1.2.9.21",
  "title": "",
  "body": " The monthly sales of a hot new electronic device in a country.   Sales will likely increase a lot initially, but then level out. So a logistic equation may be a reasonable model. .  "
},
{
  "id": "exercises-set-sec-1-2-3-10",
  "level": "2",
  "url": "sec-1-2-FunctionsBusinessSetting.html#exercises-set-sec-1-2-3-10",
  "type": "Exercise",
  "number": "1.2.9.22",
  "title": "",
  "body": " The distribution of sales of pairs of pants by leg length.  "
},
{
  "id": "sec-1-3-IntroExcelSpreadsheets",
  "level": "1",
  "url": "sec-1-3-IntroExcelSpreadsheets.html",
  "type": "Section",
  "number": "1.3",
  "title": "Introduction to Excel Spreadsheets",
  "body": " Introduction to Excel Spreadsheets   Link to set up but unworked worksheets used in this section  Link to worksheets used in this section  Excel is used in the business world. (More precisely, the spreadsheet is the standard tool, and Excel is currently the de facto standard brand. Most of this text can easily be used with other spreadsheets.) However, we do not assume that the student has worked with Excel previously. Throughout the course we will introduce those features of Excel we need to do mathematics and model the business problems we encounter.  While introducing Excel, we will also introduce rules of Good Excel practice. In a business environment, spreadsheets should be written so that someone else can easily understand the worksheet, and maintain it for future use. You should assume those same standards when submitting work in Excel.  This section is meant as an introduction to several standard features of Excel we will use often. These include:   Basic Arithmetic such as add, subtract, multiply etc.   Show formulas : allows us to check if the formulas in the cells are what they should be.   Quick fill : this feature takes a pattern and fills it across a column or a row.   Relative and Absolute Reference : when do we refer to a fixed cell and when does the reference depend on our place in the spreadsheet?   SUM() : Adding a large number of cells can be efficiently done with this feature.      Basic Arithmetic, show formulas and quick fill.   Video presentation of this example    We start with an example that covers basic arithmetic. Assume we are given the following worksheet:   From data we would like to compute the figures for the quarter (add the three months), the monthly profit (revenues-cost), and the monthly unit costs (costs\/ units sold).   With the formula ribbon, we go to show and select Show Formulas . Since we want the worksheet to be readable by others, we add labels for the quantities we are computing, and in each cell we enter the formula for the quantity. The formula bar tells us which cell has been selected and the formula for that cell. It is generally easier to edit a formula by using the formula bar.  In this example, we have used several different ways of writing the formula. In cells E2 , B6 , and B7 we simply typed in the equation like we would on a calculator. Thus the profit for January is Revenues Costs, or 3600-2700. Since we want Excel to compute this value, we put an equals sign at the start of the formula.  In cells E3 , C6 and C7 , instead of typing the values, we use a reference to the cell where the value is kept. This allows us to change the raw data and have Excel automatically recompute the quantities that were derived from those numbers.  In cells E4 and E5 we use Excel's SUM command. In cell E4 , we are taking the sum of the values in the cells from B4 through D4 . We will come back to commands in Excel later in the section.       If we unselect Show Formulas , we see the values that Excel computes.   We want to finish our assignment by computing the Profit and Per Unit Costs for March and for the Quarter. However, we would prefer not to type any more formulas. (Typing in four more cells is not so bad, but we can imagine being told to do this for several years of data.) We will use a process called Quick Fill, that tells Excel to repeat the same formula, with the cell references appropriately modified.  To do the quick fill, we select the cells we want copied.   We can move the cursor until the cell(s) show the fill handle. This will change the symbol in the corner of the cell to a thin dark + .   We then drag the little blue box at the lower left corner of the box of selected cells. Excel automatically fills in the new values.   We look back at the formulas and see that Excel has produced formulas where cells are in the same relative position. Profit is the value from the cell 4 rows higher minus the value of the cell three rows higher.   There is a last detail to fix in our report. The quantities in profit and Per Unit Cost are in money, so we want them formatted correctly. (They should start with a dollar sign, have a decimal point, and stop at two decimal places or cents.) We do this by selecting the cells and then formatting the cells as currency.   If we use the quick fill on a pair of numbers, Excel produces an arithmetic sequence. A pair of cells containing 1 then 4 becomes the start of a sequence 1, 4, 7, 10, .    Absolute and Relative Cell References   Video presentation of this example    One of the reasons that spreadsheets are so useful for doing mathematics in a business setting is that businesses often do a relatively simple computation for a large number of cases. That means we should pay attention to formulas with cell references and the process of copying a formula from one case to another. In the example above, all of the values change from one month to the next. It is not hard to imagine a calculation where some values remain the same for many cases. Thus we want to look at the idea of absolute and relative cell references. This is a very important topic and an Excel feature we will be using for the rest of the term.  Consider the following example: Your rich uncle, Fred, decided to give you 10 shares of Google stock ( GOOG ) on January first 2009, with the option of receiving instead the same value in either Microsoft ( MSFT ) or Apple stock ( AAPL ). You would like to see the monthly change in value of the portfolios over a three-year period.  We start by going to and collecting the monthly prices of the stocks, downloading the answers into a spreadsheet. When we look up historical prices from Yahoo, we are interested in the adjusted closing price. (They adjust the price to account care of splits and dividends.) That produces a spreadsheet like the one below.   Next we want to compute the number of shares for each stock. This is 10 times the closing price of Google divided by the closing price of the stock we selected.   In the formula for the number of shares of MSFT , we used $B$3 for the initial price of GOOG . This is an absolute cell reference. When we copy the formula from cell C1 to cell D1 , the formula changes from =10*$B$3\/C3 to =10*$B$3\/D3 . This formula in cell D1 asks for 10 times the value in cell B3 , divided by the value in the 2 rows below the cell of the formula.    Absolute references refer to a particular column and\/or row. The dollar sign $ is used to fix the reference.   Relative references refer to the cell the same distance away from the cell containing the formula.   Partial absolute references , like $B3 and B$3 , are absolute in either the row direction or the column direction and relative in the other direction.   We continue our example by computing the change in value of our GOOG portfolio in the first month. That will be the share price at the beginning of the next month minus the share price at the beginning of the month, times the number of shares. For January 2009, for GOOG this becomes =(B4-B3)*B$1 .   Since we have properly used relative and absolute references, we can now copy this formula to complete the chart, and Excel will modify the formula appropriately.   We note that the rows and columns can be independently made absolute or relative. Thus if we are looking at a formula in cell A1 , and see a reference to B2 it means the cell one below and to the right of the location of the formula. If we see $B2 it means the cell in column B that is one row down from the formula. If we see B$2 it means the cell in row two that is one column to the right of the formula.  When we convert back to see the values, we see that an original investment of $3,385.30 would have made a profit of $3,073.70 in GOOG stock, $2,128.02 in MSFT stock and $11,826.60 in AAPL stock. Once again we use the SUM function and a cell range to add the values in the column. We also use the split screen icons in the scroll bars to be able to see the correct rows and columns.    Note : Excel can also make references across multiple pages of a workbook, but we will not need that capability for this course.    Named Cell References  An alternative to using absolute references in formulas is to name the cells.   By default, Excel names each cell by its row and column. We can use the name cell in the upper left corner of the Excel sheet to change the name from the letter\/number format into a descriptive name.   The more descriptive name can be useful when constructing and documenting the process we are using for our computations. Consider the previous example with the rich uncle. In cells B1 , C1 , and D1 , we had the number of shares of Google, Microsoft, and Apple we could have had in the portfolio. Better names for those cells would then be SharesGOOG, SharesMSFT, and SharesAAPL. We can name a cell by editing the name box at the left side of the formula bar.      We can then use the names in formulas. In general, the formulas with nicely named variables are easier to read.        Getting Help  One of the ways that doing mathematics with a program like Excel differs from working with a calculator is that computer programs have help features. It is worthwhile pointing out two that come with Excel. We illustrate both with the SUM function we have used a number of times.  When we call Help from the top menu, we are given a pop up window for Excel Help. It has a number of topics listed by default. It also has a bar for searching topics.   We type the name of the command we are looking for and we are given a page of help for that command.   A second kind of help is the formula builder from the formula ribbon. It gives a more concise help when you do not remember the exact syntax of a command.   A third source of help is simply to do a web search for Excel help. To find how to do a computation with an exponential functions you can search for Excel formulas exponential.     Other Details  Excel is a rich and complex tool. We will be looking at more features as we go through the course. There are several that are worth pointing out explicitly at this point.    For ordinary arithmetic, Excel uses the standard symbols of , , * , \/ , and ^ for plus, minus, times, divided by, and raising to a power.  We can also use the SUM , PRODUCT , QUOTIENT , and POWER commands for ordinary arithmetic.   The order of operations used by Excel differs from the traditional order of operations when it comes to taking powers of negative numbers. The problem is illustrated in evaluating , which has a negative sign and an exponentiation. In all math classes you have taken this is interpreted as or , with exponentiation done first. In Excel, this is interpreted as or 9, with negation done first. When in doubt, use parenthesis to make the order of operations explicit.    Excel also has the other mathematical functions you have used before. The functions for square root, log base 10, log base , and to the power of, are respectively, SQRT , LOG , LN , and EXP .    The value of is represented by EXP(1) .    Excel has a number of very useful operations on collections of numbers. We start with easy ones where the name is self explanatory, like SUM , AVERAGE , COUNT , MIN , and MAX .       Reading Check  Reading check, Functions in the Business Setting   This question checks your reading comprehension of the material is section 1.3, Introduction to Excel Spreadsheets, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We can name cells to make formulas easier to read.    Absolute references refer to a particular column and\/or row. The dollar sign '$' is used to fix the reference.    Relative references refer to the cell the same distance away from the cell containing the formula.    Excel can format an answer as currency.    There is only one correct way to add up three quantities with Excel.    Absolute and relative cell references can be used interchangeably.    We can only check the underlying functions one cell at a time.    In Excel, is written EXP(x).    None of the above                Exercises Introduction to Excel Spreadsheets   Produce a spreadsheet where the first 100 rows are used. The cell in row n and column A should have value n. The cell in row n and column B should have value 2*n. You should be able to do this by typing in the value of 4 cells and using quick fill.   The formulas entered should look like this:   Once we quickfill and have the regular view (not showing the formulas)     The actual spreadsheet has 100 rows.  Note that there is a small window that shows how far the quickfill has gone.   If you want to check the formulas used you go to the Formula menu and choose Show formulas . This feature is good for debugging any problem that may happen.       Produce a spreadsheet where the first 100 rows are used. Column A should contain the first 100 odd numbers. Column B should contain multiples of 7 starting with 21.    Start with the worksheet given. Complete the worksheet in such a way that if the values of x, y, and z are changed, the other values are automatically recomputed.    We do not need to use absolute references in this case, but when we are computing something involving the , and values we should refer to cells B1, B2, and B3 respectively.   The spreadsheet should have entries as shown above.    Produce a spreadsheet where the first 101 rows are used. Row 1 should be used for labels. Column A should contain integers from 1 to 100. Columns B through F should contain the squares, cubes, square roots, logs base 10 and natural logs of the entries in columns A.    Start with the spreadsheet section below.   If column E is copied and pasted into column G, give both the formula and value for each non-empty cell in column G.   Any entry that is absolute (with a $) will be fixed. The relative references (without the $) will change all the Bs to Ds because we moved over 2 columns.  Formulas   Entries     We would like to really understand what happens when we use quick fill.     Let's consider the entries =A1, =$A1, =A$1, and =$A$1 in row 2. Do quick fill below to fill in 3 more rows and see what happens. Clearly in the first row these cells all now point to cell A1 and the value returned is 1. After the first row we get a mixture of values. Why?     Next, we can set up the values in column D. Do quick fill to fill in the 3 columns to the right? Explain the pattern of values we see.        Complete the spreadsheet section below so that columns A through C are complete for numbers 1 to 100. (The value for a should be a random number generated by the formula in cell E1.)    The random number will differ from person to person, but the Excel entries are as follows. Note that we need to use an absolute reference for the value of a !  Formulas   The entry in C2 could also have been given as =A2^2+$E$1 .  Just E$1 will work as well. We are filling down so we really need to fix the row in this case.  In this version the random number settled on (yours is likely different) and the first part of the table looks as follows. The actual answer has all 100 rows completed.     Using the help functions to check syntax, write a formula for cell B2, that looks at the value for cell A2, and if it is negative, returns the square of it, and if positive returns its square root.    Using your favorite source on the web create a spreadsheet that has the closing price of your favorite stock on the first day of the month for the past 5 years. Compute the change in adjusted stock price for each month and identify which month had the greatest increase. ( http:\/\/finance.yahoo.com\/ ) is one source for such data.)   For example if we type in Coca-Cola we get to The Coca-Cola Company (KO)  From the menu on the left choose “Historical Prices” and pull the monthly data from the past 5 years. Then scroll down and download to spreadsheet.  Using the Adjusted close we compute the change:   The above partial table shows what the table should look like.  Using the MAX function for this data the biggest change is $3.39.  Finding the month can be done by inspection as this point (there are more sophisticated ways to do this, but that requires rather advanced Excel commands). In this instance the greatest change took place in December 2013.    Using your favorite source on the web create a spreadsheet that has the closing price of your favorite stock on the first day of the month for the past 5 years. Compute the percentage change in adjusted stock price for each month and identify which month had the greatest increase.    Create a spreadsheet showing the Consumer Price Index by month from 1930-2010. (Good sources are http:\/\/inflationdata.com\/ and http:\/\/www.bls.gov\/cpi\/ at the Bureau of Labor Statistics.) Compute the percentage change between January and July for each year. Which year had the greatest percentage change in the first half of the year?    "
},
{
  "id": "sec-1-3-IntroExcelSpreadsheets-2-5",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#sec-1-3-IntroExcelSpreadsheets-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Basic Arithmetic Show formulas Quick fill Relative and Absolute Reference SUM() "
},
{
  "id": "BasicArithmeticVideo",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#BasicArithmeticVideo",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "BasicArithmeticSubsection-6",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#BasicArithmeticSubsection-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Show Formulas "
},
{
  "id": "ShowFormulasImage",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#ShowFormulasImage",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": "   "
},
{
  "id": "BasicArithmeticSubsection-11",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#BasicArithmeticSubsection-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Show Formulas "
},
{
  "id": "RelativeAbsoluteVideo",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#RelativeAbsoluteVideo",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "RelAbsRefTitle-10-1",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#RelAbsRefTitle-10-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Absolute references "
},
{
  "id": "RelAbsRefTitle-10-2",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#RelAbsRefTitle-10-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Relative references "
},
{
  "id": "RelAbsRefTitle-10-3",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#RelAbsRefTitle-10-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Partial absolute references "
},
{
  "id": "RelAbsRefTitle-18",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#RelAbsRefTitle-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note "
},
{
  "id": "NamedCellBox",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#NamedCellBox",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": "   "
},
{
  "id": "NamedCellFormula",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#NamedCellFormula",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": "   "
},
{
  "id": "Reading_Check_Sec1.3",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#Reading_Check_Sec1.3",
  "type": "Reading Question",
  "number": "1.3.6.1",
  "title": "Reading check, Functions in the Business Setting.",
  "body": "Reading check, Functions in the Business Setting   This question checks your reading comprehension of the material is section 1.3, Introduction to Excel Spreadsheets, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We can name cells to make formulas easier to read.    Absolute references refer to a particular column and\/or row. The dollar sign '$' is used to fix the reference.    Relative references refer to the cell the same distance away from the cell containing the formula.    Excel can format an answer as currency.    There is only one correct way to add up three quantities with Excel.    Absolute and relative cell references can be used interchangeably.    We can only check the underlying functions one cell at a time.    In Excel, is written EXP(x).    None of the above             "
},
{
  "id": "exercises-set-sec-1-3-2",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-2",
  "type": "Exercise",
  "number": "1.3.7.1",
  "title": "",
  "body": " Produce a spreadsheet where the first 100 rows are used. The cell in row n and column A should have value n. The cell in row n and column B should have value 2*n. You should be able to do this by typing in the value of 4 cells and using quick fill.   The formulas entered should look like this:   Once we quickfill and have the regular view (not showing the formulas)     The actual spreadsheet has 100 rows.  Note that there is a small window that shows how far the quickfill has gone.   If you want to check the formulas used you go to the Formula menu and choose Show formulas . This feature is good for debugging any problem that may happen.     "
},
{
  "id": "exercises-set-sec-1-3-3",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-3",
  "type": "Exercise",
  "number": "1.3.7.2",
  "title": "",
  "body": " Produce a spreadsheet where the first 100 rows are used. Column A should contain the first 100 odd numbers. Column B should contain multiples of 7 starting with 21.  "
},
{
  "id": "exercises-set-sec-1-3-4",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-4",
  "type": "Exercise",
  "number": "1.3.7.3",
  "title": "",
  "body": " Start with the worksheet given. Complete the worksheet in such a way that if the values of x, y, and z are changed, the other values are automatically recomputed.    We do not need to use absolute references in this case, but when we are computing something involving the , and values we should refer to cells B1, B2, and B3 respectively.   The spreadsheet should have entries as shown above.  "
},
{
  "id": "exercises-set-sec-1-3-5",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-5",
  "type": "Exercise",
  "number": "1.3.7.4",
  "title": "",
  "body": " Produce a spreadsheet where the first 101 rows are used. Row 1 should be used for labels. Column A should contain integers from 1 to 100. Columns B through F should contain the squares, cubes, square roots, logs base 10 and natural logs of the entries in columns A.  "
},
{
  "id": "exercises-set-sec-1-3-6",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-6",
  "type": "Exercise",
  "number": "1.3.7.5",
  "title": "",
  "body": " Start with the spreadsheet section below.   If column E is copied and pasted into column G, give both the formula and value for each non-empty cell in column G.   Any entry that is absolute (with a $) will be fixed. The relative references (without the $) will change all the Bs to Ds because we moved over 2 columns.  Formulas   Entries   "
},
{
  "id": "exercises-set-sec-1-3-7",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-7",
  "type": "Exercise",
  "number": "1.3.7.6",
  "title": "",
  "body": " We would like to really understand what happens when we use quick fill.     Let's consider the entries =A1, =$A1, =A$1, and =$A$1 in row 2. Do quick fill below to fill in 3 more rows and see what happens. Clearly in the first row these cells all now point to cell A1 and the value returned is 1. After the first row we get a mixture of values. Why?     Next, we can set up the values in column D. Do quick fill to fill in the 3 columns to the right? Explain the pattern of values we see.      "
},
{
  "id": "exercises-set-sec-1-3-8",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-8",
  "type": "Exercise",
  "number": "1.3.7.7",
  "title": "",
  "body": " Complete the spreadsheet section below so that columns A through C are complete for numbers 1 to 100. (The value for a should be a random number generated by the formula in cell E1.)    The random number will differ from person to person, but the Excel entries are as follows. Note that we need to use an absolute reference for the value of a !  Formulas   The entry in C2 could also have been given as =A2^2+$E$1 .  Just E$1 will work as well. We are filling down so we really need to fix the row in this case.  In this version the random number settled on (yours is likely different) and the first part of the table looks as follows. The actual answer has all 100 rows completed.   "
},
{
  "id": "exercises-set-sec-1-3-9",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-9",
  "type": "Exercise",
  "number": "1.3.7.8",
  "title": "",
  "body": " Using the help functions to check syntax, write a formula for cell B2, that looks at the value for cell A2, and if it is negative, returns the square of it, and if positive returns its square root.  "
},
{
  "id": "exercises-set-sec-1-3-10",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-10",
  "type": "Exercise",
  "number": "1.3.7.9",
  "title": "",
  "body": " Using your favorite source on the web create a spreadsheet that has the closing price of your favorite stock on the first day of the month for the past 5 years. Compute the change in adjusted stock price for each month and identify which month had the greatest increase. ( http:\/\/finance.yahoo.com\/ ) is one source for such data.)   For example if we type in Coca-Cola we get to The Coca-Cola Company (KO)  From the menu on the left choose “Historical Prices” and pull the monthly data from the past 5 years. Then scroll down and download to spreadsheet.  Using the Adjusted close we compute the change:   The above partial table shows what the table should look like.  Using the MAX function for this data the biggest change is $3.39.  Finding the month can be done by inspection as this point (there are more sophisticated ways to do this, but that requires rather advanced Excel commands). In this instance the greatest change took place in December 2013.  "
},
{
  "id": "exercises-set-sec-1-3-11",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-11",
  "type": "Exercise",
  "number": "1.3.7.10",
  "title": "",
  "body": " Using your favorite source on the web create a spreadsheet that has the closing price of your favorite stock on the first day of the month for the past 5 years. Compute the percentage change in adjusted stock price for each month and identify which month had the greatest increase.  "
},
{
  "id": "exercises-set-sec-1-3-12",
  "level": "2",
  "url": "sec-1-3-IntroExcelSpreadsheets.html#exercises-set-sec-1-3-12",
  "type": "Exercise",
  "number": "1.3.7.11",
  "title": "",
  "body": " Create a spreadsheet showing the Consumer Price Index by month from 1930-2010. (Good sources are http:\/\/inflationdata.com\/ and http:\/\/www.bls.gov\/cpi\/ at the Bureau of Labor Statistics.) Compute the percentage change between January and July for each year. Which year had the greatest percentage change in the first half of the year?  "
},
{
  "id": "sec-1-4-GraphingFunctionsExcel",
  "level": "1",
  "url": "sec-1-4-GraphingFunctionsExcel.html",
  "type": "Section",
  "number": "1.4",
  "title": "Graphing functions with Excel",
  "body": "Graphing functions with Excel   Link to set up but unworked worksheets used in this section  Link to worksheets used in this section  One area where Excel is different from a graphing calculator is in producing the graph of a function that has been defined by a formula. It is not difficult, but it is not as straight forward as with a calculator. However, it is a skill worth developing . When we are given a formula as part of a problem, we will want to easily see a graph of the function.  We will walk through the process for producing graphs for three examples of increasing complexity. For the first example, we have a specific function and specific range in mind, say over . For the second example, we would like to use parameters in the formula, for example, , with specified values of a, b, and c, and have the ability to easily change the values of the parameters and see the graph. For the third example, we would also like to have the ability to change the domain, graphing over , where and can easily be changed.   A basic graph   Video presentation of this example    Graphing over   We start by producing a column for and one for . In the column for we start with values and , so that we can complete the column with a quick fill. Similarly, we start the columns in the first cell with the replaced by the appropriate cell reference. In this case the formula for is in cell B15 and is in cell A15 .  We then use quick fill and quick copy to fill out the table.      With the values of the cells filled in we highlight the cells we want to graph ( A14 through B35 ) and add a scatter plot for the highlighted values.      (The location of the scatterplot will be a bit different with Macs. The scatterplot is in the Charts ribbon, under other, on Macs.) This gives the desired graph.    A graph with parameters   Video presentation of this example    Graphing as an example of over the domain .  For the second example, we want the same graph, but we want the ability to easily convert the graph of our first quadratic into a different quadratic function. The solution is to consider , , and to be parameters that we can change.  Toward the top of the worksheet, we put the labels , , and , and give values for those parameters. In this case the values of , , and are in cells B9 , B10 , and B11 respectively.  Now we set up the problem in the same way we did above, except that we are using absolute references for , , and , and relative references for .      Now, we once again do a quick fill to complete the table, and then add a scatterplot.   The difference with this second example is that if I now want to look at the graph of , I simply change the values of the parameters , , and .    Controlling the viewing window   Video presentation of this example    Graphing as an example of over the domain , but with the ability to easily change the domain of the graph.  Often, when we graph, we will want to change the domain of the graph. Most easily, I may want to zoom in on a particular region to get a better view of some interesting feature. I may want to look closely at several different regions.  To do this we will again plot 21 points, but we want to have control of the starting point and the change in x between the first and second points. First we add labels and values for x-start and x-step . Then we need a bit of care in defining the values of . The first value of (cell A18 ) is the value of x-start . Every other value of x is defined as the previous value of x plus the value of x-step .   In this case, I want a better look at the vertex of the parabola. I decide I want to see the graph for . My value for x-start is 0. My value for x-step is one twentieth of the distance from 0 to 5, or . I plug those values in and see the graph.    Graphing more than one function   Video presentation of this example    We would also like to put two or more graphs together. For our examples, we will want to use the functions , , and . We start by using the procedure given above to make a chart of values for the three functions.   We then simply select the cells for and the functions we want graphed together and produce a scatterplot as before. (To graph and together, we want to select the columns for , , and .)      One problem with the graph of and together is that the functions have different orders of magnitude, so we do not see that is a parabola. One remedy is to use a secondary axis for the graph of . (Simply double click on one of the points for , and select secondary axis from the axes tab.)       Formatting a chart  Excel has a lot of ways to add formatting to a graph or chart, many more than we want to be concerned with at this point. We simply point out a few and leave it to the reader to explore how this should be used for a good visual presentation. If you click once on the chart to select it, the Chart tab in the home ribbon, adds sub-tabs for layout and format. With Chart Title, you can add a title to the chart, then edit it. The Axes icon allows you to add titles for the axes. If you select a data point form , you can then use the Data Labels icon to add values next to the points. The chart with these annotations is given below. The rule of thumb to follow is to add enough annotations for a reader to be able to easily understand what is happening in the chart.      It is also worthwhile to note that you can manually set the y-range of a graph by double clicking on the axis and setting the values. This is particularly useful of the function has a vertical asymptote.   Online graphing tools: Wolfram Alpha  Throughout this book, we are limiting ourselves to mathematical tools that the student can reasonably expect to find in a generic work environment. That is one of the reasons for focusing on using spreadsheets and Excel. A second reason is that we will spend a significant amount of time on functions defined by data points, where we then try to construct a formula. However when we are starting with a formula, there are easier ways to produce a graph. The simplest is to use the free website, Wolfram Alpha . For example to obtain a graph of the functions , as ranges from to , we simply type plot x^2 - 3 x for x from -5 to 5 and obtain:   We will return to Wolfram Alpha from time to time, when we have nice formulas to manipulate.    Reading Check  Reading check, Functions in the Business Setting   This question checks your reading comprehension of the material is section 1.4, Graphing Functions in Excel, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We can manually change the title of of a chart.    If we want to look at the graph of several quadratic polynomials, we have to start over for each graph.    Secondary axes are useful when looking at functions that are of different scales.    We use a marked scatterplot to graph with Excel.    We can only graph one function at a time with Excel.    Absolute and relative cell references can be used interchangeably.    Sometimes, there are other tools that are easier to use to produce a graph.    We can use absolute references to set up a graph where we can easily change the viewing window.    None of the above                Exercises 1.4 Graphing functions with Excel   Produce a worksheet that with a graph of the function , with going from -10 to 10 by 1.   The entry in cell B2 is =A2^2-5*A2 ; remember to use quickfill to complete the table     Produce a worksheet that with a graph of the function , with going from -10 to 10 by 1. Explain why the graph is inaccurate. (Pay attention to places where there should be asymptotes.)  2* Extra credit) Fix the graph from problem 2 by adjusting the set of -values used.    Produce a worksheet with a graph of for from -10 to 10, where the values of , , and can be changed and the graph will update automatically. For initial values, use , , and .   The entry in B5 should be =A5^3+$B$1*A5^2+$B$2*A5+$B$3 . Note that the references to , and are absolute references.     Produce a worksheet with a graph of for x from -10 to 10, where the values of , , and can be changed and the graph will update automatically. For initial values, use , , and .    Produce a worksheet with a graph of for going from a to b, where the values of and can be changed and the graph will update automatically. For initial values, use and .   The entries are and , and the step size. We assume here that we are using 10 points to create a graph.   The data and the graph looks as follows, and changing and allows us to quickly find several different graphs of the same function.     Produce a worksheet with a graph of for going from to , where the values of a and b can be changed and the graph will update automatically. For initial values, use and .    (Writing assignment) Write a report of 2 pages or less on the graph of the function . The report should be in Word (or other word processor) format with at least 2 graphs that illustrate different features by looking at different viewing windows.    Produce a worksheet with graphs of and , for x going from -10 to 10. Use secondary axes so that both graphs use the full plotting window.    Produce a worksheet with graphs of and , for x going from -10 to 10. Use secondary axes so that both graphs use the full plotting window. Adjust the range of values used to make the graph reasonable.   The entries should look like this:   Using secondary axes we are able to show the important feature of each of the graphs.     Produce a worksheet with graphs of and , for going from -10 to 10. Add a title to the chart. Do something interesting with the fonts or other options and explain what you did.    Use Wolfram Alpha to produce a graph of , for going from -5 to 5. Use your favorite screen capture software and paste the result into an Excel worksheet.   Using Wolfram, the command and the resulting graph look like this:     "
},
{
  "id": "BasicGraphVideo",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#BasicGraphVideo",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "sec-1-4-GraphingFunctionsExcel-3-7",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#sec-1-4-GraphingFunctionsExcel-3-7",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": "   "
},
{
  "id": "SingleGraphTable",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#SingleGraphTable",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": "   "
},
{
  "id": "VideoParametersVideo",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#VideoParametersVideo",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "GraphParamtersTable",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#GraphParamtersTable",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": "   "
},
{
  "id": "sec-1-4-GraphingFunctionsExcel-5-2",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#sec-1-4-GraphingFunctionsExcel-5-2",
  "type": "Figure",
  "number": "1.4.6",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "MultipleFunctionsVideo",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#MultipleFunctionsVideo",
  "type": "Figure",
  "number": "1.4.7",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "TwoFunctionsGraphed",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#TwoFunctionsGraphed",
  "type": "Figure",
  "number": "1.4.8",
  "title": "",
  "body": "   "
},
{
  "id": "SecondaryAxesUsed",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#SecondaryAxesUsed",
  "type": "Figure",
  "number": "1.4.9",
  "title": "",
  "body": "   "
},
{
  "id": "SecondaryAxisImage",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#SecondaryAxisImage",
  "type": "Figure",
  "number": "1.4.10",
  "title": "",
  "body": "   "
},
{
  "id": "Reading_Check_Sec1.4",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#Reading_Check_Sec1.4",
  "type": "Reading Question",
  "number": "1.4.7.1",
  "title": "Reading check, Functions in the Business Setting.",
  "body": "Reading check, Functions in the Business Setting   This question checks your reading comprehension of the material is section 1.4, Graphing Functions in Excel, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We can manually change the title of of a chart.    If we want to look at the graph of several quadratic polynomials, we have to start over for each graph.    Secondary axes are useful when looking at functions that are of different scales.    We use a marked scatterplot to graph with Excel.    We can only graph one function at a time with Excel.    Absolute and relative cell references can be used interchangeably.    Sometimes, there are other tools that are easier to use to produce a graph.    We can use absolute references to set up a graph where we can easily change the viewing window.    None of the above             "
},
{
  "id": "exercises-set-sec-1-4-2",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-2",
  "type": "Exercise",
  "number": "1.4.8.1",
  "title": "",
  "body": " Produce a worksheet that with a graph of the function , with going from -10 to 10 by 1.   The entry in cell B2 is =A2^2-5*A2 ; remember to use quickfill to complete the table   "
},
{
  "id": "exercises-set-sec-1-4-3",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-3",
  "type": "Exercise",
  "number": "1.4.8.2",
  "title": "",
  "body": " Produce a worksheet that with a graph of the function , with going from -10 to 10 by 1. Explain why the graph is inaccurate. (Pay attention to places where there should be asymptotes.)  2* Extra credit) Fix the graph from problem 2 by adjusting the set of -values used.  "
},
{
  "id": "exercises-set-sec-1-4-4",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-4",
  "type": "Exercise",
  "number": "1.4.8.3",
  "title": "",
  "body": " Produce a worksheet with a graph of for from -10 to 10, where the values of , , and can be changed and the graph will update automatically. For initial values, use , , and .   The entry in B5 should be =A5^3+$B$1*A5^2+$B$2*A5+$B$3 . Note that the references to , and are absolute references.   "
},
{
  "id": "exercises-set-sec-1-4-5",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-5",
  "type": "Exercise",
  "number": "1.4.8.4",
  "title": "",
  "body": " Produce a worksheet with a graph of for x from -10 to 10, where the values of , , and can be changed and the graph will update automatically. For initial values, use , , and .  "
},
{
  "id": "exercises-set-sec-1-4-6",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-6",
  "type": "Exercise",
  "number": "1.4.8.5",
  "title": "",
  "body": " Produce a worksheet with a graph of for going from a to b, where the values of and can be changed and the graph will update automatically. For initial values, use and .   The entries are and , and the step size. We assume here that we are using 10 points to create a graph.   The data and the graph looks as follows, and changing and allows us to quickly find several different graphs of the same function.   "
},
{
  "id": "exercises-set-sec-1-4-7",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-7",
  "type": "Exercise",
  "number": "1.4.8.6",
  "title": "",
  "body": " Produce a worksheet with a graph of for going from to , where the values of a and b can be changed and the graph will update automatically. For initial values, use and .  "
},
{
  "id": "exercises-set-sec-1-4-8",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-8",
  "type": "Exercise",
  "number": "1.4.8.7",
  "title": "",
  "body": " (Writing assignment) Write a report of 2 pages or less on the graph of the function . The report should be in Word (or other word processor) format with at least 2 graphs that illustrate different features by looking at different viewing windows.  "
},
{
  "id": "exercises-set-sec-1-4-9",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-9",
  "type": "Exercise",
  "number": "1.4.8.8",
  "title": "",
  "body": " Produce a worksheet with graphs of and , for x going from -10 to 10. Use secondary axes so that both graphs use the full plotting window.  "
},
{
  "id": "exercises-set-sec-1-4-10",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-10",
  "type": "Exercise",
  "number": "1.4.8.9",
  "title": "",
  "body": " Produce a worksheet with graphs of and , for x going from -10 to 10. Use secondary axes so that both graphs use the full plotting window. Adjust the range of values used to make the graph reasonable.   The entries should look like this:   Using secondary axes we are able to show the important feature of each of the graphs.   "
},
{
  "id": "exercises-set-sec-1-4-11",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-11",
  "type": "Exercise",
  "number": "1.4.8.10",
  "title": "",
  "body": " Produce a worksheet with graphs of and , for going from -10 to 10. Add a title to the chart. Do something interesting with the fonts or other options and explain what you did.  "
},
{
  "id": "exercises-set-sec-1-4-12",
  "level": "2",
  "url": "sec-1-4-GraphingFunctionsExcel.html#exercises-set-sec-1-4-12",
  "type": "Exercise",
  "number": "1.4.8.11",
  "title": "",
  "body": " Use Wolfram Alpha to produce a graph of , for going from -5 to 5. Use your favorite screen capture software and paste the result into an Excel worksheet.   Using Wolfram, the command and the resulting graph look like this:   "
},
{
  "id": "sec-1-5-IntroBestFitCurves",
  "level": "1",
  "url": "sec-1-5-IntroBestFitCurves.html",
  "type": "Section",
  "number": "1.5",
  "title": "Using Excel to find best-fit curves",
  "body": " Using Excel to find best-fit curves   Overview  Link to set up but unworked worksheets used in this section  Link to worksheets used in this section  In we looked at useful mathematical models and formulas that we anticipate seeing repeatedly in the business environment. If we are given equations that model the processes we are interested in, then this approach works. What happens though if we are not given equations? Many important functions in business are quite often defined by data. Examples include past sales, material costs, and consumer demand.  If we are given a data set, we can find a best fitting curve. A straightforward approach is to assume that the data represents the output of a nice formula. In real life applications, we will often see that so-called \"noise\" can complicate the situation. (Noise is a technical term to describe external unpredictable factors that may cause your data to deviate form the model. For example, if I am looking at sales at a fast food restaurant, our model will have noise from traffic jams and bad weather outside.) For the purpose of this course we will assume that the data will be reasonably nice, although some noise may be evident. The problem of producing a best fitting curve to data can be broken into two pieces:    We need to decide what kind of curve, or what model we want to use.  We want to be able to set the parameters (the constants) in the model to give the best fit.    Coming up with a theoretical reason why we want to use a particular model in a given case forms the content of a large number of your business courses, both courses you have already taken and courses you are yet to take. The models that come up repeatedly in the theoretical courses are given names and used without redoing the theoretical foundation for the model. (This is why we introduced the normal distribution and the logistic growth function, neither of which looks like a simple equation.) In this course, we will be happy with simple heuristic arguments on which model to choose.  The second half of the problem is deciding how to choose the parameters to give the curve that does the best job of fitting the data. A moment of reflection shows deciding on the correct definition of best fitting is a nontrivial task beyond the scope of this course. For the time being we will accept the standard definition:   The best fitting curve minimizes the sum of the squares of the differences between the measured and predicted values.   We will come back to that definition later in the course, when we know more calculus, but for now we simply note that it is the standard definition, and is used by Excel. Instead, we will focus on using Excel to produce a best fitting curve of the appropriate model. Excel has a preprogrammed feature that will find the best fitting equation for a data set for a select number of functions:    Linear model  Exponential model  Polynomial model  Logarithmic model  Power model    We will show how to find an equation for a data set, assuming we know what model would be the best one to represent the data.   Using Excel to find a best-fit line    Video presentation of this example     Find the line  For a first example, we are running a widget factory and have the following data on employee performance:    (A parenthetical note: In economics, widget is a placeholder name for a generic manufactured device. It is only in recent times that it has also become a small computer GUI unit.)   We would like a formula for widgets produced as a function of hours worked. Since we can see two entries each, for 36, 43, and 44 hours worked, there cannot be a function that hits all our data exactly. While we expect a linear function, we are not surprised if there is random noise, as a worker may take a break, or be particularly focused on a given day. We start by creating a scatterplot for my data.   We right click (control-click on a Mac) on one of the data points and we get a contextual menu. We select Add Trendline .       Produce the equation of the line  When adding a trend line, we need to select from a number of options. The first option concerns the mathematical model we want to choose. Given that we suspect the number of widget produced will be roughly proportional to the hours worked, we want to use a linear model, so we make that choice. Under options, we want to display the equation on the chart.      We have added a linear trend line to the graph and can also see the equation for the line. We could use that equation to plan how many hours we want our workers on the job based on the number of widgets we expect to sell.    Bring the equation of the line back to the chart  Having found a best fitting line, I want to copy the equation back into my spreadsheet and to be able to compare the values in my data with the projections from my equation. You should notice that the equation Excel produces in the chart is written in standard mathematical notation, while the corresponding equation in cell B3 is in Excel notation. (In Excel notation we need a symbol for multiplication rather than simply putting a number and variable together. In Excel notation, we also use a cell reference, B1, rather than a variable, x.)      Checking and improving our equations    Video presentation of this example    When finding the best fitting curve to data we have gathered, we need to pay attention to the model we have chosen and to the range to which we want to apply it. In our example, the linear fit looks pretty good. However, we should be careful about using it on too wide a domain. According to our model, a worker who works no hours produces 12.52 widgets a week, which is obviously silly. In the other direction, it predicts that a worker who worked 168 (= 7 24) hours a week would produce almost 970 widgets, instead of predicting a collapse from exhaustion.  The other issue is the choice of a model. We chose a linear model. An argument could easily be made for a proportional model. (A worker who works no hours produces no widgets.) We can switch to the proportional model by setting the -intercept to 0 in options for the trend line. Then the equation is instead of our original equation of .   We should also be careful about trying to get a better fit by using an inappropriate model. In our case, we can get a better fit by allowing the curve to be a 6th degree polynomial. However the resulting equation does not make sense. It predicts that a worker will produce about quarter million widgets with a 1-hour work week, and widgets with a 55-hour work week.    Fitting the Consumer Price Index ( CPI ) to a best fitting curve; an extended example     Video presentation of this example    For our second example, we will look at the consumer price index and try and fit it to a model. This example will illustrate several issues we need to keep in mind when building models. We obtained data for the consumer price index from   .  The data from 1960 to 2011 is in the worksheet Section-1-5-Examples.xlsx .      Since we expect prices to rise as a percentage of the current prices, we expect the CPI to be modeled by an exponential curve. We start by selecting the data, producing a scatterplot, and adding a best fitting curve using an exponential model. We will always select the option to show the equation on the chart.      This first attempt gives an exponential formula, but it is unsatisfactory for a number of reasons.  That constant only shows one significant digit, which is not enough to make meaningful predictions.  The font size is too small to easily read off the resulting equations.  The constant coefficient is ridiculously small because it gives the projected value of the index in the year o.  The graph does not look like a very good fit. The plot of the numbers actually looks as though it represents three different graphs.    We will work through the problems one at a time.   Number of significant digits for equation constants  The first problem is that the equation Excel has given us does not have enough significant digits to make useful predictions. We want to right click on the equation, select Format Trendline Label . We are given a dialog box that lets us make formatting options. Since the lead coefficient is so small, we want the numbers formatted in scientific notation. We choose 4 digits beyond the decimal point in that notation.      This gives us a better equation. It should be noted that our pictures in this book use the font option in the formatting to use a larger sized font.    Setting the base point of a variable  The next issue to deal with is adjusting the year. Looking at the raw data, the CPI was 100 sometime in 1983. Thus we simply add an extra column to our spreadsheet where the adjusted year is the current year minus 1983. In our graph, we also adjust the labels so a reader can still understand our chart.    Continued video presentation of this example     Selecting data for one model  Now we want to look at the more serious question, the one that says the model does not fit very well. Looking at our data, the inflation rate seems to fall into roughly 3 blocks, the years before 1973, the years from 1973-1983, and the years after 1983. We would want to go back to our economics classes and find an argument that says this division of years is reasonable. Using the same menu that lets us add a trend line, we can edit the source data. We want to restrict to the years after 1983. In our case, that means restricting to rows 1 to 30.   This breaks the data into two pieces. The first piece is the period from 1983 till 2011. As we see, the exponential model fits quite well in that case.   The second piece is the period from 1973 till 1982. Once again, the exponential model fits quite well over that period. Notice that the exponent is quite different in the two periods.   The obvious question that arises is to figure out what happened in 1983 that caused the economic model to shift. That question is beyond the scope of this course.       Reading Check  Reading check, Using Excel to Find Best Fit Curves   This question checks your reading comprehension of the material is section 1.5, Using Excel to Find Best Fit Curves, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We can change the number of digits shown in the trendline equation.    When interpreting a trendline we need to be careful about the domain where the function makes sense.    With an exponential model, it does not matter what we choose as the base year.    It does not matter which model we use with trendline.    The trendline equation can simply be copied into a cell for computation.    The best fitting curve minimizes the sum of the squares of the differences between the measured and predicted values.    In Excel we 'Add a Trendline' to a scatterplot to find a best fitting curve.    None of the above                Exercises: Using Excel to find best fit curves   We have the following data on widget production:    Month Jan Feb  Mar Apr May    Production 16,597 30,687  48,441 55,751 79,606      Find the best fitting linear function for the data.  Give the production value that function predicts for May.  Give the production value that function predicts for July.        Create a scatter plot for the data. Then use the menu to go to Chart Chart layout Trendlines. Find the linear approximation and under options choose to display the function.   Excel automatically changes the months into numerical values.  The best linear function for the data is .    Create a new table using the function to determine the predicted production levels.   Excel needs x to be a number, so we need to insert a row and provide the appropriate numerical values: 1 for Jan, 2 for Feb,   The predicted production for May is 76,432.    To find the production level for July we enter x = 7 in the table and compute the output.  The linear model predicts a production of 106, 648 for the month of July.       We have the following data on gizmo sales:    Month Jan Mar  Apr July Aug    Units sold 1.505 9,042  13,018 21,873 22,636      Find the best fitting linear function for the data.   Extend the chart to give the projected sales for each month from January through September. (You need to add a row for predicted sales, and also add a number of columns for missing months.)       We have the following data on gadget revenue:    Units sold 3,000 5,000  7,000 9,000 11,000    Revenue 16,161 24,783  34,484 38,014 33,030      Find the best fitting linear function for the data.  Find the best fitting quadratic function for the data.   The data fits a quadratic function better than a linear function. With a quadratic model we do not maximize revenue by selling as many units as possible. Explain why this is reasonable in the real world.   Project the revenue for selling 15,000 units with both linear and quadratic models.        We can do scatterplots and use the linear trendline find the models we need.   The linear model is .    We can do scatterplots and use the polynomial trendline of degree 2 to find the model we need. (See the second image in part (a).)  The quadratic (polynomial of degree 2) model is  The graphs show that the quadratic equation is the better model and follows the data more closely.    The revenue function is given by price * quantity. If we offer more units the price will eventually go down. If the price goes down faster than the number of new items sold, the revenue will at some point go back down.    Plug into and we get $48,082.50 for the linear model.  Plug into , and we get $13, 824 for the quadratic model.  [You can use Excel, a calculator or Wolfram Alpha to do these last computations.]       In building water tanks, design considerations indicate the weight of the dry tank should be roughly a power function of the capacity. I am interested in building a larger tank than I have before. I have the following data between capacity and weight:    Gallons 1,000 5,000  7,000 9,000 17,000    Weight 103 878  1,339 1,927 4,496      Find the best fitting power function for the data.  Use your power function to estimate the weight of a tank that holds 40,000 gallons.  Find the best fitting linear function for the data.  Use your linear function to estimate the weight of a tank that holds 40,000 gallons.   Visually, both curves seem to fit the data quite well, yet they make noticeable different predictions for the weight of a larger tank. Which prediction would you use? Justify your answer.       I am looking at sales figures for a new product, the gizmo. The sales figures seem to be growing at an exponential rate.    Month  Jan Apr  July Oct Jan    Units sold 1082 1680  2662 3783 6430      Find the best fitting exponential function for the data.  Using your function, predict sales for the July after the data was collected.        Using the scatterplot and the trendline from the Chart menu, we choose Exponential Trendline and display the function. Note that we do need to change the months to the appropriate numerical value. Excel would just replace them by consecutive numbers.   The best fitting exponential curve given by Trendlines is .    To find the predicted units sold for July we would need .   Using Excel we see that the predicted number of units sold is 14,949.        Excel has a limited set of models that can be used for trend lines to automatically fit curves to data. In later sections we will look at how to we can use calculus to find best fitting curves for other models. Until we develop those techniques, we can make a guess at parameters that will make curves fit.    The unit sales of widgets can be expected to follow a logistic model, with rapid growth of sales, but with eventual saturation of the market so that there is a cap on the market. In such a case the sales should be modeled by a logistic equation, of the form . We have the following data on sales:    time(years) 0 2  4 6 8    sales 1000 5610  14,845 19,095 19,870    Find values of the parameters MarketCap, adjustment, and rate to reasonably fit the data.    The unit sales of an article of clothes for adults can be expected to follow the model of a normal distribution. In such a case the sales should be modeled by a normal equation, of the form . (Note we need an extra set of parenthesis to keep the order of operations correct.) We have the following data on sales:    size 7 8  9 10 11 12    Weight 360 3,390  12,820 20,000 12,826 3,375    Find values of the parameters MaxPerSize, Mean, and StandardDeviation to reasonably fit the data.   The initial plot shows that the distribution is normal:   The maximum is at . This suggests that .  If we use , then if we have , and so , hence we have that .  Let , then .  Hence . Then   So so  Comment: We will develop some methods to solve problems such as this using Excel in in .    The populations of the states can be found online for both the 2000 and 2010 censuses.  (A good site is http:\/\/en.wikipedia.org\/wiki\/List_of_U.S._states_and_territories_by_population .)     Explain why one would guess the 2010 population of a state is roughly a linear function of the 2000 population of the state.    Download the 2000 and 2010 populations of the 50 states. Produce a scatterplot that has the 2010 population as a function of the 2000 population. Find the equation of a best fitting curve for the data.    Explain what the -intercept means in terms of people moving to or away from states with large populations.       The tax revenues of the states can be found online. (A good site is the census bureau at http:\/\/www.census.gov\/govs\/state\/ .)     Explain why one would guess the 2010 tax revenue of a state is roughly a linear function of the 2010 population of the state.    For 10 states, produce a scatterplot that has the 2010 tax revenue as a function of the 2010 population. Find the equation of a best fitting curve for the data.    Explain what the -intercept means in terms of the relationship of the size of the state and the tax burden per person.         Projects:    Find the data for the consumer price index and the Dow Jones Industrial average at the start of the year for the past 50 years. Over that time, what is the best linear relationship between the two indices? To make your equation easier to understand, scale the indices so they both start at 100 on the same day.    Pick your two favorite stocks and chart their prices on the opening days for a period of 30 years. How well are their prices modeled as a linear model of each other? See if you can find two stocks that seem to be inversely proportional to each other.     "
},
{
  "id": "sec-1-5-IntroBestFitCurves-2-9-1",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#sec-1-5-IntroBestFitCurves-2-9-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "best fitting curve "
},
{
  "id": "BestFitLinearVideo",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#BestFitLinearVideo",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "BestFitLinearCurve-3-7",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#BestFitLinearCurve-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Add Trendline "
},
{
  "id": "AddTrendlineMenu",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#AddTrendlineMenu",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": "   "
},
{
  "id": "AddTrendlineOptions",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#AddTrendlineOptions",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": "   "
},
{
  "id": "sec-1-5-IntroBestFitCurves-4-2",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#sec-1-5-IntroBestFitCurves-4-2",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "sec-1-5-IntroBestFitCurves-5-2-1",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#sec-1-5-IntroBestFitCurves-5-2-1",
  "type": "Figure",
  "number": "1.5.5",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "sec-1-5-IntroBestFitCurves-5-2-5",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#sec-1-5-IntroBestFitCurves-5-2-5",
  "type": "Figure",
  "number": "1.5.6",
  "title": "",
  "body": "   "
},
{
  "id": "sec-1-5-IntroBestFitCurves-5-2-7",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#sec-1-5-IntroBestFitCurves-5-2-7",
  "type": "Figure",
  "number": "1.5.7",
  "title": "",
  "body": "   "
},
{
  "id": "FormatTrendlineLabel",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#FormatTrendlineLabel",
  "type": "Figure",
  "number": "1.5.8",
  "title": "",
  "body": "   "
},
{
  "id": "sec-1-5-IntroBestFitCurves-5-4-4",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#sec-1-5-IntroBestFitCurves-5-4-4",
  "type": "Figure",
  "number": "1.5.9",
  "title": "",
  "body": " Continued video presentation of this example   "
},
{
  "id": "Reading_Check_Sec1.5",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#Reading_Check_Sec1.5",
  "type": "Reading Question",
  "number": "1.5.4.1",
  "title": "Reading check, Using Excel to Find Best Fit Curves.",
  "body": "Reading check, Using Excel to Find Best Fit Curves   This question checks your reading comprehension of the material is section 1.5, Using Excel to Find Best Fit Curves, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We can change the number of digits shown in the trendline equation.    When interpreting a trendline we need to be careful about the domain where the function makes sense.    With an exponential model, it does not matter what we choose as the base year.    It does not matter which model we use with trendline.    The trendline equation can simply be copied into a cell for computation.    The best fitting curve minimizes the sum of the squares of the differences between the measured and predicted values.    In Excel we 'Add a Trendline' to a scatterplot to find a best fitting curve.    None of the above             "
},
{
  "id": "exercises-set-sec-1-5-2",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-2",
  "type": "Exercise",
  "number": "1.5.5.1",
  "title": "",
  "body": " We have the following data on widget production:    Month Jan Feb  Mar Apr May    Production 16,597 30,687  48,441 55,751 79,606      Find the best fitting linear function for the data.  Give the production value that function predicts for May.  Give the production value that function predicts for July.        Create a scatter plot for the data. Then use the menu to go to Chart Chart layout Trendlines. Find the linear approximation and under options choose to display the function.   Excel automatically changes the months into numerical values.  The best linear function for the data is .    Create a new table using the function to determine the predicted production levels.   Excel needs x to be a number, so we need to insert a row and provide the appropriate numerical values: 1 for Jan, 2 for Feb,   The predicted production for May is 76,432.    To find the production level for July we enter x = 7 in the table and compute the output.  The linear model predicts a production of 106, 648 for the month of July.     "
},
{
  "id": "exercises-set-sec-1-5-3",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-3",
  "type": "Exercise",
  "number": "1.5.5.2",
  "title": "",
  "body": " We have the following data on gizmo sales:    Month Jan Mar  Apr July Aug    Units sold 1.505 9,042  13,018 21,873 22,636      Find the best fitting linear function for the data.   Extend the chart to give the projected sales for each month from January through September. (You need to add a row for predicted sales, and also add a number of columns for missing months.)     "
},
{
  "id": "exercises-set-sec-1-5-4",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-4",
  "type": "Exercise",
  "number": "1.5.5.3",
  "title": "",
  "body": " We have the following data on gadget revenue:    Units sold 3,000 5,000  7,000 9,000 11,000    Revenue 16,161 24,783  34,484 38,014 33,030      Find the best fitting linear function for the data.  Find the best fitting quadratic function for the data.   The data fits a quadratic function better than a linear function. With a quadratic model we do not maximize revenue by selling as many units as possible. Explain why this is reasonable in the real world.   Project the revenue for selling 15,000 units with both linear and quadratic models.        We can do scatterplots and use the linear trendline find the models we need.   The linear model is .    We can do scatterplots and use the polynomial trendline of degree 2 to find the model we need. (See the second image in part (a).)  The quadratic (polynomial of degree 2) model is  The graphs show that the quadratic equation is the better model and follows the data more closely.    The revenue function is given by price * quantity. If we offer more units the price will eventually go down. If the price goes down faster than the number of new items sold, the revenue will at some point go back down.    Plug into and we get $48,082.50 for the linear model.  Plug into , and we get $13, 824 for the quadratic model.  [You can use Excel, a calculator or Wolfram Alpha to do these last computations.]     "
},
{
  "id": "exercises-set-sec-1-5-5",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-5",
  "type": "Exercise",
  "number": "1.5.5.4",
  "title": "",
  "body": " In building water tanks, design considerations indicate the weight of the dry tank should be roughly a power function of the capacity. I am interested in building a larger tank than I have before. I have the following data between capacity and weight:    Gallons 1,000 5,000  7,000 9,000 17,000    Weight 103 878  1,339 1,927 4,496      Find the best fitting power function for the data.  Use your power function to estimate the weight of a tank that holds 40,000 gallons.  Find the best fitting linear function for the data.  Use your linear function to estimate the weight of a tank that holds 40,000 gallons.   Visually, both curves seem to fit the data quite well, yet they make noticeable different predictions for the weight of a larger tank. Which prediction would you use? Justify your answer.     "
},
{
  "id": "exercises-set-sec-1-5-6",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-6",
  "type": "Exercise",
  "number": "1.5.5.5",
  "title": "",
  "body": " I am looking at sales figures for a new product, the gizmo. The sales figures seem to be growing at an exponential rate.    Month  Jan Apr  July Oct Jan    Units sold 1082 1680  2662 3783 6430      Find the best fitting exponential function for the data.  Using your function, predict sales for the July after the data was collected.        Using the scatterplot and the trendline from the Chart menu, we choose Exponential Trendline and display the function. Note that we do need to change the months to the appropriate numerical value. Excel would just replace them by consecutive numbers.   The best fitting exponential curve given by Trendlines is .    To find the predicted units sold for July we would need .   Using Excel we see that the predicted number of units sold is 14,949.     "
},
{
  "id": "exercises-set-sec-1-5-7-2",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-7-2",
  "type": "Exercise",
  "number": "1.5.5.6",
  "title": "",
  "body": " The unit sales of widgets can be expected to follow a logistic model, with rapid growth of sales, but with eventual saturation of the market so that there is a cap on the market. In such a case the sales should be modeled by a logistic equation, of the form . We have the following data on sales:    time(years) 0 2  4 6 8    sales 1000 5610  14,845 19,095 19,870    Find values of the parameters MarketCap, adjustment, and rate to reasonably fit the data.  "
},
{
  "id": "exercises-set-sec-1-5-7-3",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-7-3",
  "type": "Exercise",
  "number": "1.5.5.7",
  "title": "",
  "body": " The unit sales of an article of clothes for adults can be expected to follow the model of a normal distribution. In such a case the sales should be modeled by a normal equation, of the form . (Note we need an extra set of parenthesis to keep the order of operations correct.) We have the following data on sales:    size 7 8  9 10 11 12    Weight 360 3,390  12,820 20,000 12,826 3,375    Find values of the parameters MaxPerSize, Mean, and StandardDeviation to reasonably fit the data.   The initial plot shows that the distribution is normal:   The maximum is at . This suggests that .  If we use , then if we have , and so , hence we have that .  Let , then .  Hence . Then   So so  Comment: We will develop some methods to solve problems such as this using Excel in in .  "
},
{
  "id": "exercises-set-sec-1-5-7-4",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-7-4",
  "type": "Exercise",
  "number": "1.5.5.8",
  "title": "",
  "body": " The populations of the states can be found online for both the 2000 and 2010 censuses.  (A good site is http:\/\/en.wikipedia.org\/wiki\/List_of_U.S._states_and_territories_by_population .)     Explain why one would guess the 2010 population of a state is roughly a linear function of the 2000 population of the state.    Download the 2000 and 2010 populations of the 50 states. Produce a scatterplot that has the 2010 population as a function of the 2000 population. Find the equation of a best fitting curve for the data.    Explain what the -intercept means in terms of people moving to or away from states with large populations.     "
},
{
  "id": "exercises-set-sec-1-5-7-5",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-7-5",
  "type": "Exercise",
  "number": "1.5.5.9",
  "title": "",
  "body": " The tax revenues of the states can be found online. (A good site is the census bureau at http:\/\/www.census.gov\/govs\/state\/ .)     Explain why one would guess the 2010 tax revenue of a state is roughly a linear function of the 2010 population of the state.    For 10 states, produce a scatterplot that has the 2010 tax revenue as a function of the 2010 population. Find the equation of a best fitting curve for the data.    Explain what the -intercept means in terms of the relationship of the size of the state and the tax burden per person.     "
},
{
  "id": "exercises-set-sec-1-5-8-1-1",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-8-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Projects: "
},
{
  "id": "exercises-set-sec-1-5-8-2",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-8-2",
  "type": "Exercise",
  "number": "1.5.5.10",
  "title": "",
  "body": " Find the data for the consumer price index and the Dow Jones Industrial average at the start of the year for the past 50 years. Over that time, what is the best linear relationship between the two indices? To make your equation easier to understand, scale the indices so they both start at 100 on the same day.  "
},
{
  "id": "exercises-set-sec-1-5-8-3",
  "level": "2",
  "url": "sec-1-5-IntroBestFitCurves.html#exercises-set-sec-1-5-8-3",
  "type": "Exercise",
  "number": "1.5.5.11",
  "title": "",
  "body": " Pick your two favorite stocks and chart their prices on the opening days for a period of 30 years. How well are their prices modeled as a linear model of each other? See if you can find two stocks that seem to be inversely proportional to each other.  "
},
{
  "id": "sec-1-6-GoalSeek",
  "level": "1",
  "url": "sec-1-6-GoalSeek.html",
  "type": "Section",
  "number": "1.6",
  "title": "Finding Numerical Solutions with Goal Seek",
  "body": " Finding Numerical Solutions with Goal Seek   Link to unworked worksheets used in this section  Link to worksheets used in this section  In previous sections, we looked at deciding on a model to use for numerical data, and finding the best fitting curve of that model for our data. Once we have completed those phases of the process, we have reduced our data to an equation. At that point we want to use the equation to answer some question. Sometimes ,that question will reduce to solving an equation, as when we have an equation for profit as a function of sales and we want to know when the business will break even. At other times, we want to know what input gives a desired output. ( , How much do I need to sell to make $100,000 in commission?)  We can obviously use all the algebraic techniques we developed in previous courses to solve our problem symbolically. However, Excel gives us two tools to use to solve problems numerically, Goal Seek and Solver. In this section we will explore Goal Seek, the simpler of these tools.     We will use Goal Seek if we know what the desired output of an equation is, and would like to know when that output is achieved.  We need to have an equation to work with and we can only solve for one kind of input (variable).  Goal Seek is located under the What-If analysis menu.      A linear example   Video presentation of this example    As with all new techniques in a math class, we start with a very simple example that you can easily solve by methods you learned in previous courses. Suppose we have the function , and I want to find the value of where . I start by setting up a worksheet with and as columns. I also need to start with a guessed value, which can be any number. I will start by guessing a value of 5. (I will enter that value twice so we can see before and after.)      I then go to the data tab and under the What-If analysis menu choose Goal Seek. In the Goal Seek dialog, I want to change B3 , to , to 40 by changing A3 , or . I then select OK.      Excel finds the value and asks if it is OK to replace the initial guess with that value. In this case, Excel found the value of or , which we could also have found by simple algebra.       A quadratic example and concern with precision  We move on to a quadratic example. We let and want to find . The set up is similar, with an appropriate change in the equation. However when I use Goal Seek, I don't get quite the correct answer.   Instead of finding a value with , I found a value with .    We note that Excel is not solving the problem algebraically, but is finding a numerical approximation within a preset tolerance.  It is actually finding an x such that f(x) is within 0.001 of 2.    For most of our work, that is close enough. Sometimes, however, we may want more precision. (Our units may be millions of dollars.) In that case, we can improve the precision with a work around. We add another cell with a formula whose value is a large number, say , times the error. We then use Goal Seek to make that value close to zero. We effectively reduce our error tolerance by a factor of our large number. Applying this to our example gives:   This has computed the value of the square root of 2 to 10 digits.   More realistic examples: finding the intersection of two curves  Equivalently, finding where two functions are equal to one another.   Video presentation of this example    In economics, there are the concepts of supply and demand prices, the prices that will produce a specified supply or demand. (We will look at this problem in more depth in the next chapter.) Suppose we are told the formula for the supply and demand prices of a product are:  . We want to find the quantity where supply and demand prices are equal. We first do a fast graph to get an understanding of what is going on.   We can see that the curves cross when q is somewhere between 100 and 110. To make this a Goal Seek problem, we add an extra column for the difference between supply and demand, and look for where that is zero.   We see that equilibrium occurs when q is 106.725. We could have found this algebraically by solving the equation , but that is not an easy problem.  Our last example for Goal Seek looks at financial computations.   Using Goal Seek for financial computations   Video presentation of this example    Assume you have decided to open a retirement account when you get out of college. You decide that you will start by contributing $2,000 at the beginning of each year, with that amount increasing by $100 each year, assuming a 5% annual interest rate. The relevant formulas are: . It becomes easy to set up a spreadsheet to compute the balance at the end of 40 years.   (We will look at this example in greater detail in a later chapter. For now, note that this example is in the Excel notebook for this section.) We can see that we have a bit more than $420,000 after 40 years.   With Goal Seek it is easy to ask the question of how we need to change the problem to have a balance of $500,000 after 40 years, either by changing the initial deposit, or the rate at which deposits are increasing, or the expected yield. We see that we need a yield of 5.74% to have $500,000 ready for retirement.   It is worthwhile to note that in this case our final balance is the result of a 120-step computation with our input variable. Goal Seek finds a solution without us having to reduce that 120-step computation to a single long formula.   Looking under the hood and understanding Goal Seek's limitations  As with any tool we use, it is wise to have some understanding of the method used by Goal Seek. That will help us understand when it is giving us an answer different from the one we were expecting, or even gives us an answer that is wrong.   Video presentation of this example    Goal Seek uses Newton's Method, a technique based on Calculus, to find solutions. The heart of the method is based on the fact that, at least for most functions nice enough to show up in a course like this, when you zoom in far enough on a graph you will get something that looks like a straight line. The line we find that way is called the tangent line. (Finding the slope of the tangent line, or the instantaneous rate of change, is one of the main goals of calculus, and is given the name of finding the derivative.) If we start with a guessed solution, we can produce a tangent line, find the point where the tangent line reaches the desired value, and take the point's x-coordinate as our next guess. Repeating this process usually converges to a solution.   If we use the spreadsheet to illustrate Newton's method for our example, finding the solution for starting with a guess of , we see that it converges in 5 iterations. (At this point, we are simply illustrating how Goal Seek works. You are not yet expected to be able to replicate the process. You will learn how to find the slope of the tangent in later chapters.)   As mentioned earlier, the reason for looking under the hood of Goal Seek is to understand when it gives us an unexpected answer. A simplified description of the method used is that it heads down to where it expects to find a solution and repeats the process until it is within 0.001 of the desired answer. There are several easy ways for this method to cause problems.   Further video for this example    The first difficulty is that Goal Seek may not give you the answer you are looking for if there are multiple answers. The function has three roots, . If we give Goal Seek a starting point of , it will give the solution of .   As a general rule, Goal Seek will get to the correct answer if there are no big curves between the guess and the answer. Another difficulty arises if you ask Goal Seek a question for which there is no answer. The easy case is when there is no answer and we don't even get close. We could ask it to find an x with . Since we know that all squares are non-negative, this does not have an answer. Goal Seek will tell us that, but it will make some pretty wild guesses.   In this case Goal Seek will run for a fixed number of iterations and tell us it may not have found a solution. In that case it will tell us where it ended and give us the choice of accepting that point, or cancelling and going back to where we started. If there is no solution and one of our intermediate points was close to a point with a flat tangent line, we may wind up anywhere.  The more challenging case arises when there is no answer, but we get close. We can ask Goal Seek to find an x with . Clearly this problem has no answer. However, if we start with a guess of , we get an answer of . That is because is within our tolerance of 0. In both of these cases, we see that when we use Goal Seek we should also look at the graph of the function in question to make sure we are asking a reasonable question.   A variant of these problems occasionally shows up. If we start with a carefully rigged problem we can set the algorithm of Goal Seek into a loop. If we start with the function with an initial guess of , and ask Goal Seek to find when , Goal Seek will not find an answer. In this case we could look at a graph and make an initial guess of 6, and then get a correct answer. Once again, with a numerical method, it pays to try some cases and make sure that our guess is close to a reasonable answer. If is a continuous function, this means finding a value of where is too low and another value where is too high.  While Excel is a powerful tool, we should always ask if there is an easier way to do a problem. Most of the examples we looked at in this section boil down to finding a solution to where is a simple equation. We can solve such problems more quickly with Wolfram Alpha.   As noted above, Goal Seek is most useful for problems with lots of steps where we would have difficulty reducing the problem to a single equation.    Reading Check  Reading check, Finding Numerical Solutions with Goal Seek   This question checks your reading comprehension of the material is section 1.6, Finding Numerical Solutions with Goal Seek, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Goal Seek finds an exact answer.    Goal Seek lets you determine the input of a function that gives a desired output.    Goal Seek is found by choosing what if analysis.    Goal Seek only works with if the function can be put in a single cell.    Goal Seek always finds the answer closest to the starting value.    Goal seek gets confused by functions that asymptotically approach zero.    Goal Seek stops when it finds an answer whose output is within 0.001 of the desired output.    None of the above                Finding Numerical Solutions with Goal Seek    Use Goal Seek to find where the given equation has the desired value.    Let . Find an so that .   Wolfram detects two solutions.     Let . Find an so that .    Let . Find an so that .      Let . Find an so that .    Let . Find an so that .    Note that next to the solution there is a button for Approximate form .  We can use that to get a decimal approximation:   Note that we can get more digits if we want or return to the exact answer    Let . Find an so that .      Use Goal Seek to find the indicated number of points where the curves intersect.    Find an intersection point of and .   Finding the intersection point means we are setting the two equations equal to one another. Wolfram will include a plot of the solution as well as the numerical answer.   Wolfram tells us that . We can plug that into one of the equations and get . So the intersection point is .    Find an intersection point of and .    Find an intersection point of and .    Wolfram finds two intersections: one at and the other at .  Using the function we get the two intersection points at and .    Find an intersection point of and .    Find both intersection points of and .    The -coordinates must be 0. If we use the approximate form of the solution we get and .    Find both intersection points of and .     We have reason to believe that the profit function for widget manufacturing is modeled by a quadratic equation. We have the following data for sales and profits.    Sales 100 250  350 500 600    Profit $8,462 $18,378  $22,455 $24,400 $23,747      Find the best fitting curve for the data.   Find the two break-even point, or amount of sales that yield a profit of $0.        Using Excel we find the best fitting polynomial of order 2:        Using Wolfram we then find where the profit is 0. Using the approximate form of the solution is preferable in this case because we want to know at what Sales we have 0 profit (the break-even points).   The break-even points are at sales of 5.55 and 995.05.       A certain bank will give a $75 bonus on a new account with a deposit of $1000, and then pays 5% interest compounded continuously. A second investment opportunity will pay $100 per year.    Which opportunity pays more in the first year?  For what period of time do the two opportunities offer the same return?  What is the payout from the two opportunities for a 30-year investment?  What is the second period of time when the two opportunities offer the same return?      Let .    Find a solution with Goal Seek starting with x=1.  What happens when Goal Seek tries to find a solution starting at ?  Explain why, from the graph of , we should expect this problem.        The entry in cell B2 is =(10*A2-1)*EXP(-A2)+2 .  In the screen grab the values of for and are given, and below it the result for the GoalSeek procedure are given.   For as the starting point GoalSeek find a zero at     Starting at GoalSeek does not find a zero at all. If we run GoalSeek a second time, now starting with the value at we zoom in on the first zero!    Using Wolfram, we see a fairly complicated solution, but we are also shown that there is one real solution.   Looking at the graph we see that there is clearly only one solution to the equation .  If we start Goalseek at , the graph is sloping down to the right, which is why Goalseek approximates the zero to be at about . The graph looks to be asymptotically approaching the -axis. In this case Wolfram would have given the correct answer a bit more easily.       Let .    Find a solution with Goal Seek, starting with . Does this represent an actual solution?  Find a solution with Goal Seek, starting with . Does this represent an actual solution?      "
},
{
  "id": "LinearGoalSeekVideo",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#LinearGoalSeekVideo",
  "type": "Figure",
  "number": "1.6.1",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "LinearGoalSeekSetup",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#LinearGoalSeekSetup",
  "type": "Figure",
  "number": "1.6.2",
  "title": "",
  "body": "   "
},
{
  "id": "LinearGoalSeekMenu",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#LinearGoalSeekMenu",
  "type": "Figure",
  "number": "1.6.3",
  "title": "",
  "body": "   "
},
{
  "id": "LinearGoalSeekResult",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#LinearGoalSeekResult",
  "type": "Figure",
  "number": "1.6.4",
  "title": "",
  "body": "   "
},
{
  "id": "IntersectionGoalSeekVideo",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#IntersectionGoalSeekVideo",
  "type": "Figure",
  "number": "1.6.5",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "sec-1-6-GoalSeek-6-2",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#sec-1-6-GoalSeek-6-2",
  "type": "Figure",
  "number": "1.6.6",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "sec-1-6-GoalSeek-7-3",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#sec-1-6-GoalSeek-7-3",
  "type": "Figure",
  "number": "1.6.7",
  "title": "",
  "body": " Video presentation of this example   "
},
{
  "id": "sec-1-6-GoalSeek-7-9",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#sec-1-6-GoalSeek-7-9",
  "type": "Figure",
  "number": "1.6.8",
  "title": "",
  "body": " Further video for this example   "
},
{
  "id": "Reading_Check_Sec1.6",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#Reading_Check_Sec1.6",
  "type": "Reading Question",
  "number": "1.6.6.1",
  "title": "Reading check, Finding Numerical Solutions with Goal Seek.",
  "body": "Reading check, Finding Numerical Solutions with Goal Seek   This question checks your reading comprehension of the material is section 1.6, Finding Numerical Solutions with Goal Seek, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Goal Seek finds an exact answer.    Goal Seek lets you determine the input of a function that gives a desired output.    Goal Seek is found by choosing what if analysis.    Goal Seek only works with if the function can be put in a single cell.    Goal Seek always finds the answer closest to the starting value.    Goal seek gets confused by functions that asymptotically approach zero.    Goal Seek stops when it finds an answer whose output is within 0.001 of the desired output.    None of the above             "
},
{
  "id": "exercises-set-sec-1-6-2-2",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-2-2",
  "type": "Exercise",
  "number": "1.6.7.1",
  "title": "",
  "body": " Let . Find an so that .   Wolfram detects two solutions.   "
},
{
  "id": "exercises-set-sec-1-6-2-3",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-2-3",
  "type": "Exercise",
  "number": "1.6.7.2",
  "title": "",
  "body": " Let . Find an so that .  "
},
{
  "id": "exercises-set-sec-1-6-2-4",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-2-4",
  "type": "Exercise",
  "number": "1.6.7.3",
  "title": "",
  "body": " Let . Find an so that .    "
},
{
  "id": "exercises-set-sec-1-6-2-5",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-2-5",
  "type": "Exercise",
  "number": "1.6.7.4",
  "title": "",
  "body": " Let . Find an so that .  "
},
{
  "id": "exercises-set-sec-1-6-2-6",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-2-6",
  "type": "Exercise",
  "number": "1.6.7.5",
  "title": "",
  "body": " Let . Find an so that .    Note that next to the solution there is a button for Approximate form .  We can use that to get a decimal approximation:   Note that we can get more digits if we want or return to the exact answer  "
},
{
  "id": "exercises-set-sec-1-6-2-7",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-2-7",
  "type": "Exercise",
  "number": "1.6.7.6",
  "title": "",
  "body": " Let . Find an so that .  "
},
{
  "id": "exercises-set-sec-1-6-3-2",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-3-2",
  "type": "Exercise",
  "number": "1.6.7.7",
  "title": "",
  "body": " Find an intersection point of and .   Finding the intersection point means we are setting the two equations equal to one another. Wolfram will include a plot of the solution as well as the numerical answer.   Wolfram tells us that . We can plug that into one of the equations and get . So the intersection point is .  "
},
{
  "id": "exercises-set-sec-1-6-3-3",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-3-3",
  "type": "Exercise",
  "number": "1.6.7.8",
  "title": "",
  "body": " Find an intersection point of and .  "
},
{
  "id": "exercises-set-sec-1-6-3-4",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-3-4",
  "type": "Exercise",
  "number": "1.6.7.9",
  "title": "",
  "body": " Find an intersection point of and .    Wolfram finds two intersections: one at and the other at .  Using the function we get the two intersection points at and .  "
},
{
  "id": "exercises-set-sec-1-6-3-5",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-3-5",
  "type": "Exercise",
  "number": "1.6.7.10",
  "title": "",
  "body": " Find an intersection point of and .  "
},
{
  "id": "exercises-set-sec-1-6-3-6",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-3-6",
  "type": "Exercise",
  "number": "1.6.7.11",
  "title": "",
  "body": " Find both intersection points of and .    The -coordinates must be 0. If we use the approximate form of the solution we get and .  "
},
{
  "id": "exercises-set-sec-1-6-3-7",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-3-7",
  "type": "Exercise",
  "number": "1.6.7.12",
  "title": "",
  "body": " Find both intersection points of and .  "
},
{
  "id": "exercises-set-sec-1-6-4",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-4",
  "type": "Exercise",
  "number": "1.6.7.13",
  "title": "",
  "body": " We have reason to believe that the profit function for widget manufacturing is modeled by a quadratic equation. We have the following data for sales and profits.    Sales 100 250  350 500 600    Profit $8,462 $18,378  $22,455 $24,400 $23,747      Find the best fitting curve for the data.   Find the two break-even point, or amount of sales that yield a profit of $0.        Using Excel we find the best fitting polynomial of order 2:        Using Wolfram we then find where the profit is 0. Using the approximate form of the solution is preferable in this case because we want to know at what Sales we have 0 profit (the break-even points).   The break-even points are at sales of 5.55 and 995.05.     "
},
{
  "id": "exercises-set-sec-1-6-5",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-5",
  "type": "Exercise",
  "number": "1.6.7.14",
  "title": "",
  "body": " A certain bank will give a $75 bonus on a new account with a deposit of $1000, and then pays 5% interest compounded continuously. A second investment opportunity will pay $100 per year.    Which opportunity pays more in the first year?  For what period of time do the two opportunities offer the same return?  What is the payout from the two opportunities for a 30-year investment?  What is the second period of time when the two opportunities offer the same return?    "
},
{
  "id": "exercises-set-sec-1-6-6",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-6",
  "type": "Exercise",
  "number": "1.6.7.15",
  "title": "",
  "body": " Let .    Find a solution with Goal Seek starting with x=1.  What happens when Goal Seek tries to find a solution starting at ?  Explain why, from the graph of , we should expect this problem.        The entry in cell B2 is =(10*A2-1)*EXP(-A2)+2 .  In the screen grab the values of for and are given, and below it the result for the GoalSeek procedure are given.   For as the starting point GoalSeek find a zero at     Starting at GoalSeek does not find a zero at all. If we run GoalSeek a second time, now starting with the value at we zoom in on the first zero!    Using Wolfram, we see a fairly complicated solution, but we are also shown that there is one real solution.   Looking at the graph we see that there is clearly only one solution to the equation .  If we start Goalseek at , the graph is sloping down to the right, which is why Goalseek approximates the zero to be at about . The graph looks to be asymptotically approaching the -axis. In this case Wolfram would have given the correct answer a bit more easily.     "
},
{
  "id": "exercises-set-sec-1-6-7",
  "level": "2",
  "url": "sec-1-6-GoalSeek.html#exercises-set-sec-1-6-7",
  "type": "Exercise",
  "number": "1.6.7.16",
  "title": "",
  "body": " Let .    Find a solution with Goal Seek, starting with . Does this represent an actual solution?  Find a solution with Goal Seek, starting with . Does this represent an actual solution?    "
},
{
  "id": "sec-2-1-MarketEquilibriumProblems",
  "level": "1",
  "url": "sec-2-1-MarketEquilibriumProblems.html",
  "type": "Section",
  "number": "2.1",
  "title": "Market Equilibrium Problems",
  "body": " Market Equilibrium Problems   Link to unworked set of worksheets used in this section  Link to worksheets used in this section  As we mentioned in the previous chapter, many functions are locally linear, so if we restrict the domain the function will appear linear. Thus, we often start with linear models when trying to understand a situation. In this section, we look at the concepts of supply and demand and market equilibrium. For our examples in this section we will assume that the functions are linear in the range we care about.    Supply and Demand and Market Equilibrium  The normal laws of supply and demand assume we are in a market with many producers and consumers, operating independently, all of them looking out for their own best interests. We expect that when the price goes up, more producers are willing to sell but fewer consumers are willing to buy. Conversely, when the price goes down, fewer producers are willing to sell but more consumers are willing to buy.  Consider the example of gasoline prices. Different prices will make some areas of exploration and production profitable or not profitable. When prices go up, new wells get drilled. If prices go down too far, stripper wells cease being profitable and are shut down. From the consumer side, when prices go up, more people look at mass transit or getting a more fuel-efficient vehicle. When prices go down, it is easier to think about a road trip.  The law of supply looks at the economy from the supplier’s point of view. Price and quantity available for sale always move in the same direction. If the price goes up we can assume that all the old suppliers are still willing to sell at the higher price, but some more suppliers may enter the market. If the price goes down, no new suppliers will enter the market, and some old suppliers may leave the market. For a linear model:    .   The law of demand looks at the economy from the consumer’s point of view. Price and quantity available for sale always move in the opposite direction. If the price goes down, we can assume that all the old consumers are still willing to buy at the lower price, but some more consumers may enter the market. If the price goes up, no new consumers will enter the market, and some old consumers may leave the market. For a linear model:    .   When we look at a graph of the supply price graph and the demand price graph on the same graph, we know the supply curve goes up as we go left to right, while the demand curve goes down. From the properties of lines we know there is a single point where such a pair of lines can intersect. It is at the point where the amount of goods offered for a price equals the amount of goods desired for the same price.      This intersection of the supply and the demand functions is called the point of market equilibrium , or equilibrium point .    The price at this point is referred to as the equilibrium price .    The standard economic theory says that a free and open market will naturally settle on the equilibrium price.        Starting With Formulas    Video presentation of this example    Suppose denotes quantity, and the supply price for widgets is given by . We are also told the demand price is given by . Find the equilibrium price and quantity.    Solution (a)  We have started with an example that we can do by basic algebra without any technology. Subtracting the two equations, we see that .  Some straightforward algebra shows that the equilibrium quantity is 400. Substituting back into either equation gives an equilibrium price of $10.    Solution (b)  While we can do this example by hand, we also want to use it to set up a solution with Excel, since we may want help on problems where the numbers are not as nice. Our plan is to use Goal Seek to find the intersection. We need a cell where we can solve the problem by forcing the cell to have a value of zero.   When cell D2 is zero, the supply price will be the same as the demand price. We now invoke Goal Seek.   As expected, it finds equilibrium when .    We need to do a bit more work when we are simply given data points and need to find the supply and demand curves.   Starting With Data    Video presentation of this example    My market data indicates customers will buy 700 gizmos if they are priced at $13 each. If the price rises to $15, they will only buy 500. If the price is $12 a unit, the producers will make 400 gizmos. If the price rises to $13, they will produce 600 gizmos. Assume that the supply and demand curves are linear for between 300 and 1000 gizmos. Find the equilibrium point for the gizmo market.    We start by making a chart for the values given. We add a scatterplot so that we can see the values.   Next we add linear trendlines for both the supply and demand. We select the option to show the equations.   The projected equations are: .  We set up columns for the projected supply and demand curves. We also add a column for the difference so that we can use Goal seek to find the equilibrium point.   It is then straightforward to see that the equilibrium quantity is 666.67 and the equilibrium price is $13.33.     There is one more detail worth noting from this last example. Depending on the units used, the slope can be very close to zero. If we are selling tens of millions of units for a price under a dollar, the change in price of a penny may correspond to a change in quantity of several thousand. Make sure to include enough digits for your equation to be meaningful.   Computing Sales    Video presentation of this example    We have obtained the following data for sales of gizmos in our location.    quantity 653 762  847 943 1050  1130 1260    Supply price 5.52  6.20 6.85  7.48    Demand price 6.68  6.50  6.38 6.31    Assume the supply and demand curves are linear for quantities between 600 and 1300. Find the best fitting lines for the supply and demand functions. Find the equilibrium point. Make a chart listing how many we can sell for $6.40 and $6.60. Remember that sales will be the minimum of the supply and the demand.    We start by putting the data into a spreadsheet and finding the best fitting lines. We select the option to show the equations in the chart.   The supply and demand functions are: .  We add columns for the projected supply and demand prices, using the equations obtained from the best fitting lines. We also add a column, and compute the difference of the supply and demand functions. We can now use goal seek to solve the problem.   We now use Goal Seek to find the equilibrium point.   At equilibrium we sell 956 gizmos at $6.50. To find sales at $6.40 and $6.60, we use Goal Seek to get those values at both supply and demand prices.   We see that we can sell 1055 gizmos at $6.40, but can only obtain 925. Thus our sales at $6.40 will be 925. At $6.60 we can obtain 987 gizmos, but can only sell 855. Thus our sales at $6.60 will be 855. We can eliminate a step in this process if we recall that below equilibrium price the constraint is supply, while above equilibrium price the constraint will be demand.      Reading Check  Reading check, Market Equilibrium Problems   This question checks your reading comprehension of the material is section 2.1, Market Equilibrium Problems, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    The slope of the demand curve is always positive.    The standard economic theory says that a free and open market will naturally settle on the equilibrium price.    This intersection of the supply and the demand functions is called the point of market equilibrium, or equilibrium point.    The law of supply looks at the economy from the supplier's point of view.    If the supply and demand curves are unlabeled, there is no way to guess which is which.    The law of demand looks at the economy from the consumer's point of view.    The slope of the supply curve is always positive.    None of the above                Exercises 2.1 Equilibrium Problems    Given the equations of the supply and demand curves:  Evaluate the curves at .  Find the market equilibrium.      Given and , with .        Entries in the cells before quick fill     Table with quantities ranging from 0 to 10   From the table we see that at the supply price is $28 and the demand price is $18.    The market equilibrium happened to show up without requiring any more work. The equilibrium occurs when and the price is $22.  If we had not seen the equilibrium in the table, we should graph the table and determine what values of we should look at. After adjusting the table we can use Goal Seek to find the equilibrium point: Solve        Given and , with .    Given and , with .      The initial entries:   Initial attempt at the data includes the quantity 6000 (to answer part a)   When we have that the supply price is $1357.30 and the demand price is $3408.90.    The market equilibrium is outside the range that we tested. The graph indicates that the equilibrium (the intersection point) is to the right of the values we checked. Let’s redo the table with between 0 and 20,000. The increments are a matter of preference. In this example we will use steps of 4000. The graph shows that the intersection point is somewhere between and . The table shows it’s close to .   We use Goal Seek to determine the actual equilibrium point.    Goal Seek shows that the equilibrium point is at with a price of $3311.20        Given and , with .     I am given and , as my supply and demand curves, but am not told which is which. Determine which curve is the supply curve and explain how you did it. What limits can you put on the domain of the supply and demand functions?   The supply function is always increasing (positive slope) and the demand function is always decreasing (negative slope), so we have: .  We expect both functions to be positive, because negative prices would indicate we would have to actually give people money to take our product off our hands! .  So we should only consider quantities between 10 and 50.     For , given the supply and demand data:  Find equations of the supply and demand curves, assuming they are both linear.  Find the market equilibrium.      Given supply and demand data:    quantity 50 100    Supply price 4 10    Demand price 9 5      Given supply and demand data:    quantity 60 70  90 100    Supply price 14  20    Demand price 19  16        We start by using trendlines to find the linear model functions.  Once we have the function we create a second table using the functions instead of the initial data. The equations were edited to indicate which one is the supply and which one is the demand function.     The second table will be set up to give us the supply, demand and the supply demand so we can use Goal Seek to find the market equilibrium.   The market equilibrium occurs at with a price of $18. (No Goal Seek required in this case.)       Given supply and demand data:    quantity 4356 4792  6503 7038    Supply price $1.00  $1.15    Demand price $1.10  $.98      Given supply and demand data:    quantity 5378 7984 8352    Supply price $8.00 $9.50    Demand price $12.00 $10.00         The supply and demand functions are: .  These decimal approximations introduce a bit of an error: note the difference between the recorded prices and the ones predicted by the model.    To find the market equilibrium the column for was copied and used to find the equilibrium point. Note that Goal Seek only works if the entries in the cells are formulas! The equilibrium is at , with a price of $9.85.    The projected prices are:   Supply price of $9.92 when     Demand price of $10.03 when             For , given the supply and demand data:  Find equations of the supply and demand curves, assuming they are both linear.  Find the market equilibrium.  Find the projected supply and demand prices for the extra quantities given.      Given the supply and demand data:    quantity 100 120  140 160 180 155    Supply price 10.5 11.8  13.9 16.3 17.5    Demand price 21.3 18.1  14.7 12.3 8.6      Given the supply and demand data:    quantity 5021 6051  6968 7901 9023  9917 7500    Supply price 13.18  16.76 17.89  19.32    Demand price 19.69  18.78 18.05  17.61        For this problem the trendlines are truly models and will find the best fit curve.   To be able to use Goal Seek we do need a table generated by formulas, so we use the trendline equations: .     The market equilibrium takes place at with a price of $ 18.17.    The projected prices are        Given the supply and demand data:    quantity 3160 3615  4092 4462 4837  5261 5579 6000    Supply price 20.54  20.70 22.37  22.43    Demand price 25.31  18.91 17.04  14.37       "
},
{
  "id": "sec-2-1-MarketEquilibriumProblems-3-4",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#sec-2-1-MarketEquilibriumProblems-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "law of supply "
},
{
  "id": "sec-2-1-MarketEquilibriumProblems-3-6",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#sec-2-1-MarketEquilibriumProblems-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "law of demand "
},
{
  "id": "sec-2-1-MarketEquilibriumProblems-3-9-1",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#sec-2-1-MarketEquilibriumProblems-3-9-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "market equilibrium equilibrium point equilibrium price "
},
{
  "id": "sec-2-1-MarketEquilibriumProblems-3-11",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#sec-2-1-MarketEquilibriumProblems-3-11",
  "type": "Example",
  "number": "2.1.1",
  "title": "Starting With Formulas.",
  "body": " Starting With Formulas    Video presentation of this example    Suppose denotes quantity, and the supply price for widgets is given by . We are also told the demand price is given by . Find the equilibrium price and quantity.    Solution (a)  We have started with an example that we can do by basic algebra without any technology. Subtracting the two equations, we see that .  Some straightforward algebra shows that the equilibrium quantity is 400. Substituting back into either equation gives an equilibrium price of $10.    Solution (b)  While we can do this example by hand, we also want to use it to set up a solution with Excel, since we may want help on problems where the numbers are not as nice. Our plan is to use Goal Seek to find the intersection. We need a cell where we can solve the problem by forcing the cell to have a value of zero.   When cell D2 is zero, the supply price will be the same as the demand price. We now invoke Goal Seek.   As expected, it finds equilibrium when .   "
},
{
  "id": "sec-2-1-MarketEquilibriumProblems-3-13",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#sec-2-1-MarketEquilibriumProblems-3-13",
  "type": "Example",
  "number": "2.1.3",
  "title": "Starting With Data.",
  "body": " Starting With Data    Video presentation of this example    My market data indicates customers will buy 700 gizmos if they are priced at $13 each. If the price rises to $15, they will only buy 500. If the price is $12 a unit, the producers will make 400 gizmos. If the price rises to $13, they will produce 600 gizmos. Assume that the supply and demand curves are linear for between 300 and 1000 gizmos. Find the equilibrium point for the gizmo market.    We start by making a chart for the values given. We add a scatterplot so that we can see the values.   Next we add linear trendlines for both the supply and demand. We select the option to show the equations.   The projected equations are: .  We set up columns for the projected supply and demand curves. We also add a column for the difference so that we can use Goal seek to find the equilibrium point.   It is then straightforward to see that the equilibrium quantity is 666.67 and the equilibrium price is $13.33.    "
},
{
  "id": "sec-2-1-MarketEquilibriumProblems-3-15",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#sec-2-1-MarketEquilibriumProblems-3-15",
  "type": "Example",
  "number": "2.1.5",
  "title": "Computing Sales.",
  "body": " Computing Sales    Video presentation of this example    We have obtained the following data for sales of gizmos in our location.    quantity 653 762  847 943 1050  1130 1260    Supply price 5.52  6.20 6.85  7.48    Demand price 6.68  6.50  6.38 6.31    Assume the supply and demand curves are linear for quantities between 600 and 1300. Find the best fitting lines for the supply and demand functions. Find the equilibrium point. Make a chart listing how many we can sell for $6.40 and $6.60. Remember that sales will be the minimum of the supply and the demand.    We start by putting the data into a spreadsheet and finding the best fitting lines. We select the option to show the equations in the chart.   The supply and demand functions are: .  We add columns for the projected supply and demand prices, using the equations obtained from the best fitting lines. We also add a column, and compute the difference of the supply and demand functions. We can now use goal seek to solve the problem.   We now use Goal Seek to find the equilibrium point.   At equilibrium we sell 956 gizmos at $6.50. To find sales at $6.40 and $6.60, we use Goal Seek to get those values at both supply and demand prices.   We see that we can sell 1055 gizmos at $6.40, but can only obtain 925. Thus our sales at $6.40 will be 925. At $6.60 we can obtain 987 gizmos, but can only sell 855. Thus our sales at $6.60 will be 855. We can eliminate a step in this process if we recall that below equilibrium price the constraint is supply, while above equilibrium price the constraint will be demand.   "
},
{
  "id": "Reading_Check_Sec2.1",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#Reading_Check_Sec2.1",
  "type": "Reading Question",
  "number": "2.1.2.1",
  "title": "Reading check, Market Equilibrium Problems.",
  "body": "Reading check, Market Equilibrium Problems   This question checks your reading comprehension of the material is section 2.1, Market Equilibrium Problems, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    The slope of the demand curve is always positive.    The standard economic theory says that a free and open market will naturally settle on the equilibrium price.    This intersection of the supply and the demand functions is called the point of market equilibrium, or equilibrium point.    The law of supply looks at the economy from the supplier's point of view.    If the supply and demand curves are unlabeled, there is no way to guess which is which.    The law of demand looks at the economy from the consumer's point of view.    The slope of the supply curve is always positive.    None of the above             "
},
{
  "id": "exercises-set-sec-2-1-2-2",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#exercises-set-sec-2-1-2-2",
  "type": "Exercise",
  "number": "2.1.3.1",
  "title": "",
  "body": " Given and , with .        Entries in the cells before quick fill     Table with quantities ranging from 0 to 10   From the table we see that at the supply price is $28 and the demand price is $18.    The market equilibrium happened to show up without requiring any more work. The equilibrium occurs when and the price is $22.  If we had not seen the equilibrium in the table, we should graph the table and determine what values of we should look at. After adjusting the table we can use Goal Seek to find the equilibrium point: Solve      "
},
{
  "id": "exercises-set-sec-2-1-2-3",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#exercises-set-sec-2-1-2-3",
  "type": "Exercise",
  "number": "2.1.3.2",
  "title": "",
  "body": " Given and , with .  "
},
{
  "id": "exercises-set-sec-2-1-2-4",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#exercises-set-sec-2-1-2-4",
  "type": "Exercise",
  "number": "2.1.3.3",
  "title": "",
  "body": " Given and , with .      The initial entries:   Initial attempt at the data includes the quantity 6000 (to answer part a)   When we have that the supply price is $1357.30 and the demand price is $3408.90.    The market equilibrium is outside the range that we tested. The graph indicates that the equilibrium (the intersection point) is to the right of the values we checked. Let’s redo the table with between 0 and 20,000. The increments are a matter of preference. In this example we will use steps of 4000. The graph shows that the intersection point is somewhere between and . The table shows it’s close to .   We use Goal Seek to determine the actual equilibrium point.    Goal Seek shows that the equilibrium point is at with a price of $3311.20      "
},
{
  "id": "exercises-set-sec-2-1-2-5",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#exercises-set-sec-2-1-2-5",
  "type": "Exercise",
  "number": "2.1.3.4",
  "title": "",
  "body": " Given and , with .  "
},
{
  "id": "exercises-set-sec-2-1-3",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#exercises-set-sec-2-1-3",
  "type": "Exercise",
  "number": "2.1.3.5",
  "title": "",
  "body": " I am given and , as my supply and demand curves, but am not told which is which. Determine which curve is the supply curve and explain how you did it. What limits can you put on the domain of the supply and demand functions?   The supply function is always increasing (positive slope) and the demand function is always decreasing (negative slope), so we have: .  We expect both functions to be positive, because negative prices would indicate we would have to actually give people money to take our product off our hands! .  So we should only consider quantities between 10 and 50.  "
},
{
  "id": "ex-sdc-first",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#ex-sdc-first",
  "type": "Exercise",
  "number": "2.1.3.6",
  "title": "",
  "body": " Given supply and demand data:    quantity 50 100    Supply price 4 10    Demand price 9 5    "
},
{
  "id": "exercises-set-sec-2-1-4-3",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#exercises-set-sec-2-1-4-3",
  "type": "Exercise",
  "number": "2.1.3.7",
  "title": "",
  "body": " Given supply and demand data:    quantity 60 70  90 100    Supply price 14  20    Demand price 19  16        We start by using trendlines to find the linear model functions.  Once we have the function we create a second table using the functions instead of the initial data. The equations were edited to indicate which one is the supply and which one is the demand function.     The second table will be set up to give us the supply, demand and the supply demand so we can use Goal Seek to find the market equilibrium.   The market equilibrium occurs at with a price of $18. (No Goal Seek required in this case.)     "
},
{
  "id": "exercises-set-sec-2-1-4-4",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#exercises-set-sec-2-1-4-4",
  "type": "Exercise",
  "number": "2.1.3.8",
  "title": "",
  "body": " Given supply and demand data:    quantity 4356 4792  6503 7038    Supply price $1.00  $1.15    Demand price $1.10  $.98    "
},
{
  "id": "ex-sdc-last",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#ex-sdc-last",
  "type": "Exercise",
  "number": "2.1.3.9",
  "title": "",
  "body": " Given supply and demand data:    quantity 5378 7984 8352    Supply price $8.00 $9.50    Demand price $12.00 $10.00         The supply and demand functions are: .  These decimal approximations introduce a bit of an error: note the difference between the recorded prices and the ones predicted by the model.    To find the market equilibrium the column for was copied and used to find the equilibrium point. Note that Goal Seek only works if the entries in the cells are formulas! The equilibrium is at , with a price of $9.85.    The projected prices are:   Supply price of $9.92 when     Demand price of $10.03 when         "
},
{
  "id": "ex-sdc-me-first",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#ex-sdc-me-first",
  "type": "Exercise",
  "number": "2.1.3.10",
  "title": "",
  "body": " Given the supply and demand data:    quantity 100 120  140 160 180 155    Supply price 10.5 11.8  13.9 16.3 17.5    Demand price 21.3 18.1  14.7 12.3 8.6    "
},
{
  "id": "exercises-set-sec-2-1-5-3",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#exercises-set-sec-2-1-5-3",
  "type": "Exercise",
  "number": "2.1.3.11",
  "title": "",
  "body": " Given the supply and demand data:    quantity 5021 6051  6968 7901 9023  9917 7500    Supply price 13.18  16.76 17.89  19.32    Demand price 19.69  18.78 18.05  17.61        For this problem the trendlines are truly models and will find the best fit curve.   To be able to use Goal Seek we do need a table generated by formulas, so we use the trendline equations: .     The market equilibrium takes place at with a price of $ 18.17.    The projected prices are      "
},
{
  "id": "ex-sdc-me-last",
  "level": "2",
  "url": "sec-2-1-MarketEquilibriumProblems.html#ex-sdc-me-last",
  "type": "Exercise",
  "number": "2.1.3.12",
  "title": "",
  "body": " Given the supply and demand data:    quantity 3160 3615  4092 4462 4837  5261 5579 6000    Supply price 20.54  20.70 22.37  22.43    Demand price 25.31  18.91 17.04  14.37    "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit",
  "level": "1",
  "url": "sec-2-2-ModelingRevenueCostProfit.html",
  "type": "Section",
  "number": "2.2",
  "title": "Modeling Revenue, Costs, and Profit",
  "body": " Modeling Revenue, Costs, and Profit   Link to unworked worksheets used in this section  Link to worksheets used in this section.  In the last section we looked at the economic model for supply and demand. We were particularly interested in the point of market equilibrium. In this section we will look at the model for revenue, cost and profit. As with the previous section, we will begin with assumptions that make as many things as possible linear.    Revenue and a review of demand price  The simple model for revenue is .  However, in the previous section we worked with two price functions, the supply price and the demand price. Since we can only make a sale if the consumer is willing to buy, we typically use the demand price in computing revenue. Our model is now .  If the demand price is a linear function, then revenue is a quadratic function.  We previously noted that a linear demand price function has a negative slope. We should note the two limiting cases. If the slope of the demand curve is 0, the consumers have a fixed price they will pay for however much of the product is available. In this case the demand curve is a constant, so the revenue curve will be linear. This is referred to as a perfectly elastic market. The other limiting case is where the demand is for a fixed amount no matter what the price. In this case the demand curve is a vertical line and is not a function, so the revenue curve also fails to be a function of quantity.   Obviously, we don’t expect to find the limiting cases in the real world. In real world cases the revenue function has a negative coefficient for the quadratic term and is a downward facing parabola.    Finding Revenue From Linear Demand Price    Video presentation of this example    We have determined that the demand price function for widgets is , if the quantity is between 2000 and 8000. Find the revenue function and graph it over the region where it is defined.    We set up a chart in Excel with revenue defined as .   When we graph we note that the scales are quite different for price and revenue. Thus we want to use secondary axes to capture the scale of both price and revenue. We can also put different labels on the two vertical axes.       Cost  Once again we will start with a simplified model for cost.      For our (simplified) model we will break costs into fixed costs and variable costs .    Fixed costs include the costs of being in business. They might include license fees, rent for a store or plant, and the cost of furnishings and equipment.    Variable costs are tied to the amount you produce or sell. For a manufacturer they might include raw material or labor costs. For someone in sales they might include the cost of goods.    For our simplified model, we assume that variable costs are proportional to quantity. This makes our cost function linear.    For our simplified model variable costs= unit costs*quantity .    Thus costs= fixed costs + unit costs*quantity .        Finding Linear Cost   We can set up a small gizmo manufacturing shop for $6,000. The raw materials for producing gizmos cost $14 per unit. Find the cost function for gizmo production. Find the cost of producing 2500 gizmos.    The fixed costs are the value of the -intercept of the cost function. The per unit material cost is the slope of the function. We have .  If we substitute 2500 for the quantity, our costs are .      Profit  For the third piece of the model, we look at profit. We have the simple formula    .   For our simple examples where cost is linear and revenue is quadratic, we expect the profit function to also be quadratic, and facing down. We will obviously be interested in the spots where the profit function either crosses the axis or reaches a maximum.    Video presentation of the next two examples     Finding Profit   We are interested in selling widgets. The demand price function is .  It will cost $10,000 to keep our shop open before we consider the price of inventory. Our variable cost is the cost of buying the widgets from our wholesaler who will sell them to us for $8 a unit. Find a function for profit as a function of how many units we sell. Graph that function for quantities from 1000 to 10000.    Using the methods from the previous examples, we write down the functions for revenues and costs. .  Now we find profit as the difference of revenue and cost. .  We then use Excel to make a chart of values and a graph.       Break-Even Point  The last example illustrates a reality of manufacturing and retail. If a business has a fixed cost or startup expense, it will have a loss if it does not sell enough.   The point at which revenues equal expenses (cost) is called the break-even point .   This is important in preparing a business proposal, because the bank will want to know if the break even point is a reasonable amount before it lends any money.   Find Break-Even Points   Find break-even points for previous example. Explain what those points mean in practical terms.    We look at the chart from the previous example.   We can find break-even points by using Goal Seek and setting profit to 0 while changing quantity. In this case, we see that we have break-even points when the quantity is 2000 or 5000, since those numbers were already on our chart.  The first break even point tells us that, if our price is more than $13.00, we will not attract enough customers to be able to turn a profit. The second break even point says that is we bring our price down below $10, we will bring in enough customers, but our revenue will not cover expenses.     Repeat, Starting With Data    Video presentation of this example    We have the following data from the gizmo market, with quantity and costs measured in millions.    Quantity 7.81 10.07  11.99 13.84 15.80    Demand Price $12.07 $9.05  $7.60 $6.64 $5.64    Cost $60.05 $70.09  $79.98 $89.90 $99.83    Assuming that price and cost are well modeled by linear equations, find the break-even points and explain what they mean with units included in the explanation.  To find the break-even point when we are given data instead of an equation, we usually follow this procedure: Find the best fitting equations for price and cost. From those equations, produce formulas for revenue and profit. Use the formulas to find the break-even points using either algebra or Excel.    We put the data into Excel and ask for best fitting lines.   This produces the desired cost and price functions. .  We enter these functions in new columns in the spreadsheet and then compute projective revenues and profit. We then use Goal Seek to find places where the projected profit is 0. The first break-even point tells us that we expect to break even if we sell 1.83 million units. We can do that by setting the price at $16.05. The second break-even point is at 14.15 million units. We reach that sales volume by lowering the price to $6.45. While we will have gained market share, we will no longer be making a profit.       Technical note  In business situations we often have cases where a change of quantity in the thousands only changes prices by pennies. Then, our coefficients are close to zero, and Excel may give formulas rounded to zero. In those cases we need to format the trendline to get more digits of accuracy.   Problems with using big numbers    Video presentation of this example    We want to explore an issue that arises our coefficients are very small. We will have to be concerned with the number of significant digits in our coefficients.  We repeat the previous example, but with quantity and cost measured directly, rather than in millions. We should get the same answers, since we are using the same data.    Quantity 7,810,000 10,070,000  11,990,000 13,840,000 15,800,000   Demand Price $12.07 $9.05  $7.60 $6.64 $5.64   Cost $60,050,000 $70,090,000  $79,980,000 $89,900,000 $99,830,000   We face the same tasks. Assuming that price and cost are well modeled by linear equations, find the break-even points and explain what they mean with units included in the explanation.  To find the break-even point when we are given data instead of an equation, we usually follow this procedure: Find the best fitting equations for price and cost. From those equations, produce formulas for revenue and profit. Use the formulas to find the break-even points using either algebra or Excel.    We put the data into Excel and ask for best fitting lines.   As expected, a coefficient of each equation has been shifted by a factor of 1,000,000. .  These equations have only one digit of accuracy. In general, that will not be accurate enough.  We enter these functions in new columns in the spreadsheet and then compute projective revenues and profit. We then use Goal Seek to find places where the projected profit is 0. The first break-even point goes from 1.83 million at price of $16.05 to 1.82 million at a price of $1602. The second break even point goes from 14.15 million units at a price to $6.45 to 13.75 million at a price of $6.48.   The solution is to right click (Command click on a mac) on the label and select Format Trendline Label . Then change category from general to number, and choose 10 decimal places. This gives us the equations: .   We then go through the same process at get our original answers back.       Reading Check  Reading check, Modeling Revenue, Costs, and Profit   This question checks your reading comprehension of the material is section 2.2, Modeling Revenue, Costs, and Profit, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Profit = Costs - Revenue.    In real world cases the revenue function has a negative coefficient for the quadratic term and is a downward facing parabola.    The simple model for revenue is revenue =quantity*price.    In our simplified model, the profit function is linear.    We typically use the supply price in computing revenue.    In the real world variable costs are proportional to quantity.    We typically use the demand price in computing revenue.    Fixed costs include the costs of being in business. They might include license fees, rent for a store or plant, and the cost of furnishings and equipment.    For our simplified model, costs= fixed costs + unit costs*quantity.    The point at which revenues equal expenses (cost) is called the break-even point.    None of the above                Exercises: Modeling Revenue, Costs, and Profit  Reading check, Modeling Revenue, Costs, and Profit   This question checks your reading comprehension of the material is section 2.2, Modeling Revenue, Costs, and Profit, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In our simplified model, the profit function is linear.    Profit = Costs - Revenue.    The point at which revenues equal expenses (cost) is called the break-even point.    Fixed costs include the costs of being in business. They might include license fees, rent for a store or plant, and the cost of furnishings and equipment.    We typically use the supply price in computing revenue.    We typically use the demand price in computing revenue.    The simple model for revenue is revenue =quantity*price.    In real world cases the revenue function has a negative coefficient for the quadratic term and is a downward facing parabola.    In the real world variable costs are proportional to quantity.    For our simplified model, costs= fixed costs + unit costs*quantity.    None of the above                For , given the equations of the cost and demand price function:  Identify the fixed and variable costs.  Find the revenue and profit functions.  Evaluate cost, demand price, revenue, and profit at .  Find all break-even points.   Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.       Given and , with .      Identify the fixed and variable costs.  The fixed cost is $10 (the constant\/fixed part of the cost function), and the variable cost is $3 per item.    Find the revenue and profit functions    .    Evaluate cost, demand price, revenue, and profit at   .    Find all break-even points  Solve . We can do this with Excel or with Wolfram. The break even points are and .     Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.  If we had done the whole problem in Excel it would look like this:    Entries in the cells before quick fill     The table with between 0 and 8     Goal Seek gives break even points at and    The graph produced in Excel. To create the labels: double click on one of the break-even points, go to Chart Layout , go to Data Labels . In this example we chose the x-value . Both break-even points were labeled to show where they are and what the values are in this problem.       Given and , with .    Given and , with .      Identify the fixed and variable costs.  , and the (per unit)    Find the revenue and profit functions.  .    Evaluate cost, demand price, revenue, and profit at .    Entries in the cells before quick fill     Table plus extra column for the value .   At , , , , and     Find all break-even points.    Table plus extra column for the value   The break-even points are and    Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.   The graph produced in Excel. To create the labels: double click on one of the break-even points, go to Chart Layout , go to Data Labels . In this example we chose the x-value . Both break-even points were labeled to show where they are and what the values are in this problem.       Given and , with .    Given demand price and cost are the linear functions that best fit the data below and that .    Quantity 50 100   Demand price 10 8   Cost 300 450       If the table only has 2 data points, Excel can get confused wether the data is in rows or columns. We duplicated one column to get the data plotted correctly.   Identify the fixed and variable costs.   , and the (per unit).    Find the revenue and profit functions.    .    Evaluate cost, demand price, revenue, and profit at .  At , , , , and    Find all break-even points.  The break-even points, found with goal seek, are and    Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.    Entries in the cells before quick fill     Table plus extra columns for the brek even points    The graph produced in Excel. To create the labels: double click on one of the break-even points, go to Chart Layout , go to Data Labels . In this example we chose the x-value . Both break-even points were labeled to show where they are and what the values are in this problem.       Given demand price and cost are the linear functions that best fit the data below and that .    Quantity 60 70  90 100   Demand Price 19   16   Cost 460  540     Given demand price and cost are the linear functions that best fit the data below and that .    Quantity 4356 4792  6503 7038   Demand price $1.10  $.98   Cost $1190  $1860    We plot the data, and find the linear models for demand and cost.     Given the demand price and the cost we create a table using the formulas and we also include a row for the and      Identify the fixed and variable costs.  The fixed cost is - $169.35, and the variable cost is $0.3121 per unit of quantity. (That the fixed costs are negative should make us suspicious that we are outside the useful domain of our cost function.)    Find the revenue and profit functions.  .    Evaluate cost, demand price, revenue, and profit at .  At we have that , , , and .    Find all break-even points.  Re-compute profit for a different range of quantities and we get   Goal Seek using the quantity of 20000 as the basis gives a break-even point at . The other place where the profit is 0 occurs for .    Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.   The profit function shows the break-even points close to 0 (-161) and near 20,000 (21,039)       Given demand price and cost are the linear functions that best fit the data below and that .    Quantity 5378 7984  8352   Demand price $12.00  $10.00   Supply price $31,100 $45,100       Mary has been put in charge of a school function. She estimates that there is a fixed cost of $1000 for the site plus a cost of $5 per person that attends. If she charges $15 a ticket she can sell 250 tickets, but if she lowers the price to $10 she can sell 500 tickets. Assuming the demand price is linear, what price should she charge to break even while maximizing attendance?   The description of the cost function states that the fixed cost is $1000, and the variable cost is $5, so the cost function is .  Two points are given for the price function: and . Hence the slope is .  Then the demand price function is Hence .    Entries in the cells before quick fill     Values after quick fill     Identified the break-even points using Goal Seek   The optimal demand price is $6.48, which allows them to sell 676 tickets and break even.     For , given the cost and demand data:  Find best fitting equations of the cost and demand curves, assuming they are both linear.  Find the revenue and profit functions and evaluate them at the extra given value.  Find the break-even points.      Given the cost and demand data:    Quantity 100 120  140 160 180  155   Cost 1015 1152  1327 1467 1651    Demand price 21.3 18.1  14.7 12.3 8.6      Given the cost and demand data:    Quantity 5021 6051  6968 7901 9023  9917 7500    Cost 80376  103874 128513  140258   Demand price 19.69  18.78 18.05  17.61       Find best fitting equations of the cost and demand curves, assuming they are both linear.  Using trendlines we get .    Find the revenue and profit functions and evaluate them at the extra given value.  Creating a table with the cost and demand functions we get   We see that when quantity is 7500 the revenue is $140,670, and the profit is $30,240.50.    Find the break-even points.  Note that these values are not usefull for finding the break-even points. To find those we will start quantity at 0 and go up to 20,000.   So the two break-even points are and .       Given the cost and demand data:    Quantity 3160 3615  4092 4462 4837  5261 5579 6000    Cost (Thousands) 90.1  126.70 197.2  234.9   Demand price 25.31  20.91 17.04  14.37      "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-3-9",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-3-9",
  "type": "Example",
  "number": "2.2.1",
  "title": "Finding Revenue From Linear Demand Price.",
  "body": " Finding Revenue From Linear Demand Price    Video presentation of this example    We have determined that the demand price function for widgets is , if the quantity is between 2000 and 8000. Find the revenue function and graph it over the region where it is defined.    We set up a chart in Excel with revenue defined as .   When we graph we note that the scales are quite different for price and revenue. Thus we want to use secondary axes to capture the scale of both price and revenue. We can also put different labels on the two vertical axes.    "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-4-3-1",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-4-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fixed costs variable costs variable costs= unit costs*quantity costs= fixed costs + unit costs*quantity "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-4-5",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-4-5",
  "type": "Example",
  "number": "2.2.3",
  "title": "Finding Linear Cost.",
  "body": " Finding Linear Cost   We can set up a small gizmo manufacturing shop for $6,000. The raw materials for producing gizmos cost $14 per unit. Find the cost function for gizmo production. Find the cost of producing 2500 gizmos.    The fixed costs are the value of the -intercept of the cost function. The per unit material cost is the slope of the function. We have .  If we substitute 2500 for the quantity, our costs are .   "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-5-6",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-5-6",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": " Video presentation of the next two examples   "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-5-7",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-5-7",
  "type": "Example",
  "number": "2.2.5",
  "title": "Finding Profit.",
  "body": " Finding Profit   We are interested in selling widgets. The demand price function is .  It will cost $10,000 to keep our shop open before we consider the price of inventory. Our variable cost is the cost of buying the widgets from our wholesaler who will sell them to us for $8 a unit. Find a function for profit as a function of how many units we sell. Graph that function for quantities from 1000 to 10000.    Using the methods from the previous examples, we write down the functions for revenues and costs. .  Now we find profit as the difference of revenue and cost. .  We then use Excel to make a chart of values and a graph.    "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-6-3-1",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-6-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "break-even point "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-6-5",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-6-5",
  "type": "Example",
  "number": "2.2.6",
  "title": "Find Break-Even Points.",
  "body": " Find Break-Even Points   Find break-even points for previous example. Explain what those points mean in practical terms.    We look at the chart from the previous example.   We can find break-even points by using Goal Seek and setting profit to 0 while changing quantity. In this case, we see that we have break-even points when the quantity is 2000 or 5000, since those numbers were already on our chart.  The first break even point tells us that, if our price is more than $13.00, we will not attract enough customers to be able to turn a profit. The second break even point says that is we bring our price down below $10, we will bring in enough customers, but our revenue will not cover expenses.   "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-6-6",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-6-6",
  "type": "Example",
  "number": "2.2.7",
  "title": "Repeat, Starting With Data.",
  "body": " Repeat, Starting With Data    Video presentation of this example    We have the following data from the gizmo market, with quantity and costs measured in millions.    Quantity 7.81 10.07  11.99 13.84 15.80    Demand Price $12.07 $9.05  $7.60 $6.64 $5.64    Cost $60.05 $70.09  $79.98 $89.90 $99.83    Assuming that price and cost are well modeled by linear equations, find the break-even points and explain what they mean with units included in the explanation.  To find the break-even point when we are given data instead of an equation, we usually follow this procedure: Find the best fitting equations for price and cost. From those equations, produce formulas for revenue and profit. Use the formulas to find the break-even points using either algebra or Excel.    We put the data into Excel and ask for best fitting lines.   This produces the desired cost and price functions. .  We enter these functions in new columns in the spreadsheet and then compute projective revenues and profit. We then use Goal Seek to find places where the projected profit is 0. The first break-even point tells us that we expect to break even if we sell 1.83 million units. We can do that by setting the price at $16.05. The second break-even point is at 14.15 million units. We reach that sales volume by lowering the price to $6.45. While we will have gained market share, we will no longer be making a profit.    "
},
{
  "id": "sec-2-2-ModelingRevenueCostProfit-7-3",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#sec-2-2-ModelingRevenueCostProfit-7-3",
  "type": "Example",
  "number": "2.2.9",
  "title": "Problems  with using big numbers.",
  "body": " Problems with using big numbers    Video presentation of this example    We want to explore an issue that arises our coefficients are very small. We will have to be concerned with the number of significant digits in our coefficients.  We repeat the previous example, but with quantity and cost measured directly, rather than in millions. We should get the same answers, since we are using the same data.    Quantity 7,810,000 10,070,000  11,990,000 13,840,000 15,800,000   Demand Price $12.07 $9.05  $7.60 $6.64 $5.64   Cost $60,050,000 $70,090,000  $79,980,000 $89,900,000 $99,830,000   We face the same tasks. Assuming that price and cost are well modeled by linear equations, find the break-even points and explain what they mean with units included in the explanation.  To find the break-even point when we are given data instead of an equation, we usually follow this procedure: Find the best fitting equations for price and cost. From those equations, produce formulas for revenue and profit. Use the formulas to find the break-even points using either algebra or Excel.    We put the data into Excel and ask for best fitting lines.   As expected, a coefficient of each equation has been shifted by a factor of 1,000,000. .  These equations have only one digit of accuracy. In general, that will not be accurate enough.  We enter these functions in new columns in the spreadsheet and then compute projective revenues and profit. We then use Goal Seek to find places where the projected profit is 0. The first break-even point goes from 1.83 million at price of $16.05 to 1.82 million at a price of $1602. The second break even point goes from 14.15 million units at a price to $6.45 to 13.75 million at a price of $6.48.   The solution is to right click (Command click on a mac) on the label and select Format Trendline Label . Then change category from general to number, and choose 10 decimal places. This gives us the equations: .   We then go through the same process at get our original answers back.    "
},
{
  "id": "rq-s2-2-2",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#rq-s2-2-2",
  "type": "Reading Question",
  "number": "2.2.6.1",
  "title": "Reading check, Modeling Revenue, Costs, and Profit.",
  "body": "Reading check, Modeling Revenue, Costs, and Profit   This question checks your reading comprehension of the material is section 2.2, Modeling Revenue, Costs, and Profit, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Profit = Costs - Revenue.    In real world cases the revenue function has a negative coefficient for the quadratic term and is a downward facing parabola.    The simple model for revenue is revenue =quantity*price.    In our simplified model, the profit function is linear.    We typically use the supply price in computing revenue.    In the real world variable costs are proportional to quantity.    We typically use the demand price in computing revenue.    Fixed costs include the costs of being in business. They might include license fees, rent for a store or plant, and the cost of furnishings and equipment.    For our simplified model, costs= fixed costs + unit costs*quantity.    The point at which revenues equal expenses (cost) is called the break-even point.    None of the above             "
},
{
  "id": "exercises-set-sec-2-2-2",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-2",
  "type": "Exercise",
  "number": "2.2.7.1",
  "title": "Reading check, Modeling Revenue, Costs, and Profit.",
  "body": "Reading check, Modeling Revenue, Costs, and Profit   This question checks your reading comprehension of the material is section 2.2, Modeling Revenue, Costs, and Profit, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In our simplified model, the profit function is linear.    Profit = Costs - Revenue.    The point at which revenues equal expenses (cost) is called the break-even point.    Fixed costs include the costs of being in business. They might include license fees, rent for a store or plant, and the cost of furnishings and equipment.    We typically use the supply price in computing revenue.    We typically use the demand price in computing revenue.    The simple model for revenue is revenue =quantity*price.    In real world cases the revenue function has a negative coefficient for the quadratic term and is a downward facing parabola.    In the real world variable costs are proportional to quantity.    For our simplified model, costs= fixed costs + unit costs*quantity.    None of the above             "
},
{
  "id": "ex-cdpf-first",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#ex-cdpf-first",
  "type": "Exercise",
  "number": "2.2.7.2",
  "title": "",
  "body": " Given and , with .      Identify the fixed and variable costs.  The fixed cost is $10 (the constant\/fixed part of the cost function), and the variable cost is $3 per item.    Find the revenue and profit functions    .    Evaluate cost, demand price, revenue, and profit at   .    Find all break-even points  Solve . We can do this with Excel or with Wolfram. The break even points are and .     Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.  If we had done the whole problem in Excel it would look like this:    Entries in the cells before quick fill     The table with between 0 and 8     Goal Seek gives break even points at and    The graph produced in Excel. To create the labels: double click on one of the break-even points, go to Chart Layout , go to Data Labels . In this example we chose the x-value . Both break-even points were labeled to show where they are and what the values are in this problem.     "
},
{
  "id": "exercises-set-sec-2-2-3-3",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-3-3",
  "type": "Exercise",
  "number": "2.2.7.3",
  "title": "",
  "body": " Given and , with .  "
},
{
  "id": "exercises-set-sec-2-2-3-4",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-3-4",
  "type": "Exercise",
  "number": "2.2.7.4",
  "title": "",
  "body": " Given and , with .      Identify the fixed and variable costs.  , and the (per unit)    Find the revenue and profit functions.  .    Evaluate cost, demand price, revenue, and profit at .    Entries in the cells before quick fill     Table plus extra column for the value .   At , , , , and     Find all break-even points.    Table plus extra column for the value   The break-even points are and    Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.   The graph produced in Excel. To create the labels: double click on one of the break-even points, go to Chart Layout , go to Data Labels . In this example we chose the x-value . Both break-even points were labeled to show where they are and what the values are in this problem.     "
},
{
  "id": "exercises-set-sec-2-2-3-5",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-3-5",
  "type": "Exercise",
  "number": "2.2.7.5",
  "title": "",
  "body": " Given and , with .  "
},
{
  "id": "exercises-set-sec-2-2-3-6",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-3-6",
  "type": "Exercise",
  "number": "2.2.7.6",
  "title": "",
  "body": " Given demand price and cost are the linear functions that best fit the data below and that .    Quantity 50 100   Demand price 10 8   Cost 300 450       If the table only has 2 data points, Excel can get confused wether the data is in rows or columns. We duplicated one column to get the data plotted correctly.   Identify the fixed and variable costs.   , and the (per unit).    Find the revenue and profit functions.    .    Evaluate cost, demand price, revenue, and profit at .  At , , , , and    Find all break-even points.  The break-even points, found with goal seek, are and    Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.    Entries in the cells before quick fill     Table plus extra columns for the brek even points    The graph produced in Excel. To create the labels: double click on one of the break-even points, go to Chart Layout , go to Data Labels . In this example we chose the x-value . Both break-even points were labeled to show where they are and what the values are in this problem.     "
},
{
  "id": "exercises-set-sec-2-2-3-7",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-3-7",
  "type": "Exercise",
  "number": "2.2.7.7",
  "title": "",
  "body": " Given demand price and cost are the linear functions that best fit the data below and that .    Quantity 60 70  90 100   Demand Price 19   16   Cost 460  540   "
},
{
  "id": "exercises-set-sec-2-2-3-8",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-3-8",
  "type": "Exercise",
  "number": "2.2.7.8",
  "title": "",
  "body": " Given demand price and cost are the linear functions that best fit the data below and that .    Quantity 4356 4792  6503 7038   Demand price $1.10  $.98   Cost $1190  $1860    We plot the data, and find the linear models for demand and cost.     Given the demand price and the cost we create a table using the formulas and we also include a row for the and      Identify the fixed and variable costs.  The fixed cost is - $169.35, and the variable cost is $0.3121 per unit of quantity. (That the fixed costs are negative should make us suspicious that we are outside the useful domain of our cost function.)    Find the revenue and profit functions.  .    Evaluate cost, demand price, revenue, and profit at .  At we have that , , , and .    Find all break-even points.  Re-compute profit for a different range of quantities and we get   Goal Seek using the quantity of 20000 as the basis gives a break-even point at . The other place where the profit is 0 occurs for .    Graph the profit function over a domain that includes both break-even points. Add a textbox and label to identify the first break-even point.   The profit function shows the break-even points close to 0 (-161) and near 20,000 (21,039)     "
},
{
  "id": "ex-cdpf-last",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#ex-cdpf-last",
  "type": "Exercise",
  "number": "2.2.7.9",
  "title": "",
  "body": " Given demand price and cost are the linear functions that best fit the data below and that .    Quantity 5378 7984  8352   Demand price $12.00  $10.00   Supply price $31,100 $45,100    "
},
{
  "id": "exercises-set-sec-2-2-4",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-4",
  "type": "Exercise",
  "number": "2.2.7.10",
  "title": "",
  "body": " Mary has been put in charge of a school function. She estimates that there is a fixed cost of $1000 for the site plus a cost of $5 per person that attends. If she charges $15 a ticket she can sell 250 tickets, but if she lowers the price to $10 she can sell 500 tickets. Assuming the demand price is linear, what price should she charge to break even while maximizing attendance?   The description of the cost function states that the fixed cost is $1000, and the variable cost is $5, so the cost function is .  Two points are given for the price function: and . Hence the slope is .  Then the demand price function is Hence .    Entries in the cells before quick fill     Values after quick fill     Identified the break-even points using Goal Seek   The optimal demand price is $6.48, which allows them to sell 676 tickets and break even.  "
},
{
  "id": "ex-bfe-first",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#ex-bfe-first",
  "type": "Exercise",
  "number": "2.2.7.11",
  "title": "",
  "body": " Given the cost and demand data:    Quantity 100 120  140 160 180  155   Cost 1015 1152  1327 1467 1651    Demand price 21.3 18.1  14.7 12.3 8.6    "
},
{
  "id": "exercises-set-sec-2-2-5-3",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#exercises-set-sec-2-2-5-3",
  "type": "Exercise",
  "number": "2.2.7.12",
  "title": "",
  "body": " Given the cost and demand data:    Quantity 5021 6051  6968 7901 9023  9917 7500    Cost 80376  103874 128513  140258   Demand price 19.69  18.78 18.05  17.61       Find best fitting equations of the cost and demand curves, assuming they are both linear.  Using trendlines we get .    Find the revenue and profit functions and evaluate them at the extra given value.  Creating a table with the cost and demand functions we get   We see that when quantity is 7500 the revenue is $140,670, and the profit is $30,240.50.    Find the break-even points.  Note that these values are not usefull for finding the break-even points. To find those we will start quantity at 0 and go up to 20,000.   So the two break-even points are and .     "
},
{
  "id": "ex-bfe-last",
  "level": "2",
  "url": "sec-2-2-ModelingRevenueCostProfit.html#ex-bfe-last",
  "type": "Exercise",
  "number": "2.2.7.13",
  "title": "",
  "body": " Given the cost and demand data:    Quantity 3160 3615  4092 4462 4837  5261 5579 6000    Cost (Thousands) 90.1  126.70 197.2  234.9   Demand price 25.31  20.91 17.04  14.37   "
},
{
  "id": "sec-2-3-NonlinearFunctions",
  "level": "1",
  "url": "sec-2-3-NonlinearFunctions.html",
  "type": "Section",
  "number": "2.3",
  "title": "Nonlinear Functions",
  "body": " Nonlinear Functions   Link to worksheets used in this section  For most of this chapter, we have restricted ourselves to functions that were either linear functions or polynomial functions where they are built from the interaction of linear functions. While this makes the economic models easier to understand, it is pretty clear that the situations we care about are often better described by more complicated functions. Suppliers of gasoline have a finite amount they can deliver regardless of the price. That leads to a very nonlinear supply function. It is worthwhile to review how we would enter other functions in a spreadsheet.   Algebraic Functions  We start with the algebraic functions that should be familiar from previous courses. These functions will let us use all the models that were mentioned in . For this table, we will assume the input to the function has been stored in cell A1 .    Algebraic Entry  Spreadsheet Entry  Notes    =SQRT(2*A1+7)  * needed for multipliciation    =(2*A1+7)^(1\/3)  other roots done as fractional exponents    =A1^4     =-1*(A1^4)  Excel does negation before exponentiation    =LN(A1)  Log base or natural log    =LOG10(A1)  Log base 10 or common log    =LOG(A1,2)  Log to another base    =1.06^(A1)     =EXP(A1)     =EXP(-(A1^2))  Parentheses needed for correct evaluation    =ABS(A1)  Absolute value   Consider a demand function and why it is probably not linear. We expect demand to go up whenever we drop the price. However, with a linear function, if dropping the price from $100 t0 $50 increases the demand by 20 from 100 to 120, then decreasing the price from $50 to $0 and giving it away would only increase demand by another 20 to 140. A more reasonable model may be a power function where decreasing the price by a fixed percentage increases consumption by a fixed percentage. Similarly, when we think about the supply function, we often expect the limits on available materials to make increasing the supply progressively more expensive.  Exponential Supply and Demand Price    Video presentation of this example    We are interested in selling gizmos. The most a consumer will pay is $1,000. If we drop the cost by 10\\%, we increase demand by 100. The cheapest that a supplier will sell for is $200. We find the market will produce another 100 gizmos whenever we increase the price by 20%. Find the market equilibrium.    We start by converting our information about supply and demand into equations, plugging the equations into Excel, and sketching a graph. We then use Goal Seek to find where the two equations are equal. .   We see that the equilibrium price is at $554.64. At that price the supply and demand will both be 559.45.    Nonlinear Functions From Data    Video presentation of this example    We have the following table of data for demand price and costs for our product.    Quantity 100 300  500 1000 1500   Demand Price $35.35 $21.63  $17.25 $12.70 $10.26   Costs $2347.67 $5040.00  $7481.67 $12469.67 $16196.00   We have reason to believe that my demand price is a power function of some kind. Our cost function is close to linear, but we can get volume discounts and reduce the per-unit cost with larger quantities. Thus, we expect my cost function is actually quadratic, with the quadratic term much smaller than the linear term. Find best fitting curves for cost and price. Derive functions for revenue and profit. Find break-even points between 10 and 1500.    I start by finding best-fit curves of for cost and price.   Thus we have: .  Next, we follow our models to get equations for revenue and profit. .  Finally, we load these equations back into Excel and use Goal Seek to find the break-even points. Looking at projected profit on the chart we see a sign change near 1000, so we suspect a break-even point there. We also note that profit seems to be going up until is about 300, so I test for a break-even point for small values of .   We see we have break-even points when q is 12.74 and 996.28.     Discontinuous Functions  All of the functions above have graphs without breaks. In mathematical terms, they are continuous functions. When we are modeling real world phenomena, we also want to use functions that have breaks in the graph. Paint is typically bought in gallon containers, so the price to paint a room is based on the number of gallons rounded up to the next whole number. Many businesses will give a volume discount to their best customers, so there is one price for small quantities and a different price for large quantities. The cost of labor changes if overtime pay is involved. In all of these cases, the graph has a break in it.  Excel has several discontinuous functions that are of use to us.    Function  Example  Value  Notes   ROUND  ROUND(2.347,1)  2.3  2.35 would round to 2.4   ROUNDDOWN  ROUNDDOWN(2.99,0)  2.0  0 for digits rounds to integers   ROUNDUP  ROUNDUP(-2.132,2)  -2.14  Up is away from 0.   CEILING  CEILING(3.14159,1.5)  4.5  Rounds up to a multiple of 1.5   FLOOR  FLOOR(3.14159,2)  2  Rounds down to a multiple of 2.   IF  IF( ,5,10)  10  The condition is false.   MIN  MIN(1, 3, 5)  1  The minimum of a list of values.   MAX  MAX(1, 3, 5)  5  The maximum of a list of values.   The functions ROUND, ROUNDUP, and ROUNDDOWN are all used for rounding. They have a second argument that specifies the number of digits to which we are rounding. It should be noted that Excel understands up and down as away from zero for negative numbers. Thus it will round up to . The CEILING and FLOOR functions also do rounding, but with some different features. Instead of specifying the number of digits in the answer, these functions round to a multiple of the second argument. As expected, CEILING rounds to the next higher multiple, and FLOOR rounds to the next lower multiple.    Video discussion of discontinuous functions in Excel    Raw Materials in Blocks    Video presentation of this example    The raw material needed to build widgets is sold in blocks that will make 100 widgets. A block costs $1000. The labor cost for building a widget is $7. The fixed costs for widget production is $10,000. Find a formula for the costs of producing widgets. Find the cost of producing 998 and 1009 widgets. You should also find the cost per unit at those quantities.    To make the worksheet easier to follow, we break costs into three pieces, fixed costs labor costs, and materials costs. The fixed coasts are constant, and the labor costs are linear. For the materials costs we need to use the CEILING function to round the number of widgets up to the next even 100, then divide by 100 to obtain the number of blocks of raw material we want to buy.   When we look at the numbers we see that the total cost of producing 998 widgets is $26,986 and the cost of producing 1009 widgets is $28,063. When we look at the unit costs, we expect the cost per unit to generally go down as we produce more, since the fixed costs are distributed over more units. However the per unit cost is $27.04 when we produce 998 widgets, but that goes up to $28.81 when we make 1009 widgets, since we had to buy another block of raw material.     The IF command is used when we use different formulas for different cases. Some easy examples are overtime pay, benefits costs, and volume discount. In many work situations employees are paid one rate up to a certain amount of work and a second rate for additional work. It is also common for full time employees to receive certain benefits, like retirement, that are not offered to part time employees. It is also common for certain industries to offer different rates for their biggest and best customers. The basic syntax of the IF command is:   IF(test condition, value if condition is true, value if condition is false)   The values for true and false can be numbers, string, or formulas to evaluate.  Computing Overtime Pay    Video presentation of this example    I am a bookkeeper at a small firm. Company policy pays the employees time and a half for working more than 40 hours per week. I need to compute the weekly pay of 5 employees. The employees worked 35, 42, 43, 38, and 42.5 hours. Their base pay rates were respectively $8, $9, $10, $11, and $12 an hour. Compute the pay for each employee.    In setting up the worksheet, I will separate regular pay from overtime pay. The regular pay is the base rate times the hours worked, unless the employee worked more than 40 hours, in which case it is the base rate times 40. Overtime pay is the base pay times 1.5 times the number of overtime hours. Since overtime cannot be negative, we use the maximum of 0 and hours worked minus 40.   Looking at the computed values, the employees are owed $280, $387, $445, $418, and $525, respectively.     If our functions are discontinuous, we need to exercise a bit of care with our economic models and the points of interest we have been finding. The market equilibrium and break-even points are both places where two functions are equal. When the mathematics does not give us a clear answer, we should think about the problem and consider what answer makes the most sense. Consider a simplified example to illustrate the point.  Market Equilibrium with Discontinuous Supply Price    Video presentation of this example    In the widget market, the supply is constrained. Obtaining more than 2 widgets means using a more expensive process. My supply and demand curves are: .  Find the market equilibrium price.    We would like to find the place where the two curves cross. However when we look at a graph of the two functions we see that they never meet.   It is clear from the graph that the market should reach equilibrium at a quantity of 2, but it is not clear what the equilibrium price should be. We need to do some reasoning about the behavior described by the equations. From our formula, the supply price for 2 widgets is $2. However if we look at the supply prices of for small values of , we see that the limit of the supply price from above is $4. In practical terms the suppliers will produce 2 widgets for any price from $2 to $4. If we offer $2, they are also willing to produce 2 widgets. If we offer a price of $3.95, they are still only willing to produce 2 widgets. The suppliers will be thus willing to produce 2 widgets at a price of $3. The equilibrium price is 3.  If we want to look at the graph in Excel, it is useful to plot points very close to the discontinuity on both sides. For this problem, we might look at both 2 and 2.0001.     A lesson to remember is that we need to pay attention to places where our functions are discontinuous and that we need to understand what our economic model should do when the curves do not cross. For example, we will understand the break-even point to be the first point where revenue is greater than or equal to costs. In the continuous case, this reduces to our old definition.    Reading Check  Reading check, Nonlinear Functions   This question checks your reading comprehension of the material is section 2.3, Nonlinear Functions, Costs, and Profit, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    ln(x) is used for the natural log of x, or log base e.    All real world cost functions are continuous.    The CEIL command can be used to roundup.    Excel does negation before exponentiation.    The commands ROUND, ROUNDUP, and ROUNDDOWN can be used interchangeably.    For the FLOOR command we specify the number of digits past the decimal point in the rounded number.    In Excel is written EXP(x).    The if construction can be used in Excel for a function with branches.    For the ROUND command we specify the number of digits past the decimal point in the rounded number.    In the real world, the demand function is probably not linear.    None of the above                Exercises 2.3 Nonlinear functions    For , given the equations of the supply and demand curves:  Evaluate the curves at .  Find the market equilibrium.      Given and , with .     Formulas     Table     At , supply = $22, and demand = $47.50   Using Goal Seek we see that the equilibrium occurs at and the price is $36.29       Given supply and , with .    Given and , with .     Formulas     Table     Goal Seek near      At , supply = $19.56, and demand = $18   Using Goal Seek we see that the equilibrium occurs at and the price is $19.25       Given and , with .    Given and , with .   For this problem our supply price function changes at . This is indicated in the table by a thin blue column.     At , supply = $29.28, and demand = $40.73   The equilibrium occurs somewhere between and . Using Goal Seek we find that the equilibrium occurs for .         For , given the supply and demand data:  Find best fitting equations of the supply and demand curves, using the assumptions given in the problem.  Find the market equilibrium.  Find the projected supply and demand prices for the extra quantities given.      Given the data    Quantity 100 120  140 160 180  155   Supply price 32 35.5  39 42.6 47    Demand price 47.2 42.5  38.3 34.5 31    and the assumption that supply price and demand price are both exponential.    Given the data    Quantity 5017 5937  7003 8070 9017  9943 7500   Supply price 17.5 19  20.4 23.7  25.1   Demand price 29.6 26.7  21.3 19.2  17.6   and the assumption that supply price is linear and demand price is exponential.       Using the trendline feature from Excel we get that .    See the tables below.    See the tables below.       Formulas entered     Finding all valuers with these formulas. The yellow ones are the ones we are looking for.     Using Goal Seek to find the equilibrium values in column E     Given the data    Quantity 1009 1469  2041 2462 3002  3517 3979 3200   Supply price 98 106  112 120  1231 126   Demand price 160 144  116 102  82   and the assumption that supply price is linear and demand price is exponential.      For , for the given functions:  Give the excel command that will produce the following function with the assumption that x is in cell A2.  Give a chart of the values of the function evaluated as x goes from 0 to 100 in steps of 5.  A graph of the function.  A list of x-values where the function is discontinuous. (Where the graph jumps.)      Let .      The Excel command is =IF(A2 < =50, LN(2*A2),200*EXP(-A2\/10))     The chart is produced by the following code.     The graph will look as follows. Note that the function is not defined at 0.     The function is not continuous at . Note that the function drops from near 4.5 to about 1 rather suddenly.       Let .    The cost of shipping an item is $2 per pound, or fraction thereof, with a minimal cost of $5.      The function is =MAX(2*A2,5)        See the graph above. This function will return , unless the output drops below 5. It is thus also useful to look at this function between 0 and 20 in steps of 1.    The graph has a slight bend on the lower left, but there is no discontinuity.       Widgets cost $10 each when purchased individually. They cost $9 each when purchased in packages of 10. They cost $8 each when purchased in cases of 50.    Gizmos cost $10 each for the first 9 on an order. The 10th through 49th gizmo cost $9 each. Additional gizmos beyond that each cost $8.   Writing this in math terms: or .    The Excel command is =IF(A2 < 10, 10*A2, IF(A2 < 50, 90+9*(A2-9),450+8*(A2-49)))   The graph is on the chart above.   Note that this function is only defined for integers so technically it is not a continuous function at all. If we use the same definition for all reals as long as the pieces change at 9 and 49. Note however that the slopes change at 9 and 49.       Let be the minimum of and 50.    The cost of parking is $5 per hour rounded to the nearest half hour. For the chart of the values let x goes from 0 to 4 in steps of 0.2.     The Excel command is =5*CEILING(A2,0.5)   The graph is on the chart above.  The graph is discontinuous at multiples of .5        Profit model with nonlinear models  For , given the equations of the cost and demand price function:  Find the revenue and profit functions.  Evaluate cost, demand price, revenue, and profit at .  Find the first break-even point.   Graph the profit function over a domain that includes the first break-even point. Add a textbox and label to identify the break-even point.       Given and , with .    Given and , with .       .        The first break-even point was found using Goal Seek and occurs when .       Given and , with .    Given and , with .           Using Excel we get     Using as the basis, using Goal Seek gives the value of our first break-even point as being 59.75.          Given demand price is an exponential function and cost is a quadratic function fitting the data below and that .    Quantity 100 130  160 190 220  250   Demand price 48 41  35 30 26  22   Cost 3000 3280  3560 3860 4160  4470     Given demand price is an exponential function and cost is a quadratic function fitting the data below and that .    Quantity 200 600  1000 1400 1800  2200   Demand price 190 171  155 140 126  114   Cost 30000 69600  109000 148000 186800  225200    Using Excel trendlines, we use the polynomial of order 2 approximation for cost: .  We use the exponential approximation for demand price: .      .   Recreate the table, but now with the functions we found:   We can add another column to find the values of the respective functions when .  Demand price = $ 182.59, cost = $39,928.20, revenue = $54,775.55 and profit = $14,847.35.   The initial table does not include the break-even points.   So we redo the table starting with q=0 and taking steps of 400. Goal Seek on the quantity q =0 reveals the first break even point to be at .           Given demand price is a linear function and cost is a quadratic function fitting the data below and that .    Quantity 200 600  1000 1400 1800  2200   Demand price 140 120  100 80 60  40   Cost 31600 52400  70000 84400 95600  103600     Given and . with .          Cost = $12,400, demand price = $88, revenue = $17,600, and profit = $5200   The table shows that the breakeven point is close to .  Goal Seek shows it’s at .        Given and with .     "
},
{
  "id": "AlgebraicFunctions-5",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#AlgebraicFunctions-5",
  "type": "Example",
  "number": "2.3.1",
  "title": "Exponential Supply and Demand Price.",
  "body": "Exponential Supply and Demand Price    Video presentation of this example    We are interested in selling gizmos. The most a consumer will pay is $1,000. If we drop the cost by 10\\%, we increase demand by 100. The cheapest that a supplier will sell for is $200. We find the market will produce another 100 gizmos whenever we increase the price by 20%. Find the market equilibrium.    We start by converting our information about supply and demand into equations, plugging the equations into Excel, and sketching a graph. We then use Goal Seek to find where the two equations are equal. .   We see that the equilibrium price is at $554.64. At that price the supply and demand will both be 559.45.   "
},
{
  "id": "AlgebraicFunctions-6",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#AlgebraicFunctions-6",
  "type": "Example",
  "number": "2.3.3",
  "title": "Nonlinear Functions From Data.",
  "body": "Nonlinear Functions From Data    Video presentation of this example    We have the following table of data for demand price and costs for our product.    Quantity 100 300  500 1000 1500   Demand Price $35.35 $21.63  $17.25 $12.70 $10.26   Costs $2347.67 $5040.00  $7481.67 $12469.67 $16196.00   We have reason to believe that my demand price is a power function of some kind. Our cost function is close to linear, but we can get volume discounts and reduce the per-unit cost with larger quantities. Thus, we expect my cost function is actually quadratic, with the quadratic term much smaller than the linear term. Find best fitting curves for cost and price. Derive functions for revenue and profit. Find break-even points between 10 and 1500.    I start by finding best-fit curves of for cost and price.   Thus we have: .  Next, we follow our models to get equations for revenue and profit. .  Finally, we load these equations back into Excel and use Goal Seek to find the break-even points. Looking at projected profit on the chart we see a sign change near 1000, so we suspect a break-even point there. We also note that profit seems to be going up until is about 300, so I test for a break-even point for small values of .   We see we have break-even points when q is 12.74 and 996.28.   "
},
{
  "id": "DiscontinuousFunctions-7",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#DiscontinuousFunctions-7",
  "type": "Figure",
  "number": "2.3.5",
  "title": "",
  "body": " Video discussion of discontinuous functions in Excel   "
},
{
  "id": "DiscontinuousFunctions-8",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#DiscontinuousFunctions-8",
  "type": "Example",
  "number": "2.3.6",
  "title": "Raw Materials in Blocks.",
  "body": "Raw Materials in Blocks    Video presentation of this example    The raw material needed to build widgets is sold in blocks that will make 100 widgets. A block costs $1000. The labor cost for building a widget is $7. The fixed costs for widget production is $10,000. Find a formula for the costs of producing widgets. Find the cost of producing 998 and 1009 widgets. You should also find the cost per unit at those quantities.    To make the worksheet easier to follow, we break costs into three pieces, fixed costs labor costs, and materials costs. The fixed coasts are constant, and the labor costs are linear. For the materials costs we need to use the CEILING function to round the number of widgets up to the next even 100, then divide by 100 to obtain the number of blocks of raw material we want to buy.   When we look at the numbers we see that the total cost of producing 998 widgets is $26,986 and the cost of producing 1009 widgets is $28,063. When we look at the unit costs, we expect the cost per unit to generally go down as we produce more, since the fixed costs are distributed over more units. However the per unit cost is $27.04 when we produce 998 widgets, but that goes up to $28.81 when we make 1009 widgets, since we had to buy another block of raw material.    "
},
{
  "id": "DiscontinuousFunctions-12",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#DiscontinuousFunctions-12",
  "type": "Example",
  "number": "2.3.8",
  "title": "Computing Overtime Pay.",
  "body": "Computing Overtime Pay    Video presentation of this example    I am a bookkeeper at a small firm. Company policy pays the employees time and a half for working more than 40 hours per week. I need to compute the weekly pay of 5 employees. The employees worked 35, 42, 43, 38, and 42.5 hours. Their base pay rates were respectively $8, $9, $10, $11, and $12 an hour. Compute the pay for each employee.    In setting up the worksheet, I will separate regular pay from overtime pay. The regular pay is the base rate times the hours worked, unless the employee worked more than 40 hours, in which case it is the base rate times 40. Overtime pay is the base pay times 1.5 times the number of overtime hours. Since overtime cannot be negative, we use the maximum of 0 and hours worked minus 40.   Looking at the computed values, the employees are owed $280, $387, $445, $418, and $525, respectively.    "
},
{
  "id": "DiscontinuousFunctions-14",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#DiscontinuousFunctions-14",
  "type": "Example",
  "number": "2.3.10",
  "title": "Market Equilibrium with Discontinuous Supply Price.",
  "body": "Market Equilibrium with Discontinuous Supply Price    Video presentation of this example    In the widget market, the supply is constrained. Obtaining more than 2 widgets means using a more expensive process. My supply and demand curves are: .  Find the market equilibrium price.    We would like to find the place where the two curves cross. However when we look at a graph of the two functions we see that they never meet.   It is clear from the graph that the market should reach equilibrium at a quantity of 2, but it is not clear what the equilibrium price should be. We need to do some reasoning about the behavior described by the equations. From our formula, the supply price for 2 widgets is $2. However if we look at the supply prices of for small values of , we see that the limit of the supply price from above is $4. In practical terms the suppliers will produce 2 widgets for any price from $2 to $4. If we offer $2, they are also willing to produce 2 widgets. If we offer a price of $3.95, they are still only willing to produce 2 widgets. The suppliers will be thus willing to produce 2 widgets at a price of $3. The equilibrium price is 3.  If we want to look at the graph in Excel, it is useful to plot points very close to the discontinuity on both sides. For this problem, we might look at both 2 and 2.0001.    "
},
{
  "id": "Reading_Check_Sec2.3",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#Reading_Check_Sec2.3",
  "type": "Reading Question",
  "number": "2.3.3.1",
  "title": "Reading check, Nonlinear Functions.",
  "body": "Reading check, Nonlinear Functions   This question checks your reading comprehension of the material is section 2.3, Nonlinear Functions, Costs, and Profit, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    ln(x) is used for the natural log of x, or log base e.    All real world cost functions are continuous.    The CEIL command can be used to roundup.    Excel does negation before exponentiation.    The commands ROUND, ROUNDUP, and ROUNDDOWN can be used interchangeably.    For the FLOOR command we specify the number of digits past the decimal point in the rounded number.    In Excel is written EXP(x).    The if construction can be used in Excel for a function with branches.    For the ROUND command we specify the number of digits past the decimal point in the rounded number.    In the real world, the demand function is probably not linear.    None of the above             "
},
{
  "id": "ex-sdc-nl-first",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#ex-sdc-nl-first",
  "type": "Exercise",
  "number": "2.3.4.1",
  "title": "",
  "body": " Given and , with .     Formulas     Table     At , supply = $22, and demand = $47.50   Using Goal Seek we see that the equilibrium occurs at and the price is $36.29     "
},
{
  "id": "exercises-set-sec-2-3-2-3",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-2-3",
  "type": "Exercise",
  "number": "2.3.4.2",
  "title": "",
  "body": " Given supply and , with .  "
},
{
  "id": "exercises-set-sec-2-3-2-4",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-2-4",
  "type": "Exercise",
  "number": "2.3.4.3",
  "title": "",
  "body": " Given and , with .     Formulas     Table     Goal Seek near      At , supply = $19.56, and demand = $18   Using Goal Seek we see that the equilibrium occurs at and the price is $19.25     "
},
{
  "id": "exercises-set-sec-2-3-2-5",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-2-5",
  "type": "Exercise",
  "number": "2.3.4.4",
  "title": "",
  "body": " Given and , with .  "
},
{
  "id": "ex-sdc-nl-last",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#ex-sdc-nl-last",
  "type": "Exercise",
  "number": "2.3.4.5",
  "title": "",
  "body": " Given and , with .   For this problem our supply price function changes at . This is indicated in the table by a thin blue column.     At , supply = $29.28, and demand = $40.73   The equilibrium occurs somewhere between and . Using Goal Seek we find that the equilibrium occurs for .     "
},
{
  "id": "ex-bfe-nl-first",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#ex-bfe-nl-first",
  "type": "Exercise",
  "number": "2.3.4.6",
  "title": "",
  "body": " Given the data    Quantity 100 120  140 160 180  155   Supply price 32 35.5  39 42.6 47    Demand price 47.2 42.5  38.3 34.5 31    and the assumption that supply price and demand price are both exponential.  "
},
{
  "id": "exercises-set-sec-2-3-3-3",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-3-3",
  "type": "Exercise",
  "number": "2.3.4.7",
  "title": "",
  "body": " Given the data    Quantity 5017 5937  7003 8070 9017  9943 7500   Supply price 17.5 19  20.4 23.7  25.1   Demand price 29.6 26.7  21.3 19.2  17.6   and the assumption that supply price is linear and demand price is exponential.       Using the trendline feature from Excel we get that .    See the tables below.    See the tables below.       Formulas entered     Finding all valuers with these formulas. The yellow ones are the ones we are looking for.     Using Goal Seek to find the equilibrium values in column E   "
},
{
  "id": "ex-bfe-nl-last",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#ex-bfe-nl-last",
  "type": "Exercise",
  "number": "2.3.4.8",
  "title": "",
  "body": " Given the data    Quantity 1009 1469  2041 2462 3002  3517 3979 3200   Supply price 98 106  112 120  1231 126   Demand price 160 144  116 102  82   and the assumption that supply price is linear and demand price is exponential.  "
},
{
  "id": "ex-excel-disc-first",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#ex-excel-disc-first",
  "type": "Exercise",
  "number": "2.3.4.9",
  "title": "",
  "body": " Let .      The Excel command is =IF(A2 < =50, LN(2*A2),200*EXP(-A2\/10))     The chart is produced by the following code.     The graph will look as follows. Note that the function is not defined at 0.     The function is not continuous at . Note that the function drops from near 4.5 to about 1 rather suddenly.     "
},
{
  "id": "exercises-set-sec-2-3-4-3",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-4-3",
  "type": "Exercise",
  "number": "2.3.4.10",
  "title": "",
  "body": " Let .  "
},
{
  "id": "exercises-set-sec-2-3-4-4",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-4-4",
  "type": "Exercise",
  "number": "2.3.4.11",
  "title": "",
  "body": " The cost of shipping an item is $2 per pound, or fraction thereof, with a minimal cost of $5.      The function is =MAX(2*A2,5)        See the graph above. This function will return , unless the output drops below 5. It is thus also useful to look at this function between 0 and 20 in steps of 1.    The graph has a slight bend on the lower left, but there is no discontinuity.     "
},
{
  "id": "exercises-set-sec-2-3-4-5",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-4-5",
  "type": "Exercise",
  "number": "2.3.4.12",
  "title": "",
  "body": " Widgets cost $10 each when purchased individually. They cost $9 each when purchased in packages of 10. They cost $8 each when purchased in cases of 50.  "
},
{
  "id": "exercises-set-sec-2-3-4-6",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-4-6",
  "type": "Exercise",
  "number": "2.3.4.13",
  "title": "",
  "body": " Gizmos cost $10 each for the first 9 on an order. The 10th through 49th gizmo cost $9 each. Additional gizmos beyond that each cost $8.   Writing this in math terms: or .    The Excel command is =IF(A2 < 10, 10*A2, IF(A2 < 50, 90+9*(A2-9),450+8*(A2-49)))   The graph is on the chart above.   Note that this function is only defined for integers so technically it is not a continuous function at all. If we use the same definition for all reals as long as the pieces change at 9 and 49. Note however that the slopes change at 9 and 49.     "
},
{
  "id": "exercises-set-sec-2-3-4-7",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-4-7",
  "type": "Exercise",
  "number": "2.3.4.14",
  "title": "",
  "body": " Let be the minimum of and 50.  "
},
{
  "id": "ex-excel-disc-last",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#ex-excel-disc-last",
  "type": "Exercise",
  "number": "2.3.4.15",
  "title": "",
  "body": " The cost of parking is $5 per hour rounded to the nearest half hour. For the chart of the values let x goes from 0 to 4 in steps of 0.2.     The Excel command is =5*CEILING(A2,0.5)   The graph is on the chart above.  The graph is discontinuous at multiples of .5    "
},
{
  "id": "ex-prof-nlm-first",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#ex-prof-nlm-first",
  "type": "Exercise",
  "number": "2.3.4.16",
  "title": "",
  "body": " Given and , with .  "
},
{
  "id": "exercises-set-sec-2-3-5-3",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-5-3",
  "type": "Exercise",
  "number": "2.3.4.17",
  "title": "",
  "body": " Given and , with .       .        The first break-even point was found using Goal Seek and occurs when .     "
},
{
  "id": "exercises-set-sec-2-3-5-4",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-5-4",
  "type": "Exercise",
  "number": "2.3.4.18",
  "title": "",
  "body": " Given and , with .  "
},
{
  "id": "exercises-set-sec-2-3-5-5",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-5-5",
  "type": "Exercise",
  "number": "2.3.4.19",
  "title": "",
  "body": " Given and , with .           Using Excel we get     Using as the basis, using Goal Seek gives the value of our first break-even point as being 59.75.        "
},
{
  "id": "exercises-set-sec-2-3-5-6",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-5-6",
  "type": "Exercise",
  "number": "2.3.4.20",
  "title": "",
  "body": " Given demand price is an exponential function and cost is a quadratic function fitting the data below and that .    Quantity 100 130  160 190 220  250   Demand price 48 41  35 30 26  22   Cost 3000 3280  3560 3860 4160  4470   "
},
{
  "id": "exercises-set-sec-2-3-5-7",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-5-7",
  "type": "Exercise",
  "number": "2.3.4.21",
  "title": "",
  "body": " Given demand price is an exponential function and cost is a quadratic function fitting the data below and that .    Quantity 200 600  1000 1400 1800  2200   Demand price 190 171  155 140 126  114   Cost 30000 69600  109000 148000 186800  225200    Using Excel trendlines, we use the polynomial of order 2 approximation for cost: .  We use the exponential approximation for demand price: .      .   Recreate the table, but now with the functions we found:   We can add another column to find the values of the respective functions when .  Demand price = $ 182.59, cost = $39,928.20, revenue = $54,775.55 and profit = $14,847.35.   The initial table does not include the break-even points.   So we redo the table starting with q=0 and taking steps of 400. Goal Seek on the quantity q =0 reveals the first break even point to be at .         "
},
{
  "id": "exercises-set-sec-2-3-5-8",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-5-8",
  "type": "Exercise",
  "number": "2.3.4.22",
  "title": "",
  "body": " Given demand price is a linear function and cost is a quadratic function fitting the data below and that .    Quantity 200 600  1000 1400 1800  2200   Demand price 140 120  100 80 60  40   Cost 31600 52400  70000 84400 95600  103600   "
},
{
  "id": "exercises-set-sec-2-3-5-9",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#exercises-set-sec-2-3-5-9",
  "type": "Exercise",
  "number": "2.3.4.23",
  "title": "",
  "body": " Given and . with .          Cost = $12,400, demand price = $88, revenue = $17,600, and profit = $5200   The table shows that the breakeven point is close to .  Goal Seek shows it’s at .      "
},
{
  "id": "ex-prof-nlm-last",
  "level": "2",
  "url": "sec-2-3-NonlinearFunctions.html#ex-prof-nlm-last",
  "type": "Exercise",
  "number": "2.3.4.24",
  "title": "",
  "body": " Given and with .  "
},
{
  "id": "sec-3-1-MarginalFunctions",
  "level": "1",
  "url": "sec-3-1-MarginalFunctions.html",
  "type": "Section",
  "number": "3.1",
  "title": "Marginal Functions and Difference Quotients",
  "body": " Marginal Functions and Difference Quotients   Link to worksheets used in this section  There are a number of industries where it is common for people to pay significantly different prices for the same product from the same vendor. (Airline tickets, symphony seats, and doughnuts at different times of the day come to mind.) The reason is generally not favoritism or an irrational vendor, but an analysis that looks at the change in costs and profits for making an additional sale. Flying a plane with 51 passengers does not cost much more than flying the same plane with 50 passengers. The same is true when playing a symphony. Selling an extra doughnut at half price, just before closing when you would have to throw the doughnut out, adds to the profit. In all of these cases, we are less concerned with total revenues and profits and more concerned with how things change with one more sale.  In finance and economics this issue is dealt with using marginal functions.    Marginal Functions   Marginal value   If is a function (i.e., cost, revenue, or profit), we define the marginal value of to be the change in as increases by 1. Thus .    It is worthwhile to point out a detail that may cause a bit of confusion. Note that we are defining marginal functions of rather than the marginal functions of . This is the standard convention in finance where the question is phrased in terms of change associated with producing one more. I am more concerned about deciding about what I should do rather than looking at what I have already done. The usual functions with related marginal functions are Cost, Revenue, and Profit.     Marginal Cost at , or is the change from to : .     is the change from to : .     is the change from to : .     It is noteworthy that the three examples mentioned are all cases where the cost of producing the goods has already been set, the goods cannot be saved and sold later, and any change in revenue adds to the profit.   Marginal functions for widgets   Video presentation of marginal revenue for widgets    For my widget company, I have determined that the cost and demand price functions are: .  I want to compute the marginal cost, revenue, and profit to produce the 11th and 26th widget. I also want to understand the marginal cost of producing the 1st widget.  To set up the problem, I recall that we assume we are selling at the demand price, the highest price consumers will pay and still have us sell all we produce. Thus the formulas for revenue and profit are:     I set up my worksheet to compute these values.      I then create additional columns for the marginal functions.      Now we simply go back to values and see the values.    .   The last equation illustrates the use of marginal functions. While producing and selling the 26th widget did increase total revenue, the marginal profit was negative, so I would have been better off if I had made fewer widgets. Notice that the marginal value of producing the 1st widget is not on the spreadsheet and needs to be dealt with as a special case. Given our functions we have two reasonable ways to understand the value . Either we can assume that there is no cost to not being in a business, so , and our cost function was only valid for positive numbers, or that the is understood as the fixed costs, which we have already undertaken, like a tax or license fee, so for this problem. Both are reasonable interpretations. We will need to look at the context of our problem to decide on the correct interpretation.  Many questions in business can be translated into making some function as big or small as possible, depending on whether we think the value is good or bad. It is thus often useful to see a graph of both the function of interest and the related marginal function on the same graph.   Profit and Marginal Profit Together    Video presentation of this example    The function expresses the profit at my gadget factory. Plot both profit and marginal profit together to estimate both the maximum profit at the factory, as well as the quantity I should produce to get that profit.    In setting up the spreadsheet, there are some details to notice.   Since Excel does negation before powers, I need parentheses so is evaluated correctly. Since I suspect I will have to look at a large range of numbers to find the maximum, I put and as separate columns. This keeps my marginal operation in a single row and allows computation of Marginal Profit without evaluating for every value of q. We now look at the graph with both Profit and Marginal Profit. To make the graph easier to read, a secondary axis is used for profit. This allows us to see where Marginal Profit crosses the axis.   We see that profit reaches a maximum where marginal profit is zero. This occurs approximately when q is approximately 1000. In that case the profit is about $50,000. Looking back at the numbers in the spreadsheet, we see that the maximum profit is closer to $49,000.     The more realistic situation for us to face is one where we are given a collection of data points. In that situation, we need to first find a best fitting curve and use it to make predicted values. Then, we can find the marginal function of interest and do our comparison.   Marginal Profit from Data    Video presentation of this example    I have the following data on profit and production level for widgets.    Widgets produced  40  50  78  87  95   Profit  $7,486.40  $14,505.60  $23,431.60  $23,014.30  $21,258.50   Use Marginal Profit to find the level of production that maximizes profit.    I put the data into a spreadsheet and find a best fitting curve to produce a formula. Looking at the data, I will assume that profit is a quadratic function of the amount produced.   With the formula from the trendline, I can add a column for . The obvious adjustment produces . It is then easy to compute the value of .   Looking at the graph, the maximum is close to . I simply add some rows with appropriate values of to get the desired answer.   When , the Marginal Profit turns negative. The maximum profit is $23,492.96, obtained by producing 80 widgets.     Difference Quotients and Average Rate of Change  The marginal value, , of a function , measures the amount of change from to . It can also be understood as a special case of the average rate of change of .   It is easy to see that the average rate of change of as goes from to is .   There are a number of situations where we want to look at average rate of change for a period of some other change in the variable. We may have production in thousands or millions of units. If we are looking at monthly or quarterly financial records, we may want to look at the average rate of change over a year to take into account the seasonal variation of production.   Rate of Change when denominator is not 1   Video presentation of this example    We have the following monthly sales data on gizmos.   We want to find the rate of change of monthly sales. If we look at a graph of the sales data:   I can see that sales are trending upwards, but there is a seasonal variation added in. Excel will not do a good job of modeling this function with a trendline. Thus, I want to find a rate of change over a period of 12 months to eliminate the seasonal variation. To find the most recent trend I use the most recent data with a time period of 12 months.   .   It is worth noting that the need to adjust for the right time period for comparisons is probably the reason that company revenue reports typically show the previous quarter as well as the quarter from a year earlier.    An Excel Trick for Difference Quotients   Video presentation of this topic    When creating marginal functions or other difference quotients, we often want the computations kept in one row, particularly if we want to graph the function and the marginal function together. A careful arrangement of the columns and the use of quick fill will make our life easier.  Suppose my revenue function is and I want to compute marginal revenue. Then . Experience shows that students will often make a typing mistake in the second formula, often forgetting parentheses somewhere or forgetting to change one of the copies of to .      One solution is to add an extra column for next to the column for . Then the formula for is obtained by quick filling form the formula for .      This trick will be even more useful in the next section when we want to compute the values of , , and .    Reading Check  Reading check, Marginal Functions and Difference Quotients   This question checks your reading comprehension of the material is section 3.1, Marginal Functions and Difference Quotients,, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Marginal Cost at x, or Marginal Cost(x+1) is the change from Cost(x) to Cost(x+1).    Marginal Profit(x+1) is the change from Profit(x) to Profit(x+1).    Marginal functions are difference quotients with denominator 1.    The marginal value of is defined to be the change in as increases by 1.    Marginal Revenue(x) is the change from Revenue(x) to Revenue(x+1).    None of the above                Exercises: Marginal Functions and Difference Quotients Problems   If , what is the marginal revenue from selling the 10th item?   The marginal revenue would be given by .  The marginal revenue from selling the 10th item is $5.    If , what is the marginal profit from selling the 20th item?    If , what is the marginal cost from selling the 30th item?   The marginal cost would be given by   The marginal cost from selling the 30th item is $7.    If , what is the marginal revenue from selling the 100th item?    If is a constant function what can you say about the marginal cost function? (Use algebra to find a formula for the marginal function.)        , but the cost function is equal to some constant, so . This implies that the Marginal Cost function must be 0.    If is a linear function with slope , what can you say about the marginal revenue function? (Use algebra to find a formula for the marginal function.)     For :  Make a chart of the function and the marginal function as q goes from 0 to 30.  Plot the function and the marginal function on the same graph.  From the shape of the graph of the marginal function, decide what kind of graph it appears to be.  Find the formula for a best fitting curve for the marginal function.  List the regions where the original function is increasing and the regions where it is decreasing.  List the regions where the marginal function is positive and where the marginal function is negative.      Let .      Recall that .  The entries in the cells should be   (See part b for some of the values)    Partial table and the graphs:    The table and the graph indicate that the marginal function is a constant (23 to be precise)   The cost function is always increasing.  The marginal function is always positive.      Let .    Let .      Recall that  The entries in the cells should be   (See part b for some of the values)    Partial table and the graphs:    The table and the graph indicate that the marginal function is a line.   The Revenue function is increasing until is about 17.  The marginal function is positive until is about 17.      Let .    Let .      Recall that .  The entries in the cells should be   (See part b for some of the values)    Partial table and the graphs:    The table and the graph indicate that the marginal function is a quadratic function.   The Cost function is always increasing.  The marginal function is always positive.      Let .      For problems 13-16 you are given data for a function.  Assuming the function is of the kind specified; find a best fitting curve for the function and a formula.  Plot the function and the marginal function on the same graph.  From the shape of the graph of the marginal function, decide what kind of graph it appears to be.  In a textbox, describe your conclusions about the sign of the marginal function and the rising or falling of the original function.      Assume is a polynomial function of degree 2 and that you have the following data:    Quantity  30  48  73  149  177   Profit  447  561  669  801  759      The best fitting curve is:   If , then you can set this up in Excel by finding: and .   The chart was created and the marginal profit was plotted using the secondary axis.    The Marginal Profit function seems to be a straight line with negative slope.   In a textbox, describe your conclusions about the sign of the marginal function and the rising or falling of the original function.       Assume is a polynomial function of degree 2 and that you have the following data:    Quantity  105  203  349  535  644   Profit  339  1535  2429  2035  1029     Assume is an exponential function and that you have the following data:    Year  2  4  6  8  10   Resale Value  $8,607  $7,593  $6,423  $5,684  $5,051         .    Using the following Excel commands     Marginal Resale Value seems to be an exponential function  It appears that Marginal Resale Value is always negative and Resale value is always decreasing.      Assume is an exponential function and that you have the following data:    Year  10  20  30  35  40   Amount  $54,713  $143,909  $289,476  $395,709  $533,071      The monthly revenue, in thousands of dollars for your company is found to follow: .  Plot the revenue and marginal revenue. Explain why marginal revenue is not a good indicator of growth. Plot average rate of change over a 12-month span and explain why it is a better measure of growth.    Marginal Revenue is the change in revenue each month. This gives us some idea of what is happening each month, but does not give a very clear picture of overall trends.  The average rate of change over a 12-month time span would be . The overall growth over an entire year gives a better indication of trends. And the comparison over a year indicates a slight growth on average by $5\/month.    Historical data for quarterly revenue reports for Microsoft can be found online. (A good source is http:\/\/www.microsoft.com\/investor\/EarningsAndFinancials\/TrendedHistory\/default.asp .) Plot 5 years of data.    Explain why looking at marginal change of revenue from one quarter to the next is misleading.  Explain how to adjust for this problem.      "
},
{
  "id": "sec-3-1-MarginalFunctions-3-2",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#sec-3-1-MarginalFunctions-3-2",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Marginal value.",
  "body": " Marginal value   If is a function (i.e., cost, revenue, or profit), we define the marginal value of to be the change in as increases by 1. Thus .   "
},
{
  "id": "sec-3-1-MarginalFunctions-3-6",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#sec-3-1-MarginalFunctions-3-6",
  "type": "Example",
  "number": "3.1.2",
  "title": "Marginal functions for widgets.",
  "body": " Marginal functions for widgets   Video presentation of marginal revenue for widgets    For my widget company, I have determined that the cost and demand price functions are: .  I want to compute the marginal cost, revenue, and profit to produce the 11th and 26th widget. I also want to understand the marginal cost of producing the 1st widget.  To set up the problem, I recall that we assume we are selling at the demand price, the highest price consumers will pay and still have us sell all we produce. Thus the formulas for revenue and profit are:     I set up my worksheet to compute these values.      I then create additional columns for the marginal functions.      Now we simply go back to values and see the values.    .  "
},
{
  "id": "sec-3-1-MarginalFunctions-3-9",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#sec-3-1-MarginalFunctions-3-9",
  "type": "Example",
  "number": "3.1.6",
  "title": "Profit and Marginal Profit Together.",
  "body": " Profit and Marginal Profit Together    Video presentation of this example    The function expresses the profit at my gadget factory. Plot both profit and marginal profit together to estimate both the maximum profit at the factory, as well as the quantity I should produce to get that profit.    In setting up the spreadsheet, there are some details to notice.   Since Excel does negation before powers, I need parentheses so is evaluated correctly. Since I suspect I will have to look at a large range of numbers to find the maximum, I put and as separate columns. This keeps my marginal operation in a single row and allows computation of Marginal Profit without evaluating for every value of q. We now look at the graph with both Profit and Marginal Profit. To make the graph easier to read, a secondary axis is used for profit. This allows us to see where Marginal Profit crosses the axis.   We see that profit reaches a maximum where marginal profit is zero. This occurs approximately when q is approximately 1000. In that case the profit is about $50,000. Looking back at the numbers in the spreadsheet, we see that the maximum profit is closer to $49,000.    "
},
{
  "id": "sec-3-1-MarginalFunctions-3-11",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#sec-3-1-MarginalFunctions-3-11",
  "type": "Example",
  "number": "3.1.8",
  "title": "Marginal Profit from Data.",
  "body": " Marginal Profit from Data    Video presentation of this example    I have the following data on profit and production level for widgets.    Widgets produced  40  50  78  87  95   Profit  $7,486.40  $14,505.60  $23,431.60  $23,014.30  $21,258.50   Use Marginal Profit to find the level of production that maximizes profit.    I put the data into a spreadsheet and find a best fitting curve to produce a formula. Looking at the data, I will assume that profit is a quadratic function of the amount produced.   With the formula from the trendline, I can add a column for . The obvious adjustment produces . It is then easy to compute the value of .   Looking at the graph, the maximum is close to . I simply add some rows with appropriate values of to get the desired answer.   When , the Marginal Profit turns negative. The maximum profit is $23,492.96, obtained by producing 80 widgets.   "
},
{
  "id": "sec-3-1-MarginalFunctions-4-5",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#sec-3-1-MarginalFunctions-4-5",
  "type": "Example",
  "number": "3.1.10",
  "title": "Rate of Change when denominator is not 1.",
  "body": " Rate of Change when denominator is not 1   Video presentation of this example    We have the following monthly sales data on gizmos.   We want to find the rate of change of monthly sales. If we look at a graph of the sales data:   I can see that sales are trending upwards, but there is a seasonal variation added in. Excel will not do a good job of modeling this function with a trendline. Thus, I want to find a rate of change over a period of 12 months to eliminate the seasonal variation. To find the most recent trend I use the most recent data with a time period of 12 months.   .  "
},
{
  "id": "MarginaFunctionQuickFillVideo",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#MarginaFunctionQuickFillVideo",
  "type": "Figure",
  "number": "3.1.12",
  "title": "",
  "body": " Video presentation of this topic   "
},
{
  "id": "MarginaFunctionCellRef",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#MarginaFunctionCellRef",
  "type": "Figure",
  "number": "3.1.13",
  "title": "",
  "body": "   "
},
{
  "id": "MarginaFunctionQuickFill",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#MarginaFunctionQuickFill",
  "type": "Figure",
  "number": "3.1.14",
  "title": "",
  "body": "   "
},
{
  "id": "Reading_Check_Sec3.1",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#Reading_Check_Sec3.1",
  "type": "Reading Question",
  "number": "3.1.4.1",
  "title": "Reading check, Marginal Functions and Difference Quotients.",
  "body": "Reading check, Marginal Functions and Difference Quotients   This question checks your reading comprehension of the material is section 3.1, Marginal Functions and Difference Quotients,, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Marginal Cost at x, or Marginal Cost(x+1) is the change from Cost(x) to Cost(x+1).    Marginal Profit(x+1) is the change from Profit(x) to Profit(x+1).    Marginal functions are difference quotients with denominator 1.    The marginal value of is defined to be the change in as increases by 1.    Marginal Revenue(x) is the change from Revenue(x) to Revenue(x+1).    None of the above             "
},
{
  "id": "exercises-set-sec-3-1-2",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-2",
  "type": "Exercise",
  "number": "3.1.5.1",
  "title": "",
  "body": " If , what is the marginal revenue from selling the 10th item?   The marginal revenue would be given by .  The marginal revenue from selling the 10th item is $5.  "
},
{
  "id": "exercises-set-sec-3-1-3",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-3",
  "type": "Exercise",
  "number": "3.1.5.2",
  "title": "",
  "body": " If , what is the marginal profit from selling the 20th item?  "
},
{
  "id": "exercises-set-sec-3-1-4",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-4",
  "type": "Exercise",
  "number": "3.1.5.3",
  "title": "",
  "body": " If , what is the marginal cost from selling the 30th item?   The marginal cost would be given by   The marginal cost from selling the 30th item is $7.  "
},
{
  "id": "exercises-set-sec-3-1-5",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-5",
  "type": "Exercise",
  "number": "3.1.5.4",
  "title": "",
  "body": " If , what is the marginal revenue from selling the 100th item?  "
},
{
  "id": "exercises-set-sec-3-1-6",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-6",
  "type": "Exercise",
  "number": "3.1.5.5",
  "title": "",
  "body": " If is a constant function what can you say about the marginal cost function? (Use algebra to find a formula for the marginal function.)        , but the cost function is equal to some constant, so . This implies that the Marginal Cost function must be 0.  "
},
{
  "id": "exercises-set-sec-3-1-7",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-7",
  "type": "Exercise",
  "number": "3.1.5.6",
  "title": "",
  "body": " If is a linear function with slope , what can you say about the marginal revenue function? (Use algebra to find a formula for the marginal function.)  "
},
{
  "id": "ex-mfunction-first",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#ex-mfunction-first",
  "type": "Exercise",
  "number": "3.1.5.7",
  "title": "",
  "body": " Let .      Recall that .  The entries in the cells should be   (See part b for some of the values)    Partial table and the graphs:    The table and the graph indicate that the marginal function is a constant (23 to be precise)   The cost function is always increasing.  The marginal function is always positive.    "
},
{
  "id": "exercises-set-sec-3-1-8-3",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-8-3",
  "type": "Exercise",
  "number": "3.1.5.8",
  "title": "",
  "body": " Let .  "
},
{
  "id": "exercises-set-sec-3-1-8-4",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-8-4",
  "type": "Exercise",
  "number": "3.1.5.9",
  "title": "",
  "body": " Let .      Recall that  The entries in the cells should be   (See part b for some of the values)    Partial table and the graphs:    The table and the graph indicate that the marginal function is a line.   The Revenue function is increasing until is about 17.  The marginal function is positive until is about 17.    "
},
{
  "id": "exercises-set-sec-3-1-8-5",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-8-5",
  "type": "Exercise",
  "number": "3.1.5.10",
  "title": "",
  "body": " Let .  "
},
{
  "id": "exercises-set-sec-3-1-8-6",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-8-6",
  "type": "Exercise",
  "number": "3.1.5.11",
  "title": "",
  "body": " Let .      Recall that .  The entries in the cells should be   (See part b for some of the values)    Partial table and the graphs:    The table and the graph indicate that the marginal function is a quadratic function.   The Cost function is always increasing.  The marginal function is always positive.    "
},
{
  "id": "ex-mfunction-last",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#ex-mfunction-last",
  "type": "Exercise",
  "number": "3.1.5.12",
  "title": "",
  "body": " Let .  "
},
{
  "id": "ex-mf-graph-first",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#ex-mf-graph-first",
  "type": "Exercise",
  "number": "3.1.5.13",
  "title": "",
  "body": " Assume is a polynomial function of degree 2 and that you have the following data:    Quantity  30  48  73  149  177   Profit  447  561  669  801  759      The best fitting curve is:   If , then you can set this up in Excel by finding: and .   The chart was created and the marginal profit was plotted using the secondary axis.    The Marginal Profit function seems to be a straight line with negative slope.   In a textbox, describe your conclusions about the sign of the marginal function and the rising or falling of the original function.     "
},
{
  "id": "exercises-set-sec-3-1-9-3",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-9-3",
  "type": "Exercise",
  "number": "3.1.5.14",
  "title": "",
  "body": " Assume is a polynomial function of degree 2 and that you have the following data:    Quantity  105  203  349  535  644   Profit  339  1535  2429  2035  1029   "
},
{
  "id": "exercises-set-sec-3-1-9-4",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-9-4",
  "type": "Exercise",
  "number": "3.1.5.15",
  "title": "",
  "body": " Assume is an exponential function and that you have the following data:    Year  2  4  6  8  10   Resale Value  $8,607  $7,593  $6,423  $5,684  $5,051         .    Using the following Excel commands     Marginal Resale Value seems to be an exponential function  It appears that Marginal Resale Value is always negative and Resale value is always decreasing.    "
},
{
  "id": "ex-mf-graph-last",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#ex-mf-graph-last",
  "type": "Exercise",
  "number": "3.1.5.16",
  "title": "",
  "body": " Assume is an exponential function and that you have the following data:    Year  10  20  30  35  40   Amount  $54,713  $143,909  $289,476  $395,709  $533,071   "
},
{
  "id": "exercises-set-sec-3-1-10",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-10",
  "type": "Exercise",
  "number": "3.1.5.17",
  "title": "",
  "body": " The monthly revenue, in thousands of dollars for your company is found to follow: .  Plot the revenue and marginal revenue. Explain why marginal revenue is not a good indicator of growth. Plot average rate of change over a 12-month span and explain why it is a better measure of growth.    Marginal Revenue is the change in revenue each month. This gives us some idea of what is happening each month, but does not give a very clear picture of overall trends.  The average rate of change over a 12-month time span would be . The overall growth over an entire year gives a better indication of trends. And the comparison over a year indicates a slight growth on average by $5\/month.  "
},
{
  "id": "exercises-set-sec-3-1-11",
  "level": "2",
  "url": "sec-3-1-MarginalFunctions.html#exercises-set-sec-3-1-11",
  "type": "Exercise",
  "number": "3.1.5.18",
  "title": "",
  "body": " Historical data for quarterly revenue reports for Microsoft can be found online. (A good source is http:\/\/www.microsoft.com\/investor\/EarningsAndFinancials\/TrendedHistory\/default.asp .) Plot 5 years of data.    Explain why looking at marginal change of revenue from one quarter to the next is misleading.  Explain how to adjust for this problem.    "
},
{
  "id": "sec-3-2-NumericDerivativesLimits",
  "level": "1",
  "url": "sec-3-2-NumericDerivativesLimits.html",
  "type": "Section",
  "number": "3.2",
  "title": "Numeric Derivatives and Limits",
  "body": " Numeric Derivatives and Limits  Link to worksheets used in this section  In the previous section, we looked at marginal functions, the difference between and . For functions that are only defined at integer values, this is the obvious way to define a rate of change. However for functions that are defined on an interval, we would like to use the information at values closer to our value of .  Intuitively, we would like to be able to zoom in on the graph of at a point until the graph looks like a straight line, then pick two points on that line, and find the slope as the rise over the run. The rate of change is then the slope of the line we have found. If we could zoom arbitrarily close, this process would give an instantaneous rate of change, or the derivative of the function at that point.   Formal derivative at a point   For a function , the instantaneous rate of change of at , or the derivative of , at , denoted as , is defined as , where is understood to be value that gets arbitrarily close to by making arbitrarily close to .     The symbol is the captial Greek letter Delta , which is commonly used to signify change in the sciences. Since we can't easily enter Greek letters into an Excel worksheet, we will use del x to represent in Excel.   Our task in this section is to turn our intuitive notion and definition and into a process that lets us find the value, and to find it efficiently.  A simple derivative at a point   Let . We would like to find .   Simple Derivative at a Point     Solution A - Intuitive Definition  We start with our intuitive notion. We want to look at the graph of , zoomed in far enough that the graph looks like a straight line. I set up a worksheet to look at the graph of near . Since I want to be able to zoom in, I set up the graph so that it plots points that are multiples of from . I also want to plot the line connecting the points and and notice that the slope of the line connecting these points, the secant line, is .  For this example . If , we can see that the function and the secant line are clearly distinct.      The worksheet is designed to make it easy to change the value of .      As we can see, if we let , the slope is 3, but we have not zoomed in far enough for the graph of to look like a straight line. Letting , the slope is 2.01, and the graphs of the function and secant line seem to be the same.      With some experimentation, taking both positive and negative values of , we get the following table of values:     slope    slope    1  3   -1  1    0.1  2.1   -0.1  1.9    0.01  2.01   -0.01  1.99    0.001  2.001   -0.001  1.999    It is clear that as gets very small, the slope of the secant line gets closer and closer to 2. Thus .   Solution B - Numerical Limit  The method of the first solution takes too much work and requires us to reset a worksheet and keep track of the slope as we try a number of values for . We would like to create a worksheet that simply shows the values of the slope of the secant line for values of and takes the value that this approaches. We can set up a worksheet where each line takes from the previous line and divides by 10.      We get the same value whether we start at 1 or -1. Once again, we find .    Solution C - Calculator Definition  This method of finding the derivative still has a number of difficulties. In the example above, the exact answer we want (in this case 2) did not show up in any of our computations. We also find that if we make too small, we run into a problem called round off error. If the next chapter we will look at methods that compute derivatives symbolically, but for this chapter we want an easy method of approximation. We will use the approximation technique that is used by most graphing calculators when they compute the derivative. They use a balanced difference quotient where we find the slope of the secant line between points before and after the point we are interested in. As the picture below shows, compared to either the right secant or the left secant, for most functions the balanced secant is closer to being parallel to the tangent line.   We will use the default on calculators, that is we will use .   For our example this gives our familiar result that .    We formalize this last approach.  Calculator Approximation of the Derivative    .    For the rest of this text, when we need to compute a numerical approximation to the derivative, we will use the calculator approximation of the derivative.  We should note that the calculator rule is an approximation technique, rather than a definition. It will give a misleading answer for functions that do not approximate a straight line in a window that is 0.002 wide. In this course, the approximation will only cause a problem with functions that have corners or cusps, like the functions and at . The main advantage of the using the calculator rule is that it is straightforward enough to compute to allow us to plot a function and its derivative on a single graph. This allows us to compare the graph of the function with the graph of the derivative.   Video Grophing a function and its derivative    A Function and its Derivative   Compare the graph of and the graph of its derivative, using separate axes for the two graphs. What features of the graph of can be located by using the graph of ?    Since this problem will serve as a template for a question we will look at many times, it is worthwhile to look at it in detail. We start by setting up a workbook that will have the structure we need to compute a chart of values for and .      The picture above gives the minimal amount we need to type in. The rest will be done with quick filling. The entry of cell B1 gives the formula for the function. In cell D5 we evaluate the function using the first value of from cell A5 . We have two values of in cells A5 and A6 so that we can quick fill to get a list of values. We use absolute references for , so it will not change on quick fills. We then fill cells E5 and F5 from cell D5 , then fill row 6 from row 5, then fill the rest of the chart from rows 5 and 6.   It is then a straightforward task to plot the two curves. We notice that the graph of the function is a parabola. If the derivative is negative, the graph of is decreasing. If the derivative is positive, the graph of the function is increasing. The graph of reaches its minimum at the vertex, which is also where . We also notice that the derivative of this parabola seems to be a straight line.    Several of our observations from this example work in general.  Looking at a single point, the derivative of a function is the slope of the line tangent to the graph at that point.  The tangent line is a best linear approximation to the graph at a point.  Looking at the derivative at lots of points, the graph of a function is increasing when the derivative is positive, and the graph of a function is decreasing when the derivative is negative.  For the graph to have a point that is locally a maximum or minimum, the derivative cannot be positive or negative, so the derivative must either be zero or undefined for the graph of the function to have a maximum or minimum.    Finding places where functions reach their highest and lowest values is an important activity in mathematics. We will look at these applications in more depth in upcoming sections. The reader is warned that we can have places where the derivative is zero but the function is still increasing or decreasing.  The derivative of a more complicated function   Compare the graph of and the graph of its derivative, using separate axes for the two graphs. What features of the graph of can be located by using the graph of ?    The setup for this example is very similar to the last problem.   Since the values of range between -500 and 1500, we note that is the blue graph and uses the axis in the center of the graph. Similarly the values of range between -500 and 2500, we note that is the red graph and uses the axis on the side of the graph.  This time we notice three places where the derivative seems to be zero, when is near , , and . We use goal seek on the derivative and find that the derivative is zero when , 0, or 4.648. Looking at the graph of f(x) at those points, we see that has a maximum when , and a minimum when . When , is neither a maximum nor a minimum.    In the next chapter, we will look at ways to find the derivative of a function symbolically. We can already reason our way to symbolically finding the derivative of simple functions. If our function is constant or linear, then the graph of the function is its own tangent line, so the derivative is simply the slope of the graph. For quadratic functions we noticed that the graph of the derivative seems to be linear. If we can guess the form of the derivative, we can use trendlines to produce a formula.   Using trendlines to get the formula of a derivative    Video presentation of this example    Use trendlines to find a formula for the derivative of .    The setup for this example is very similar to the last problem. We simply change the function. This involves changing the formulas in cells B1 and D5 , then using quick copy to change the formulas for the cells in columns D through F.   Once we have points for the derivative, we add a trendline using a linear model. We set the options to show both the formula for the trendline and the value of . The fact that , indicates the trendline we found exactly fits the data. In the workbook connected to this section there is a page for Example 6B. It uses parameters for the coefficients on a quadratic formula, so that you can explore the derivative of a general quadratic function.     A Note on Terminology  It is worthwhile to point out some ambiguity in the terms used in this section and the previous section. We have been using the term for the change , where , might be revenue, or cost, or profit. This is the standard definition of a marginal function from finance or economics. However, if you do a web search on calculus marginal revenue you will find that most calculus books treat the marginal function as simply another name for the derivative. While they are related, they are not the same thing. In the next chapter, we will find that it is often easier to produce a formula for the derivative of a function rather than the related marginal function, which is why the derivative is used for the marginal function. However, in this text, we will stick to the correct definition of marginal functions.    Summary  The notion of derivative is one of the key concepts of calculus. The concept of the derivative of a function is closely connected to the concept of marginal function. We gave three ways of understanding the derivative of a function at a point.     Intuitive understanding  The derivative of , at denoted as , is the slope of the line obtained by zooming in on the graph at until it looks like a straight line.    Formal definition  The derivative of , denoted as , is defined as .    The calculator approximation  The derivative of , can be approximated using the formula .       Reading Check  Reading check, 3.2, Numeric Derivatives and Limits,   This question checks your reading comprehension of the material is section 3.2, Numeric Derivatives and Limits, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    The calculator definition of derivative approximates by .    If the derivative of is negative, the graph of the function , is increasing.    The calculator definition of the derivative gives a good approximation for all functions.).    If the derivative of is positive, the graph of the function , is increasing.    The calculator definition of derivative has problems with corners and cusps.    For a function , the derivative is defined as the limit as approaches 0 of .    None of the above                Exercises: Numeric Derivatives and Limits    For each specified function and x-value, do the following:  Find a value of small enough that graph of the function looks like a straight line on the region from before the x-value to after the x-value. Graph the function in this region and find the slope of the corresponding secant line  Estimate the derivative by finding the slope of the secant when takes the values 0.1, 0.01, 0.001, 0.0001, -0.1, -0.01, -0.001, and -0.0001. Give a value of the limit of the slope.  Use the calculator estimate to estimate the slope of the tangent.  Compare the value of the derivative with the corresponding value of the marginal function .    Comment: For problems 1-10 it makes sense to set up the table once with parameters that can be easily changed between problems.       Excel Commands  Excel Output   Change ( delx ) and -value given depending on the problem, and adjust the function and the rest will autofill. Once the graph has been added that will update as well.    Use at .      Using Slope= (B14-B4)\/(10*B1) we get the following   So the slope for this choice of delx is 4.  Your may have chosen a slightly different , and as long as the graph looks roughly linear that would be fine.    You can either change delx and record each of the slopes in the Excel sheet above, or we can set up another table that records the slopes for us. We prefer the second method because the table of values allows us to inspect the pattern more easily.  Excel commands for the table:    The limit is 4.       So (second entry in the table for delx ).     . .       Use at .    Use at .       The slope of the secant line is 15.   From work in part a, the limit is also 15.  From Row 21 we see that the slope of the tangent line is estimated to be 15    . So the derivative is 15 and the marginal function is 20 at this point.       Use at .    Use at .       The slope of the secant line is 7.   From work in part a, the limit is also 7.  From Row 21 we see that the slope of the tangent line is estimated to be 7    . So the derivative is 7 and the marginal function is 7 at this point.       Use at .    Use at .       The slope of the secant line is 14.78.   From work in part a, the limit is also 14.78.  From Row 21 we see that the slope of the tangent line is estimated to be 14.78    . Comment: Notice the very large difference between the derivative and the marginal function. The exponential function is very curved and this curvature means that the discrepancy between the marginal function and the derivative will be large. The difference between the two is much smaller for graphs that are less curved.       Use at .    Use at .       The slope of the secant line is 0.2.   From work in part a, the limit is also 0.2.  From Row 21 we see that the slope of the tangent line is estimated to be 0.2    .       Use at .      For each specified function, do the following:  On a single graph, but using separate axes, graph the function and its derivative.  Using goal seek, identify places where the derivative is 0 in the interval .  For each point where the derivative is 0, tell whether the corresponding point on the graph of the function is locally a maximum, minimum, or neither.      Let .        The derivative seems to be zero at and at .  We have a local maximum at and a local minimum at .      Let .    Let .        The derivative seems to be 0 when and .  It seems that the graph has a minimum at . It seems that the graph has neither at .      Let .    Let .        It looks like the derivative is 0 at and at .  The first of those points is a local minimum. The second point is a local maximum.      Let .    Let .        The derivative is always 0 for this function.  All points are both local maximums and local minimums.      Let .      For each specified function, do the following:  On a single graph, but using separate axes, graph the function and its derivative.  Looking at the graph of the derivative, decide what kind of function is an appropriate model for the derivative.  Add a trendline to produce a formula for the derivative.      Let .        The derivative looks like a polynomial of order 2. It is a parabola.  The trendline indicates the formula for the derivative can be approximated by .       Let .    Let .        The derivative looks like an exponential function.  The trendline indicates the formula for the derivative can be approximated by .       Let .     "
},
{
  "id": "sec-3-2-NumericDerivativesLimits-5",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#sec-3-2-NumericDerivativesLimits-5",
  "type": "Definition",
  "number": "3.2.1",
  "title": "Formal derivative at a point.",
  "body": " Formal derivative at a point   For a function , the instantaneous rate of change of at , or the derivative of , at , denoted as , is defined as , where is understood to be value that gets arbitrarily close to by making arbitrarily close to .   "
},
{
  "id": "sec-3-2-NumericDerivativesLimits-6-1",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#sec-3-2-NumericDerivativesLimits-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Delta "
},
{
  "id": "SimpleDerivativeAtPoint",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#SimpleDerivativeAtPoint",
  "type": "Example",
  "number": "3.2.2",
  "title": "A simple derivative at a point.",
  "body": "A simple derivative at a point   Let . We would like to find .   Simple Derivative at a Point     Solution A - Intuitive Definition  We start with our intuitive notion. We want to look at the graph of , zoomed in far enough that the graph looks like a straight line. I set up a worksheet to look at the graph of near . Since I want to be able to zoom in, I set up the graph so that it plots points that are multiples of from . I also want to plot the line connecting the points and and notice that the slope of the line connecting these points, the secant line, is .  For this example . If , we can see that the function and the secant line are clearly distinct.      The worksheet is designed to make it easy to change the value of .      As we can see, if we let , the slope is 3, but we have not zoomed in far enough for the graph of to look like a straight line. Letting , the slope is 2.01, and the graphs of the function and secant line seem to be the same.      With some experimentation, taking both positive and negative values of , we get the following table of values:     slope    slope    1  3   -1  1    0.1  2.1   -0.1  1.9    0.01  2.01   -0.01  1.99    0.001  2.001   -0.001  1.999    It is clear that as gets very small, the slope of the secant line gets closer and closer to 2. Thus .   Solution B - Numerical Limit  The method of the first solution takes too much work and requires us to reset a worksheet and keep track of the slope as we try a number of values for . We would like to create a worksheet that simply shows the values of the slope of the secant line for values of and takes the value that this approaches. We can set up a worksheet where each line takes from the previous line and divides by 10.      We get the same value whether we start at 1 or -1. Once again, we find .    Solution C - Calculator Definition  This method of finding the derivative still has a number of difficulties. In the example above, the exact answer we want (in this case 2) did not show up in any of our computations. We also find that if we make too small, we run into a problem called round off error. If the next chapter we will look at methods that compute derivatives symbolically, but for this chapter we want an easy method of approximation. We will use the approximation technique that is used by most graphing calculators when they compute the derivative. They use a balanced difference quotient where we find the slope of the secant line between points before and after the point we are interested in. As the picture below shows, compared to either the right secant or the left secant, for most functions the balanced secant is closer to being parallel to the tangent line.   We will use the default on calculators, that is we will use .   For our example this gives our familiar result that .   "
},
{
  "id": "sec-3-2-NumericDerivativesLimits-10",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#sec-3-2-NumericDerivativesLimits-10",
  "type": "Definition",
  "number": "3.2.8",
  "title": "Calculator Approximation of the Derivative.",
  "body": "Calculator Approximation of the Derivative    .   "
},
{
  "id": "FunctionAndDerivativeVideo",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#FunctionAndDerivativeVideo",
  "type": "Figure",
  "number": "3.2.9",
  "title": "",
  "body": " Video Grophing a function and its derivative   "
},
{
  "id": "sec-3-2-NumericDerivativesLimits-14",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#sec-3-2-NumericDerivativesLimits-14",
  "type": "Example",
  "number": "3.2.10",
  "title": "A Function and its Derivative.",
  "body": "A Function and its Derivative   Compare the graph of and the graph of its derivative, using separate axes for the two graphs. What features of the graph of can be located by using the graph of ?    Since this problem will serve as a template for a question we will look at many times, it is worthwhile to look at it in detail. We start by setting up a workbook that will have the structure we need to compute a chart of values for and .      The picture above gives the minimal amount we need to type in. The rest will be done with quick filling. The entry of cell B1 gives the formula for the function. In cell D5 we evaluate the function using the first value of from cell A5 . We have two values of in cells A5 and A6 so that we can quick fill to get a list of values. We use absolute references for , so it will not change on quick fills. We then fill cells E5 and F5 from cell D5 , then fill row 6 from row 5, then fill the rest of the chart from rows 5 and 6.   It is then a straightforward task to plot the two curves. We notice that the graph of the function is a parabola. If the derivative is negative, the graph of is decreasing. If the derivative is positive, the graph of the function is increasing. The graph of reaches its minimum at the vertex, which is also where . We also notice that the derivative of this parabola seems to be a straight line.   "
},
{
  "id": "sec-3-2-NumericDerivativesLimits-17",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#sec-3-2-NumericDerivativesLimits-17",
  "type": "Example",
  "number": "3.2.12",
  "title": "The derivative of a more complicated function.",
  "body": "The derivative of a more complicated function   Compare the graph of and the graph of its derivative, using separate axes for the two graphs. What features of the graph of can be located by using the graph of ?    The setup for this example is very similar to the last problem.   Since the values of range between -500 and 1500, we note that is the blue graph and uses the axis in the center of the graph. Similarly the values of range between -500 and 2500, we note that is the red graph and uses the axis on the side of the graph.  This time we notice three places where the derivative seems to be zero, when is near , , and . We use goal seek on the derivative and find that the derivative is zero when , 0, or 4.648. Looking at the graph of f(x) at those points, we see that has a maximum when , and a minimum when . When , is neither a maximum nor a minimum.   "
},
{
  "id": "sec-3-2-NumericDerivativesLimits-19",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#sec-3-2-NumericDerivativesLimits-19",
  "type": "Example",
  "number": "3.2.13",
  "title": "Using trendlines to get the formula of a derivative.",
  "body": " Using trendlines to get the formula of a derivative    Video presentation of this example    Use trendlines to find a formula for the derivative of .    The setup for this example is very similar to the last problem. We simply change the function. This involves changing the formulas in cells B1 and D5 , then using quick copy to change the formulas for the cells in columns D through F.   Once we have points for the derivative, we add a trendline using a linear model. We set the options to show both the formula for the trendline and the value of . The fact that , indicates the trendline we found exactly fits the data. In the workbook connected to this section there is a page for Example 6B. It uses parameters for the coefficients on a quadratic formula, so that you can explore the derivative of a general quadratic function.   "
},
{
  "id": "Reading_Check_Sec3.2",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#Reading_Check_Sec3.2",
  "type": "Reading Question",
  "number": "3.2.1",
  "title": "Reading check, 3.2, Numeric Derivatives and Limits,.",
  "body": "Reading check, 3.2, Numeric Derivatives and Limits,   This question checks your reading comprehension of the material is section 3.2, Numeric Derivatives and Limits, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    The calculator definition of derivative approximates by .    If the derivative of is negative, the graph of the function , is increasing.    The calculator definition of the derivative gives a good approximation for all functions.).    If the derivative of is positive, the graph of the function , is increasing.    The calculator definition of derivative has problems with corners and cusps.    For a function , the derivative is defined as the limit as approaches 0 of .    None of the above             "
},
{
  "id": "exercises-set-sec-3-2-2-2",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-2",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": " Use at .      Using Slope= (B14-B4)\/(10*B1) we get the following   So the slope for this choice of delx is 4.  Your may have chosen a slightly different , and as long as the graph looks roughly linear that would be fine.    You can either change delx and record each of the slopes in the Excel sheet above, or we can set up another table that records the slopes for us. We prefer the second method because the table of values allows us to inspect the pattern more easily.  Excel commands for the table:    The limit is 4.       So (second entry in the table for delx ).     . .     "
},
{
  "id": "exercises-set-sec-3-2-2-3",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-3",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " Use at .  "
},
{
  "id": "exercises-set-sec-3-2-2-4",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-4",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": " Use at .       The slope of the secant line is 15.   From work in part a, the limit is also 15.  From Row 21 we see that the slope of the tangent line is estimated to be 15    . So the derivative is 15 and the marginal function is 20 at this point.     "
},
{
  "id": "exercises-set-sec-3-2-2-5",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-5",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": " Use at .  "
},
{
  "id": "exercises-set-sec-3-2-2-6",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-6",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": " Use at .       The slope of the secant line is 7.   From work in part a, the limit is also 7.  From Row 21 we see that the slope of the tangent line is estimated to be 7    . So the derivative is 7 and the marginal function is 7 at this point.     "
},
{
  "id": "exercises-set-sec-3-2-2-7",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-7",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": " Use at .  "
},
{
  "id": "exercises-set-sec-3-2-2-8",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-8",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": " Use at .       The slope of the secant line is 14.78.   From work in part a, the limit is also 14.78.  From Row 21 we see that the slope of the tangent line is estimated to be 14.78    . Comment: Notice the very large difference between the derivative and the marginal function. The exponential function is very curved and this curvature means that the discrepancy between the marginal function and the derivative will be large. The difference between the two is much smaller for graphs that are less curved.     "
},
{
  "id": "exercises-set-sec-3-2-2-9",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-9",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "",
  "body": " Use at .  "
},
{
  "id": "exercises-set-sec-3-2-2-10",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-10",
  "type": "Exercise",
  "number": "3.2.9",
  "title": "",
  "body": " Use at .       The slope of the secant line is 0.2.   From work in part a, the limit is also 0.2.  From Row 21 we see that the slope of the tangent line is estimated to be 0.2    .     "
},
{
  "id": "exercises-set-sec-3-2-2-11",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-2-11",
  "type": "Exercise",
  "number": "3.2.10",
  "title": "",
  "body": " Use at .  "
},
{
  "id": "exercises-set-sec-3-2-3-2",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-3-2",
  "type": "Exercise",
  "number": "3.2.11",
  "title": "",
  "body": " Let .        The derivative seems to be zero at and at .  We have a local maximum at and a local minimum at .    "
},
{
  "id": "exercises-set-sec-3-2-3-3",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-3-3",
  "type": "Exercise",
  "number": "3.2.12",
  "title": "",
  "body": " Let .  "
},
{
  "id": "exercises-set-sec-3-2-3-4",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-3-4",
  "type": "Exercise",
  "number": "3.2.13",
  "title": "",
  "body": " Let .        The derivative seems to be 0 when and .  It seems that the graph has a minimum at . It seems that the graph has neither at .    "
},
{
  "id": "exercises-set-sec-3-2-3-5",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-3-5",
  "type": "Exercise",
  "number": "3.2.14",
  "title": "",
  "body": " Let .  "
},
{
  "id": "exercises-set-sec-3-2-3-6",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-3-6",
  "type": "Exercise",
  "number": "3.2.15",
  "title": "",
  "body": " Let .        It looks like the derivative is 0 at and at .  The first of those points is a local minimum. The second point is a local maximum.    "
},
{
  "id": "exercises-set-sec-3-2-3-7",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-3-7",
  "type": "Exercise",
  "number": "3.2.16",
  "title": "",
  "body": " Let .  "
},
{
  "id": "exercises-set-sec-3-2-3-8",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-3-8",
  "type": "Exercise",
  "number": "3.2.17",
  "title": "",
  "body": " Let .        The derivative is always 0 for this function.  All points are both local maximums and local minimums.    "
},
{
  "id": "exercises-set-sec-3-2-3-9",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-3-9",
  "type": "Exercise",
  "number": "3.2.18",
  "title": "",
  "body": " Let .  "
},
{
  "id": "exercises-set-sec-3-2-4-2",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-4-2",
  "type": "Exercise",
  "number": "3.2.19",
  "title": "",
  "body": " Let .        The derivative looks like a polynomial of order 2. It is a parabola.  The trendline indicates the formula for the derivative can be approximated by .     "
},
{
  "id": "exercises-set-sec-3-2-4-3",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-4-3",
  "type": "Exercise",
  "number": "3.2.20",
  "title": "",
  "body": " Let .  "
},
{
  "id": "exercises-set-sec-3-2-4-4",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-4-4",
  "type": "Exercise",
  "number": "3.2.21",
  "title": "",
  "body": " Let .        The derivative looks like an exponential function.  The trendline indicates the formula for the derivative can be approximated by .     "
},
{
  "id": "exercises-set-sec-3-2-4-5",
  "level": "2",
  "url": "sec-3-2-NumericDerivativesLimits.html#exercises-set-sec-3-2-4-5",
  "type": "Exercise",
  "number": "3.2.22",
  "title": "",
  "body": " Let .  "
},
{
  "id": "sec-3-3-LocalLinearity",
  "level": "1",
  "url": "sec-3-3-LocalLinearity.html",
  "type": "Section",
  "number": "3.3",
  "title": "Local Linearity",
  "body": " Local Linearity  Link to worksheets used in this section  The last two sections examined rate of change in both the discrete and continuous case. The first application for rate of change at a point is to make projections for values of the function close to that point. We want to find the equation of a linear function that can be used to approximate our function. This is straightforward using the point-slope version of a linear equation.  For the discrete case, given a function , where we know value of, , the marginal change in to get to , then our discrete linear approximation has the form:   Note the use of to denote the marginal change in . This notation will be used throughout this section. We will use for the linear function that intersects at and .     .    In the differentiable case, given a function , where we know value of, , the derivative of at , then our linear approximation has the form:    .    The two formulas are almost the same. The discrete case uses the slope of a secant line obtained by looking at points where the x values differ by 1. In the differentiable case we look at the slope of the tangent line. One of the reasons for looking at the linear approximation of a function is that linear functions are easy to evaluate.  Estimating profit   The profit from selling 10,000 gizmos is $487,253. We also know that marginal profit(10001)=$45. Estimate the profit from selling 10,013 gizmos.    We use the formula from above: .  Filling in the values from the problem yields: .  Thus we estimate the profit from selling 10013 gizmos to be $487,838.     Estimating square roots    Video on linear aproximation of square roots    Use information about near to estimate the square roots of 96 through 104. Check the accuracy of your approximations.    We first use Excel to find the value of the function and its derivative at 100. For the derivative we use the calculator approximation.    Thus, the linear approximation is .  We can set up the worksheet to compute the approximation and to give us the error, both as a number and as a percentage of the correct answer.    It is then straightforward to compute values and check accuracy. On the given domain, the linear approximation has an error under 0.03%.     Estimating reciprocals    Video presentation of this example    Use information about near to estimate the reciprocals of the integers from of 396 through 404. Check the accuracy of your approximations.    Once again, we use Excel to find the value of the function and its derivative at 400. For the derivative we use the calculator approximation.   Thus the linear approximation is .   It is then straightforward to compute values and check accuracy. On the given domain, the linear approximation has an error under 0.01%.     Estimating exponential functions    Video presentation of this example    For approximating interest with continual compounding it is useful to have a linear approximation of when is close to 0. Use information about near to estimate the exponential function for numbers near 0. Check the accuracy of your approximations and give a domain where the approximation is good enough to use.    Once again, we use Excel to find the value of the function and its derivative at 0. For the derivative we use the calculator approximation.   Thus the linear approximation is .  This is much easier to compute than the exponential function. However, when we check accuracy, we find that it is not very accurate for other integer values.   That brings us back to the last part of the question, which asks for a domain where the approximation is good enough to use. The phrase good enough to use will depend on the setting, but we will be happy with an estimate that is within 1%. Since we are going to use this for interest rates, we are interested in positive rates.  We modify the worksheet to allow a step size, , to be used. Then we experiment with step sized till we get a domain where the error is under 1%.   We see that for . This gives us an approximation we can use for rates of up to 15%.    The last example illustrates that linear approximations should only be used for a limited domain. The size of the domain where the linear approximation is good enough will depend on the definition of good enough or the acceptable error in our approximation. The good domain will also depend on how far the graph is from linear, or how fast it is bending.   Reading Check  Reading check, Local Linearitys   This question checks your reading comprehension of the material is section 3.3, Local Linearity, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In the differentiable case, the the linear approximation is the tangent line.    In the discrete case, the linear approximation is a secant line.    For a function , the discrete linear approximation of at is where is the marginal change of form to .    In the discrete case we look at the the linear approximation is the tangent line.    Linear approximations can always be used for values within 5 of the base point.    For a function , the linear approximation of at is where is the derivative of at .    One of the reasons for looking at the linear approximation of a function is that linear functions are easy to evaluate.    None of the above                Exercises: Local Linearity    For , for the given function and value for :  Give the formula for the discrete linear approximation.  Evaluate the approximation at .       , , , and .    .  Next we evaluate the linear approximation at 15: .     , , , and .     , , , , and .    .  Note that we have to compute . .  Next we evaluate the linear approximation at 28: .     , , , , and .     , , , , and .    .  Note that we have to compute  .  Next we evaluate the linear approximation at 112: .      For , for the given function and value for :  Calculate the numeric approximation of the derivative at .  Give the formula for the linear approximation at that point.  Evaluate the approximation at .  Evaluate the function at and compute the accuracy of the approximation.       , , and .     , and .      .  Note that and .     .    Hence at we get .    If we compute , we see that the approximation is fairly good.  The error is .        , and .     , and .       .  Note that and .     .    Hence at we get .    If we compute , we see that the approximation is fairly good.  The error is .        , and .     Let and .    Find the linear approximation of at for and .  Give a rule for the linear approximation for a general value of r.  How accurate is the linear approximation for square and cube roots of 1.1, obtained at ?         The linear approximation of at is . For all values of we have . As the table shows when and 2, we have      As the table shows, the error for using these approximations for the square root and cube root of 1.1 is approximately 0.001.       "
},
{
  "id": "sec-3-3-LocalLinearity-12",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#sec-3-3-LocalLinearity-12",
  "type": "Example",
  "number": "3.3.1",
  "title": "Estimating profit.",
  "body": "Estimating profit   The profit from selling 10,000 gizmos is $487,253. We also know that marginal profit(10001)=$45. Estimate the profit from selling 10,013 gizmos.    We use the formula from above: .  Filling in the values from the problem yields: .  Thus we estimate the profit from selling 10013 gizmos to be $487,838.   "
},
{
  "id": "sec-3-3-LocalLinearity-13",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#sec-3-3-LocalLinearity-13",
  "type": "Example",
  "number": "3.3.2",
  "title": "Estimating square roots.",
  "body": " Estimating square roots    Video on linear aproximation of square roots    Use information about near to estimate the square roots of 96 through 104. Check the accuracy of your approximations.    We first use Excel to find the value of the function and its derivative at 100. For the derivative we use the calculator approximation.    Thus, the linear approximation is .  We can set up the worksheet to compute the approximation and to give us the error, both as a number and as a percentage of the correct answer.    It is then straightforward to compute values and check accuracy. On the given domain, the linear approximation has an error under 0.03%.   "
},
{
  "id": "sec-3-3-LocalLinearity-14",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#sec-3-3-LocalLinearity-14",
  "type": "Example",
  "number": "3.3.4",
  "title": "Estimating reciprocals.",
  "body": " Estimating reciprocals    Video presentation of this example    Use information about near to estimate the reciprocals of the integers from of 396 through 404. Check the accuracy of your approximations.    Once again, we use Excel to find the value of the function and its derivative at 400. For the derivative we use the calculator approximation.   Thus the linear approximation is .   It is then straightforward to compute values and check accuracy. On the given domain, the linear approximation has an error under 0.01%.   "
},
{
  "id": "sec-3-3-LocalLinearity-15",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#sec-3-3-LocalLinearity-15",
  "type": "Example",
  "number": "3.3.6",
  "title": "Estimating exponential functions.",
  "body": " Estimating exponential functions    Video presentation of this example    For approximating interest with continual compounding it is useful to have a linear approximation of when is close to 0. Use information about near to estimate the exponential function for numbers near 0. Check the accuracy of your approximations and give a domain where the approximation is good enough to use.    Once again, we use Excel to find the value of the function and its derivative at 0. For the derivative we use the calculator approximation.   Thus the linear approximation is .  This is much easier to compute than the exponential function. However, when we check accuracy, we find that it is not very accurate for other integer values.   That brings us back to the last part of the question, which asks for a domain where the approximation is good enough to use. The phrase good enough to use will depend on the setting, but we will be happy with an estimate that is within 1%. Since we are going to use this for interest rates, we are interested in positive rates.  We modify the worksheet to allow a step size, , to be used. Then we experiment with step sized till we get a domain where the error is under 1%.   We see that for . This gives us an approximation we can use for rates of up to 15%.   "
},
{
  "id": "Reading_Check_Sec3.3",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#Reading_Check_Sec3.3",
  "type": "Reading Question",
  "number": "3.3.1",
  "title": "Reading check, Local Linearitys.",
  "body": "Reading check, Local Linearitys   This question checks your reading comprehension of the material is section 3.3, Local Linearity, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In the differentiable case, the the linear approximation is the tangent line.    In the discrete case, the linear approximation is a secant line.    For a function , the discrete linear approximation of at is where is the marginal change of form to .    In the discrete case we look at the the linear approximation is the tangent line.    Linear approximations can always be used for values within 5 of the base point.    For a function , the linear approximation of at is where is the derivative of at .    One of the reasons for looking at the linear approximation of a function is that linear functions are easy to evaluate.    None of the above             "
},
{
  "id": "ex-loclin-first",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#ex-loclin-first",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "  , , , and .    .  Next we evaluate the linear approximation at 15: .  "
},
{
  "id": "exercises-set-sec-3-3-2-3",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#exercises-set-sec-3-3-2-3",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "  , , , and .  "
},
{
  "id": "exercises-set-sec-3-3-2-4",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#exercises-set-sec-3-3-2-4",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": "  , , , , and .    .  Note that we have to compute . .  Next we evaluate the linear approximation at 28: .  "
},
{
  "id": "exercises-set-sec-3-3-2-5",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#exercises-set-sec-3-3-2-5",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "  , , , , and .  "
},
{
  "id": "ex-loclin-last",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#ex-loclin-last",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "  , , , , and .    .  Note that we have to compute  .  Next we evaluate the linear approximation at 112: .  "
},
{
  "id": "ex-numapp-first",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#ex-numapp-first",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "  , , and .  "
},
{
  "id": "exercises-set-sec-3-3-3-3",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#exercises-set-sec-3-3-3-3",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "  , and .      .  Note that and .     .    Hence at we get .    If we compute , we see that the approximation is fairly good.  The error is .     "
},
{
  "id": "exercises-set-sec-3-3-3-4",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#exercises-set-sec-3-3-3-4",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": "  , and .  "
},
{
  "id": "exercises-set-sec-3-3-3-5",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#exercises-set-sec-3-3-3-5",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "",
  "body": "  , and .       .  Note that and .     .    Hence at we get .    If we compute , we see that the approximation is fairly good.  The error is .     "
},
{
  "id": "ex-numapp-last",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#ex-numapp-last",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": "  , and .  "
},
{
  "id": "exercises-set-sec-3-3-4",
  "level": "2",
  "url": "sec-3-3-LocalLinearity.html#exercises-set-sec-3-3-4",
  "type": "Exercise",
  "number": "3.3.11",
  "title": "",
  "body": " Let and .    Find the linear approximation of at for and .  Give a rule for the linear approximation for a general value of r.  How accurate is the linear approximation for square and cube roots of 1.1, obtained at ?         The linear approximation of at is . For all values of we have . As the table shows when and 2, we have      As the table shows, the error for using these approximations for the square root and cube root of 1.1 is approximately 0.001.     "
},
{
  "id": "sec-3-4-Optimization",
  "level": "1",
  "url": "sec-3-4-Optimization.html",
  "type": "Section",
  "number": "3.4",
  "title": "Optimization",
  "body": " Optimization  Link to worksheets used in this section  In Section 3.2 we noticed that the high and low points of the graph of a function often coincided with a point where the derivative of the function was 0. In a business setting, we are often concerned with finding the maximum and minimum values of a function, because one or the other will be a best, or optimum value. We typically want to maximize functions like profit, utility, revenue, and market share. We typically want to minimize functions like cost and liability. We will use the same basic process to optimize, whether the extremum we are finding is a maximum and minimum.  Recall, we said that the derivative can be thought of as the slope of the apparent line, obtained by zooming in on the graph of a function. Clearly, we cannot have an extremum at an interior point of the domain if the derivative is nonzero, because we could go either higher or lower by moving a little to the right or left. Thus we can only have extrema at a critical point, a place when the derivative is zero or undefined, or at an endpoint where we cannot go both left and right. This gives us a small list of candidate points for the optimum value.  Our process for optimization will be to find all the candidate points, then to see which gives the highest and lowest values. When our curve has a point that is a maximum or minimum in some interval around the point, we call it a relative maximum or minimum. If it is the highest or lowest point for the whole domain of the function it is called a global maximum or minimum.   Profit function for widgets    Video presentation of this example    We have determined that the profit function for selling widgets is , with the function valid on the interval . Find the minimum and maximum profit in the given interval.    Solution A: without calculus  The first example was chosen because it can be done without using any calculus, so we solve it with easier methods first. The profit function is a quadratic function in quantity, so it is a downward pointing parabola. The location of the vertex is at , which we obtain from the coefficients of the quadratic and linear terms. Thus we need to check this point and the two endpoints. Plugging in values, we get , and . The maximum occurs when we sell 200 widgets and our profit is $35,000, the minimum occurs when we sell 500 widgets and our loss is $55,000. A relative minimum occurs when we sell 0 widgets and our loss is $5,000.    Solution B: with calculus  We want to set up the problem to be able to graph the profit function and its derivative on the same graph. We will us the calculator approximation of the derivative. As we did in the last section, we set up a worksheet with columns for , , , , , , and . This allows most of the worksheet to be filled in with quick fill.   We then look at the values, and compare the table to a graph. We find the same three candidate points and the same maximum and minimum values.     For a second example we want to look at a function where we can’t find the maximum by algebraic means.   Cumquat oil    Video presentation of this example    We have determined that the profit function for selling cumquat oil is .  We understand that the function is valid on the interval , where the quantity is measured in thousands of pints and profit is measured in thousands of dollars. Find the minimum and maximum profit in the given interval.    The spreadsheet is set up like it was in the first example, but with the function changed.   Looking at the graph and the chart we expect to find local minima at the endpoints, and the maximum when is close to 50. We use goal seek to find where the derivative is zero. As we see below, Goal Seek does not find a point where the derivative is zero. Instead it finds a point where the derivative is close enough to zero. By default, close enough is understood by Excel as being within 0.001.   If the default definition of close enough is good enough for our purposes, then the maximum profit of $166,727 occurs when we sell 51,998 pints of oil. (In fact, selling 2 more pints of oil will yield an extra 0.01 cents.) The minimum profit occurs when we sell no product, in which case we have a loss of $30,000.    One of the things to notice about the last example is the robustness of the method. From an algebraic point of view, the function was rather ugly. All we needed to know to use the method was that the function was smooth enough, that when we zoomed in to a scale of changing by 0.001 the graph looked like a straight line.  Throughout the section we have looked for places where the derivative is zero when looking for extrema. We have not paid any attention to how we decide if the point we find is a local maximum or a local minimum. There are several approaches we could use. Since we are computing the derivative we could note that a local maximum is a place where the function goes from increasing to decreasing, so the derivative goes from positive to negative. (Similarly, a local minimum is at a place where the derivative goes from positive to negative.) There is also a test that looks at the derivative of the derivative. Those tests will be more useful in the next chapter when we are finding a formula for the derivative by symbolic means. However, with the numeric technique we are using, the easiest test is that a local maximum is greater than or equal to points a little bit to both the left and right. We simply plug in points a little bit to each side to test. Since a change in of 0.001 makes the graph look like a flat straight line, we change by 0.01.   As expected, profit goes down as we move away from our expected maximum.   Gizmo profit    Video presentation of this example>    A plant can produce between 150 and 300 gizmos. The profit function for the plant is: .  Find the production level that maximizes profit.    We set up the problem as before, using goal seek on the derivative to find critical points, and checking the ends of the interval.   We have three candidates for the extrema, the two endpoints and the critical point at 162.5. However, by looking at the points to the side of the critical point, we see it is a local minimum. We also see, that of our 3 candidate points, the one that gives the maximum profit is the right endpoint, when quantity is 300.  For our first three examples we have been trying to find the minimum or maximum of one-variable functions. Sometimes we need to do a bit of work to get the function in that format.     Minimizing material costs    Video presentation of this example    I am manufacturing goop, a liquid that needs to be put in cans. We will use cans that have a standard cylindrical shape. Find the height and radius of a 1 liter can that uses a minimal amount of metal surface.     Using basic geometry we recall the formulas for the volume and surface area of a cylinder. .  Since I am measuring volume in liters, I want to measure radius and height in decimeters so the units work correctly. In order to optimize, we need to reduce the problem to a single function of a single variable. We are told that the volume is 1, so we can solve for height as a function of radius, then plug it into the equation for area. Then, area is a function of a single variable, radius, and we can find the critical points and check for a minimum.   .  Since we now have area as a function of the single variable radius we can take a derivative to find the critical point, then find the optimal shape.   Solving for where the derivative of area is zero, we find the radius of the can should be 0.5419 deciliters. We plug that value back into the formula for height in terms of radius and see that the height should be 1.083854 deciliters. To understand the shape of the can we see that the height is twice the radius, or the same thing as the diameter of the can. The can is optimally shaped when it is the shape of a large paint can.    There are three technical details worth mentioning from the last example. First, in Excel, the best way to put in a formula is with the constant PI() . Second, the function for area is defined on an open interval where the radius is positive. There is no maximum area for a can of fixed volume. (However inefficient our can is, we can always make it worse, by moving farther from the optimum.) Third, one should also note that for this problem, we wanted several numbers as part of our answer. The worksheet for the problem puts the best height and radius at the top, where the reader can easily find it.  In this last example we had to reduce two equations in two unknowns to a single equation in one unknown to be able to optimize. We may also need to produce an equation from data.   Maximized profits and break-even points    Video presentation of this example    For widget production and sales, we have the following data on profit based on sales.    Quantity  10  100  200  250  300  400    Profit  -$2,083  $31,040  $48,587  $49,845  $46,146  $23,670    Find the break even points and the quantity that maximizes profit.    From looking at a quick plot of the data, I am going to assume that the profit function is a downward facing parabola, so I find the best fitting quadratic polynomial for the data. Using trendlines, my profit function is .   I now set up the table for special values with goal seek. I use starting points of 20 and 450 for the break even points and 250 for the maximum. To find break even points, I goal seek on the profit function. To find the maximum point, I goal seek on the derivative of the profit function.   Rounding to the nearest whole number in each case, my break even points are for selling 15 and 460 widgets. My maximum profit of $50,032 occurs when I sell 238 widgets.     Minimizing expenses    Video presentation of this example    We are running a business and want to minimize equipment expenses. For a particular piece of equipment the costs can be broken into initial outlays to buy the equipment, fixed annual expenses to keep the equipment in the inventory, and repair costs which we anticipate rising as the equipment gets older. A widget press costs $10,000 to buy, and the operating expenses are $500 a year, and the total repair costs are over the first years. What is the optimal length of time to use a widget press before replacing it?    My annual cost equation is total cost divided by . This annual cost is: .  I create a spreadsheet that calculates the cost and its derivative over the first 10 years.   Looking at the data, the minimal annual cost is obtained by keeping the press between 5.5 and 6.0 years. Using Goal seek on the derivative, I find the minimal annual cost of $3,964.10 is obtained by keeping the press for 5.77 years.     Reading Check  Reading check, Optimization   This question checks your reading comprehension of the material is section 3.4, Optimization, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    When a curve has a point that is a maximum or minimum for the whole domain, we call it an absolute maximum or minimum.    We cannot have an extremum at an interior point of the domain if the derivative is nonzero.    When a curve has a point that is a maximum or minimum in some interval around the point, we call it a relative maximum or minimum.    We can only have extrema at a critical point, a place when the derivative is zero or undefined, or at an endpoint.    At points where the derivative is zero we must have a relative maximum or minimum.    Every function must have an absolute maximum.    The process for optimization is to find all the candidate points, then to see which gives the highest and lowest values.    In a business setting, we are often concerned with finding the maximum and minimum values of a function, because one or the other will be a best, or optimum value.    None of the above                Exercises: Optimization    For the given function and domain:  Plot the function and its derivative on the same graph.  Identify the regions where the function is increasing and the regions where the function is decreasing.  Identify the local maximum and minimum for the given domain.  Identify the global maximum and minimum for the given domain       on the interval .   Setting up these problems in Excel follows the same process.  We create columns for ,and   Once you enter , doing a right quick fill easily finds and , and then is easy to compute.    Once you graph and , it is usually a good idea to graph the derivative using the secondary axis: double click on the derivative function and choose the appropriate button in the dialogue box.         The table is truncated at , but the rest was used to create the graph.    We can do a Goalseek to find the critical point: set .  In this example when  The function is increasing for .  The function is decreasing for    The function has a local max at and the maximum value is  The only local minimums are the endpoints, and .    To find the global maximum and minimum we check the endpoints and the critical points      status    0  23     4.25  59.13  maximum    50  -4127  minimum    The global minimum value is at  The global maximum value is at        on the interval .     on the interval .         The place where is at .  The function is decreasing for .  The function is increasing for .    The function has a local minimum at .  The function has a local maximums at and .    To find the global maximum and minimum we check the endpoints and the critical points.      status    0  12     1.73  1.61  minimum    10  922  maximum    The global minimum value is at  The global maximum value is at        on the interval .     on the interval .         The derivative is never zero  The function is always increasing for    The function has a local minimum at and a local maximum at .    The global minimum value is at the left endpoint  The global maximum value is at the right endpoint        on the interval .     on the interval .         The place where is at  The function is increasing for .  The function is decreasing for    The function has a local max at and the maximum value is  The function has a local minimum at and .    To find the global maximum and minimum we check the endpoints and the critical points      status    0  -3  minimum    52.95  17.32  maximum    100  13.13     The global minimum value is at  The global maximum value is at        on the interval .     on the interval .         The place where is at  The function is decreasing for .  The function is increasing for    The function has a local min at and the minimum value is  The function has a local maximums at and .    To find the global maximum and minimum we check the endpoints and the critical points      status    1  105     4.47  44.73  minimum    50  252  maximum    The global minimum value is at  The global maximum value is at        on the interval .     The demand price for widgets is given by . The fixed costs are $7,500 and the variable costs are $10 per widget.    Give a profit function for widgets. Specify the domain on which the function makes sense.  Identify the candidate points for maximizing profit.  Give the quantity that maximizes profit along with the maximum profit.     Preliminary work: find the formulas for price (given) and cost (described). .      .  One assumption that makes sense is that the price should be positive.     We find profit and the derivative of the profit function to determine where the derivative is 0. Below is the graph of and we did GoalSeek to find the critical point (x=290). We should also consider endpoints, but the vertex is clearly above 0.    The profit is maximized at 290 and the maximum profit is $34,550      The cost equation for gizmos is and the demand function is . Find the maximum profit.    The cost equation for gadgets is and the demand function is . Find the maximum profit.    .  Assuming that the price should be a positive number does not help us in this problem. We can check, but all we get is that , but should be positive.  If domain restrictions are not obvious or the algebra is challenging we can resort to trial and error. The small coefficients (.0001 for instance) do suggest we have fairly large values for .   Using , we see that there is a maximum near . Goal Seek shows that the critical point is at gadgets. The maximum profit is $6336.    The cost equation for gizmos is and the demand function is . Find the maximum profit.    Suppose the cost function for your operation is . Find the quantity that minimizes price.   The function is interesting in that the minimum cost is not easily see on the graph.   The function is graphed for in steps of 10. The cost function almost looks as though it is leveling out and reaching an asymptote. An inspection of the table shows that this is not true. The derivative goes from negative to positive right around 130. GoalSeek shows that the derivative is zero at approximately 131.42. The recorded Cost is $12,728.40, which is the minimal cost for this function.    Suppose your cost function is . Find the quantity that minimizes price.    With rental property, a simplified model of costs spreads the purchase cost over the time that the property is held and assume that repair costs will rise the longer the property is held. This gives a formula for annual expenses as , where is a positive number that depends on the type of property. Assume for carpet cleaners that the replacement cost is $600, that the repair costs in the first year are $50, and . Find the length of time the property should be held to minimize the annual expense.   In this instance the Annual Expense function is . Note that the function is not defined when . So we will graph the function and the derivative for . The property should be held for 3.5 years.     With rental property, a better model factors in the depreciation of the property and how much can be recovered by selling the property used. If we use a 5 year straight line depreciation the formula becomes . Repeat the assumptions from the problem above. Assume for carpet cleaners that the replacement cost is $600, that the repair costs in the first year are $50, and . Find the length of time the property should be held to minimize the annual expense.    The annual sales rate for a new toy is found to be . Find the month that maximizes sales.   If we are minimizing according to month, we will graph the function for .   GoalSeek does not improve our estimate, and we see that the maximum sales must occur when . The derivative is (close to) 0 there and this means our sales are maximized in April (assuming 1 represents January).    Consider the following sales data for your business.    Production level  1903  2424  3065  3424  4076   Profit  $828,560.10  $942,625.40  $1,006,167.50  $987,980.40  $929,780.40     Plot the data and find a reasonable best fitting curve for the data.  Find the production level that maximizes profit.  Find the maximum profit.      "
},
{
  "id": "sec-3-4-Optimization-5",
  "level": "2",
  "url": "sec-3-4-Optimization.html#sec-3-4-Optimization-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative global "
},
{
  "id": "sec-3-4-Optimization-6",
  "level": "2",
  "url": "sec-3-4-Optimization.html#sec-3-4-Optimization-6",
  "type": "Example",
  "number": "3.4.1",
  "title": "Profit function for widgets.",
  "body": " Profit function for widgets    Video presentation of this example    We have determined that the profit function for selling widgets is , with the function valid on the interval . Find the minimum and maximum profit in the given interval.    Solution A: without calculus  The first example was chosen because it can be done without using any calculus, so we solve it with easier methods first. The profit function is a quadratic function in quantity, so it is a downward pointing parabola. The location of the vertex is at , which we obtain from the coefficients of the quadratic and linear terms. Thus we need to check this point and the two endpoints. Plugging in values, we get , and . The maximum occurs when we sell 200 widgets and our profit is $35,000, the minimum occurs when we sell 500 widgets and our loss is $55,000. A relative minimum occurs when we sell 0 widgets and our loss is $5,000.    Solution B: with calculus  We want to set up the problem to be able to graph the profit function and its derivative on the same graph. We will us the calculator approximation of the derivative. As we did in the last section, we set up a worksheet with columns for , , , , , , and . This allows most of the worksheet to be filled in with quick fill.   We then look at the values, and compare the table to a graph. We find the same three candidate points and the same maximum and minimum values.    "
},
{
  "id": "sec-3-4-Optimization-8",
  "level": "2",
  "url": "sec-3-4-Optimization.html#sec-3-4-Optimization-8",
  "type": "Example",
  "number": "3.4.3",
  "title": "Cumquat oil.",
  "body": " Cumquat oil    Video presentation of this example    We have determined that the profit function for selling cumquat oil is .  We understand that the function is valid on the interval , where the quantity is measured in thousands of pints and profit is measured in thousands of dollars. Find the minimum and maximum profit in the given interval.    The spreadsheet is set up like it was in the first example, but with the function changed.   Looking at the graph and the chart we expect to find local minima at the endpoints, and the maximum when is close to 50. We use goal seek to find where the derivative is zero. As we see below, Goal Seek does not find a point where the derivative is zero. Instead it finds a point where the derivative is close enough to zero. By default, close enough is understood by Excel as being within 0.001.   If the default definition of close enough is good enough for our purposes, then the maximum profit of $166,727 occurs when we sell 51,998 pints of oil. (In fact, selling 2 more pints of oil will yield an extra 0.01 cents.) The minimum profit occurs when we sell no product, in which case we have a loss of $30,000.   "
},
{
  "id": "sec-3-4-Optimization-13",
  "level": "2",
  "url": "sec-3-4-Optimization.html#sec-3-4-Optimization-13",
  "type": "Example",
  "number": "3.4.5",
  "title": "Gizmo profit.",
  "body": " Gizmo profit    Video presentation of this example>    A plant can produce between 150 and 300 gizmos. The profit function for the plant is: .  Find the production level that maximizes profit.    We set up the problem as before, using goal seek on the derivative to find critical points, and checking the ends of the interval.   We have three candidates for the extrema, the two endpoints and the critical point at 162.5. However, by looking at the points to the side of the critical point, we see it is a local minimum. We also see, that of our 3 candidate points, the one that gives the maximum profit is the right endpoint, when quantity is 300.  For our first three examples we have been trying to find the minimum or maximum of one-variable functions. Sometimes we need to do a bit of work to get the function in that format.   "
},
{
  "id": "sec-3-4-Optimization-14",
  "level": "2",
  "url": "sec-3-4-Optimization.html#sec-3-4-Optimization-14",
  "type": "Example",
  "number": "3.4.7",
  "title": "Minimizing material costs.",
  "body": " Minimizing material costs    Video presentation of this example    I am manufacturing goop, a liquid that needs to be put in cans. We will use cans that have a standard cylindrical shape. Find the height and radius of a 1 liter can that uses a minimal amount of metal surface.     Using basic geometry we recall the formulas for the volume and surface area of a cylinder. .  Since I am measuring volume in liters, I want to measure radius and height in decimeters so the units work correctly. In order to optimize, we need to reduce the problem to a single function of a single variable. We are told that the volume is 1, so we can solve for height as a function of radius, then plug it into the equation for area. Then, area is a function of a single variable, radius, and we can find the critical points and check for a minimum.   .  Since we now have area as a function of the single variable radius we can take a derivative to find the critical point, then find the optimal shape.   Solving for where the derivative of area is zero, we find the radius of the can should be 0.5419 deciliters. We plug that value back into the formula for height in terms of radius and see that the height should be 1.083854 deciliters. To understand the shape of the can we see that the height is twice the radius, or the same thing as the diameter of the can. The can is optimally shaped when it is the shape of a large paint can.   "
},
{
  "id": "sec-3-4-Optimization-17",
  "level": "2",
  "url": "sec-3-4-Optimization.html#sec-3-4-Optimization-17",
  "type": "Example",
  "number": "3.4.9",
  "title": "Maximized profits and break-even points.",
  "body": " Maximized profits and break-even points    Video presentation of this example    For widget production and sales, we have the following data on profit based on sales.    Quantity  10  100  200  250  300  400    Profit  -$2,083  $31,040  $48,587  $49,845  $46,146  $23,670    Find the break even points and the quantity that maximizes profit.    From looking at a quick plot of the data, I am going to assume that the profit function is a downward facing parabola, so I find the best fitting quadratic polynomial for the data. Using trendlines, my profit function is .   I now set up the table for special values with goal seek. I use starting points of 20 and 450 for the break even points and 250 for the maximum. To find break even points, I goal seek on the profit function. To find the maximum point, I goal seek on the derivative of the profit function.   Rounding to the nearest whole number in each case, my break even points are for selling 15 and 460 widgets. My maximum profit of $50,032 occurs when I sell 238 widgets.   "
},
{
  "id": "sec-3-4-Optimization-18",
  "level": "2",
  "url": "sec-3-4-Optimization.html#sec-3-4-Optimization-18",
  "type": "Example",
  "number": "3.4.11",
  "title": "Minimizing expenses.",
  "body": " Minimizing expenses    Video presentation of this example    We are running a business and want to minimize equipment expenses. For a particular piece of equipment the costs can be broken into initial outlays to buy the equipment, fixed annual expenses to keep the equipment in the inventory, and repair costs which we anticipate rising as the equipment gets older. A widget press costs $10,000 to buy, and the operating expenses are $500 a year, and the total repair costs are over the first years. What is the optimal length of time to use a widget press before replacing it?    My annual cost equation is total cost divided by . This annual cost is: .  I create a spreadsheet that calculates the cost and its derivative over the first 10 years.   Looking at the data, the minimal annual cost is obtained by keeping the press between 5.5 and 6.0 years. Using Goal seek on the derivative, I find the minimal annual cost of $3,964.10 is obtained by keeping the press for 5.77 years.   "
},
{
  "id": "Reading_Check_Sec3.4",
  "level": "2",
  "url": "sec-3-4-Optimization.html#Reading_Check_Sec3.4",
  "type": "Reading Question",
  "number": "3.4.1",
  "title": "Reading check, Optimization.",
  "body": "Reading check, Optimization   This question checks your reading comprehension of the material is section 3.4, Optimization, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    When a curve has a point that is a maximum or minimum for the whole domain, we call it an absolute maximum or minimum.    We cannot have an extremum at an interior point of the domain if the derivative is nonzero.    When a curve has a point that is a maximum or minimum in some interval around the point, we call it a relative maximum or minimum.    We can only have extrema at a critical point, a place when the derivative is zero or undefined, or at an endpoint.    At points where the derivative is zero we must have a relative maximum or minimum.    Every function must have an absolute maximum.    The process for optimization is to find all the candidate points, then to see which gives the highest and lowest values.    In a business setting, we are often concerned with finding the maximum and minimum values of a function, because one or the other will be a best, or optimum value.    None of the above             "
},
{
  "id": "exercises-set-sec-3-4-2-2",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-2",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "  on the interval .   Setting up these problems in Excel follows the same process.  We create columns for ,and   Once you enter , doing a right quick fill easily finds and , and then is easy to compute.    Once you graph and , it is usually a good idea to graph the derivative using the secondary axis: double click on the derivative function and choose the appropriate button in the dialogue box.         The table is truncated at , but the rest was used to create the graph.    We can do a Goalseek to find the critical point: set .  In this example when  The function is increasing for .  The function is decreasing for    The function has a local max at and the maximum value is  The only local minimums are the endpoints, and .    To find the global maximum and minimum we check the endpoints and the critical points      status    0  23     4.25  59.13  maximum    50  -4127  minimum    The global minimum value is at  The global maximum value is at     "
},
{
  "id": "exercises-set-sec-3-4-2-3",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-3",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "  on the interval .  "
},
{
  "id": "exercises-set-sec-3-4-2-4",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-4",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": "  on the interval .         The place where is at .  The function is decreasing for .  The function is increasing for .    The function has a local minimum at .  The function has a local maximums at and .    To find the global maximum and minimum we check the endpoints and the critical points.      status    0  12     1.73  1.61  minimum    10  922  maximum    The global minimum value is at  The global maximum value is at     "
},
{
  "id": "exercises-set-sec-3-4-2-5",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-5",
  "type": "Exercise",
  "number": "3.4.4",
  "title": "",
  "body": "  on the interval .  "
},
{
  "id": "exercises-set-sec-3-4-2-6",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-6",
  "type": "Exercise",
  "number": "3.4.5",
  "title": "",
  "body": "  on the interval .         The derivative is never zero  The function is always increasing for    The function has a local minimum at and a local maximum at .    The global minimum value is at the left endpoint  The global maximum value is at the right endpoint     "
},
{
  "id": "exercises-set-sec-3-4-2-7",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-7",
  "type": "Exercise",
  "number": "3.4.6",
  "title": "",
  "body": "  on the interval .  "
},
{
  "id": "exercises-set-sec-3-4-2-8",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-8",
  "type": "Exercise",
  "number": "3.4.7",
  "title": "",
  "body": "  on the interval .         The place where is at  The function is increasing for .  The function is decreasing for    The function has a local max at and the maximum value is  The function has a local minimum at and .    To find the global maximum and minimum we check the endpoints and the critical points      status    0  -3  minimum    52.95  17.32  maximum    100  13.13     The global minimum value is at  The global maximum value is at     "
},
{
  "id": "exercises-set-sec-3-4-2-9",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-9",
  "type": "Exercise",
  "number": "3.4.8",
  "title": "",
  "body": "  on the interval .  "
},
{
  "id": "exercises-set-sec-3-4-2-10",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-10",
  "type": "Exercise",
  "number": "3.4.9",
  "title": "",
  "body": "  on the interval .         The place where is at  The function is decreasing for .  The function is increasing for    The function has a local min at and the minimum value is  The function has a local maximums at and .    To find the global maximum and minimum we check the endpoints and the critical points      status    1  105     4.47  44.73  minimum    50  252  maximum    The global minimum value is at  The global maximum value is at     "
},
{
  "id": "exercises-set-sec-3-4-2-11",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-2-11",
  "type": "Exercise",
  "number": "3.4.10",
  "title": "",
  "body": "  on the interval .  "
},
{
  "id": "exercises-set-sec-3-4-3",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-3",
  "type": "Exercise",
  "number": "3.4.11",
  "title": "",
  "body": " The demand price for widgets is given by . The fixed costs are $7,500 and the variable costs are $10 per widget.    Give a profit function for widgets. Specify the domain on which the function makes sense.  Identify the candidate points for maximizing profit.  Give the quantity that maximizes profit along with the maximum profit.     Preliminary work: find the formulas for price (given) and cost (described). .      .  One assumption that makes sense is that the price should be positive.     We find profit and the derivative of the profit function to determine where the derivative is 0. Below is the graph of and we did GoalSeek to find the critical point (x=290). We should also consider endpoints, but the vertex is clearly above 0.    The profit is maximized at 290 and the maximum profit is $34,550    "
},
{
  "id": "exercises-set-sec-3-4-4",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-4",
  "type": "Exercise",
  "number": "3.4.12",
  "title": "",
  "body": " The cost equation for gizmos is and the demand function is . Find the maximum profit.  "
},
{
  "id": "exercises-set-sec-3-4-5",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-5",
  "type": "Exercise",
  "number": "3.4.13",
  "title": "",
  "body": " The cost equation for gadgets is and the demand function is . Find the maximum profit.    .  Assuming that the price should be a positive number does not help us in this problem. We can check, but all we get is that , but should be positive.  If domain restrictions are not obvious or the algebra is challenging we can resort to trial and error. The small coefficients (.0001 for instance) do suggest we have fairly large values for .   Using , we see that there is a maximum near . Goal Seek shows that the critical point is at gadgets. The maximum profit is $6336.  "
},
{
  "id": "exercises-set-sec-3-4-6",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-6",
  "type": "Exercise",
  "number": "3.4.14",
  "title": "",
  "body": " The cost equation for gizmos is and the demand function is . Find the maximum profit.  "
},
{
  "id": "exercises-set-sec-3-4-7",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-7",
  "type": "Exercise",
  "number": "3.4.15",
  "title": "",
  "body": " Suppose the cost function for your operation is . Find the quantity that minimizes price.   The function is interesting in that the minimum cost is not easily see on the graph.   The function is graphed for in steps of 10. The cost function almost looks as though it is leveling out and reaching an asymptote. An inspection of the table shows that this is not true. The derivative goes from negative to positive right around 130. GoalSeek shows that the derivative is zero at approximately 131.42. The recorded Cost is $12,728.40, which is the minimal cost for this function.  "
},
{
  "id": "exercises-set-sec-3-4-8",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-8",
  "type": "Exercise",
  "number": "3.4.16",
  "title": "",
  "body": " Suppose your cost function is . Find the quantity that minimizes price.  "
},
{
  "id": "exercises-set-sec-3-4-9",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-9",
  "type": "Exercise",
  "number": "3.4.17",
  "title": "",
  "body": " With rental property, a simplified model of costs spreads the purchase cost over the time that the property is held and assume that repair costs will rise the longer the property is held. This gives a formula for annual expenses as , where is a positive number that depends on the type of property. Assume for carpet cleaners that the replacement cost is $600, that the repair costs in the first year are $50, and . Find the length of time the property should be held to minimize the annual expense.   In this instance the Annual Expense function is . Note that the function is not defined when . So we will graph the function and the derivative for . The property should be held for 3.5 years.   "
},
{
  "id": "exercises-set-sec-3-4-10",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-10",
  "type": "Exercise",
  "number": "3.4.18",
  "title": "",
  "body": " With rental property, a better model factors in the depreciation of the property and how much can be recovered by selling the property used. If we use a 5 year straight line depreciation the formula becomes . Repeat the assumptions from the problem above. Assume for carpet cleaners that the replacement cost is $600, that the repair costs in the first year are $50, and . Find the length of time the property should be held to minimize the annual expense.  "
},
{
  "id": "exercises-set-sec-3-4-11",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-11",
  "type": "Exercise",
  "number": "3.4.19",
  "title": "",
  "body": " The annual sales rate for a new toy is found to be . Find the month that maximizes sales.   If we are minimizing according to month, we will graph the function for .   GoalSeek does not improve our estimate, and we see that the maximum sales must occur when . The derivative is (close to) 0 there and this means our sales are maximized in April (assuming 1 represents January).  "
},
{
  "id": "exercises-set-sec-3-4-12",
  "level": "2",
  "url": "sec-3-4-Optimization.html#exercises-set-sec-3-4-12",
  "type": "Exercise",
  "number": "3.4.20",
  "title": "",
  "body": " Consider the following sales data for your business.    Production level  1903  2424  3065  3424  4076   Profit  $828,560.10  $942,625.40  $1,006,167.50  $987,980.40  $929,780.40     Plot the data and find a reasonable best fitting curve for the data.  Find the production level that maximizes profit.  Find the maximum profit.    "
},
{
  "id": "sec-3-5-IntroductionSolver",
  "level": "1",
  "url": "sec-3-5-IntroductionSolver.html",
  "type": "Section",
  "number": "3.5",
  "title": "An Introduction to Solver",
  "body": " An Introduction to Solver  Link to worksheets used in this section  We should expect, whenever we look at an operation that is used a lot in the business world, that Excel will have a fairly simple command to achieve the result. In section 1.5, we introduced Goal Seek, a tool that is part of Excel, and that can be used to solve an equation for a root from a given starting point. In the last section, we noted that one can find candidates for a local maximum or minimum of a function by finding the derivative and using Goal Seek to find where the derivative is 0. In this section we introduce Solver, an Add-In to Excel. It is easiest to think of solver as a more powerful version of Goal Seek. It will be easiest to walk through the use of Solver while working an example.   Use Solver to gather information about the graph    Using Solver on a simple function    Let on the interval .    As always, we start by using simpler tools. In this case it is useful to have Excel sketch a graph and to use information we gathered in prior course. From the form of the function we know the graph is a parabola that points downwards.   Looking at the chart and the picture we see that the vertex is close to . We also see that the x-intercepts are close to and .  Next, we want to make sure that Solver is installed. It should be on the Analysis section of the Data tab.      If you don’t find it there, you should go to the online help for Excel, and look for help on Solver. Under the topic Define and solve a problem by using Solver , select first Define and solve a problem , then If you don’t see Solver under Analysis on the Data tab .  We first want to use Solver to find a root. Using the same approach we used with Goal Seek, we would like cell B5 to be set equal to 0 by changing the value of cell A5 . (As we have set up the problem, we could use solver starting with any of the cells that give a value for . I chose the one that has closest to the desired result.)      Solver finds a solution with . We are given a dialog box that asks if we want to keep the solver solution or restore our original value.   As with Goal Seek, if we use Solver again, starting with closer to 9, we will find a solution .  We introduce Solver because it can do things would be more difficult with Goal Seek. From the graph, and our knowledge or parabolas, we know the graph has a single maximum. To find the maximum with Goal Seek, we need to realize that the maximum occurs when the derivative is 0, define the numerical derivative, then set the derivative equal to 0. With Solver, we simply ask it to find the maximum. It finds the vertex at .      We also would like to be able to find a minimum. From the picture, we know that a downward pointing parabola has no absolute minimum. However, in business, we are typically concerned with functions defined on a finite domain. For this problem, consider only the interval . We want the minimum to appear in cell B7 , so we want to constrain cell A7 . If we start Solver, then hit the add button, we get a dialog box to enter the first constraint, that A7 .      In a similar manner, we add the constraint that and ask solver for a minimum.      Since we started the search for the minimum at , Solver finds the minimum at . This is a local minimum . Any value in the interval that is close by gives a higher value for the function.  We would also like to find the minimum at the other end of the interval. To do that it is useful to know a bit of the mathematics behind what solver is doing. Solver uses derivatives from the starting point to decide on the direction it should look and how far it should go to find the next guess for its answer. This is a modification of a technique called Newton’s method. In terms of our picture, depending on whether we tell it to find a maximum, minimum, or specified value, Solver tries to slide up or down the graph until it finds a good candidate, which it gives us as a solution. It is actually looking for the first local maximum or minimum it gets to. It does not look for other candidates. So if we started at , it will slide to the left to find an answer. To find the minimum at the other end of the interval, we need a starting point where the graph is already sloping down to the right. Starting at should work. We set up Solver.   Solver finds that the curve had a minimum at with .    To recap, using Solver on the interval , we found has a root at , a maximum at , and local minimums at and . We also found the values of at all of those points.   It is worth pointing out that the default setting has \"Make unconstrained variables non-negative. You generally want to turn that option off.  However, this example was chosen because we could get the same results with work by simply using the properties of parabolas. Thus, we now want to ask the same questions about a problem we cannot solve algebraically.   A deceptive graph    Video presentation of this example    Use solver to gather information, on the interval , on the graph of .    As always, start by looking at a graph.   From the graph I expect the function has no roots on the interval. It has local minimums near 0, 2.5, and 10. It has local maximums near 0.5, and 8. I will need to add constraints to find the local minimums at the boundaries. To make my worksheet easy to read I add two extra columns for the x and y values of interesting point, and fill in guesses.   After I use Solver, I find the local minimums occur at 0, 2.326, and 10, and the local maximums occur at 0.29115 and 7.3827. The maximum value for the function in the interval is 5.409 and the minimum is 1.0149. We verify that the endpoints, and , are both local minimums.   This function can be used to illustrate a limitation of our method. If we had graphed the functions at intervals at intervals of size 1 rather than 0.5, we get a different picture.   In that case, we miss the local maximum at 0.29 and confuse the left endpoint as a local maximum. Since Solver does not use the picture, it will not be misled by it. This example points out that while the graph is useful for guidance, we need to verify that we have not been misled by not graphing with enough resolution.     Warning : In we saw that relying on the graph could deceive us. The flip side is an example where relying on Solver can deceive us. We mentioned earlier that Solver uses a variant of Newton’s method to find values. In rough terms, it repeatedly finds the linear approximation and slides up or down that line to the desired answer. If we start close to the answer, this is a very effective method of finding a numerical solution. However, it is easy to construct problems where this leads to a blind alley or to the wrong answer. In particular, the method has great difficulty with problems where the function is not differentiable or where it has several bends. Consider the following example.   Deceiving Solver    Video presentation of this example    Use solver to gather information, on the interval , on the graph of .    As always, start by looking at a graph. We use the IF function to produce cases.   It is pretty easy to see that the function reaches a maximum of 7 at , and has a root at . On this interval the function does not have a minimum, but it gets close to -3 when approaches 0 from the negative side. If we start at and try sliding up or down the curve, we are going in the wrong direction to find the root or minimum. To find the maximum we also need to go down before we can go up to the maximum.  When we look at solver, we get the wrong but expected results. The function not only fails to have a tangent line at , it has a jump there. Solver finds the nearest local maximum and minimum. For the root, it tells us it can’t find a feasible solution.     The lesson to learn is that solver will help us find our candidate points, but we still need to understand the functions behavior well enough to give a good starting point.   A preview of things to come Extrema of functions of two variables  There is another feature of Solver that we will come back to later in the course. Goal Seek asked which cell should be changed to reach our desired goal. Solver allows us to specify a number of cells that we can change. This means it will work with functions of several variables. This will allow us to shed some light on one of the black boxes we used earlier in this course, the ability of Excel to find a trendline, or best fitting curve to a set of data.   Use solver to find a best fitting line to a data set    Video presentation of this example    Find a best fitting line to the following data.    x  1  2  3  4  5   y  35  46  78  84  114     As we mentioned in , when we are asked to find a best fitting line, we are asked to create a predicting function , with and chosen to minimize the sum of the squares of the error between the actual values and the predicted values. We build a worksheet that finds the sum of squared errors. We start with our variables, A and B, set at 5, an arbitrary initial guess.   We ask Solver to minimize D11 by changing B2 and B3 . For comparison we ask for the best fitting Trendline using the scatterplot.   We see that we get the same answers, subject to rounding rules.    The Trendline tool has the advantage of being easier to use in many cases. Finding the best fitting curve with solver has the advantage of showing what we mean by best fitting. It will also work with models that may not have been programmed into the Trendline tool.    Reading Check  Reading check, Optimization   This question checks your reading comprehension of the material is section 3.5, An Introduction to Solver, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Solver can be used on functions of 2 variables.    Solver will only find a root if the function actually has one.    It is easiest to think of solver as a more powerful version of Goal Seek.    Solver is more versatile than Goal Seek.    Solver can find the minimum of any function.    Solver uses a version of Newton's method to find extrema.    Solver can run into problems when it has to move across a bend in the curve to find a solution.    None of the above                Exercises: An Introduction to Solver    In you are given a function and an interval it is defined over:  Make a chart of values and plot a graph of the function.  Find any roots for the function.  Find relative maxima and minima for the function. (Remember to include the endpoints.).  Find the absolute maximum and minimum of the function on the interval.       , on the interval .        We can read off the roots from the table at and at   Use Solver to find the minimum.   Solver indicates that the minimum value of the function is -16 and the minimum takes place at .  We have local maximums at the endpoints and .    Test the endpoints, and , and compare to the minimum, .  The absolute minimum is -16 (at ) and the absolute maximum is 9 (at and 10)        , on the interval .     , on the interval .        This function does not have any roots on the interval .   The graph indicates there is a maximum near . Use Solver: There is a maximum at . The maximum value is 3814.53.  We have local minimums at the endpoints and .    Compare the local extrema to the endpoints. We need to consider three points, , , and .  The global maximum is 3814.53 (at ).  The global minimum of 1093.71 (at ).       The revenue function, , on the interval .    The profit function, , on the interval .         There are 2 roots: one near , and the other near . Using Solver we find the roots are at and .    The local maximum looks to be near . Using solver we get a local maximum of $19,245.33 at .  We have local minimums at the endpoints and .    Compare the local extrema to the endpoints. We need to consider three points, , , and .  The global maximum is 19245.33 (at ).  The global minimum of -23000 (at ).       The profit function obtained as the best fitting quadratic curve for the following data.    Quantity  157  513  702  842  995   Profit  143,814  314,801  322,223  279,988  189,263   on the interval .    The cost function obtained as the best fitting cubic curve for the following data.    Quantity  2  6  9  12  15   Cost  487  539  532  541  626   on the interval .   First we need to use Trendlines to find the equation of the function. Use polynomial of degree 3 to find the function .       There are no roots on the interval .   There is a local maximum between 4 and 8, and a local minimum between 8 and 12. Using Solver We find the local maximum at and a local minimum at . We also have a local minimum at the endpoint and a local maximum at the other endpoint .    Compare the local extrema to the endpoints. We need to consider four points, , , , and .  The global maximum is $396.91 (at )  The global minimum of $679.604 (at )         In you are given a function that and an interval it is defined over.  Make a chart of values and plot a graph of the function.  Visually identify approximate local maxima and minima.  Find a reasonable range of starting points from which Solver will find each local maximum or minimum.       , on the interval .     on the interval .      Inserting an empty row will allow us to see the break in the graph where we switch from the linear part to the quadratic part of the function. The functions have been included for clarity.     The local maximum looks to be at approximately and the local minimum appears to be near .    The local minimum is the most straight forward: start at and let Solver find the minimum. Solver indicates that the minimum value is 0 and the minimum occurs at .  For the local maximum we can have two things happen:  The maximum is on the linear part of the equation.  The maximum is on the quadratic part.    The two pieces do meet at , but we cannot see just where the line ends up.  So start with on Solver, find the maximum on the interval [4,5] and compare that to the value on the other branch of the graph.   Solver returns a value of 10 at .  Note that is defined to be 8 exactly at , because the output is determined by the part.  Thus we do not have a local maximum here. The graph approaches 10 (gets infinitely close to it) as x approaches 5 from the left, but switches to 8 at he last minute.        on the interval .     "
},
{
  "id": "sec-3-5-IntroductionSolver-4",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#sec-3-5-IntroductionSolver-4",
  "type": "Example",
  "number": "3.5.1",
  "title": "Use Solver to gather information about the graph.",
  "body": " Use Solver to gather information about the graph    Using Solver on a simple function    Let on the interval .    As always, we start by using simpler tools. In this case it is useful to have Excel sketch a graph and to use information we gathered in prior course. From the form of the function we know the graph is a parabola that points downwards.   Looking at the chart and the picture we see that the vertex is close to . We also see that the x-intercepts are close to and .  Next, we want to make sure that Solver is installed. It should be on the Analysis section of the Data tab.      If you don’t find it there, you should go to the online help for Excel, and look for help on Solver. Under the topic Define and solve a problem by using Solver , select first Define and solve a problem , then If you don’t see Solver under Analysis on the Data tab .  We first want to use Solver to find a root. Using the same approach we used with Goal Seek, we would like cell B5 to be set equal to 0 by changing the value of cell A5 . (As we have set up the problem, we could use solver starting with any of the cells that give a value for . I chose the one that has closest to the desired result.)      Solver finds a solution with . We are given a dialog box that asks if we want to keep the solver solution or restore our original value.   As with Goal Seek, if we use Solver again, starting with closer to 9, we will find a solution .  We introduce Solver because it can do things would be more difficult with Goal Seek. From the graph, and our knowledge or parabolas, we know the graph has a single maximum. To find the maximum with Goal Seek, we need to realize that the maximum occurs when the derivative is 0, define the numerical derivative, then set the derivative equal to 0. With Solver, we simply ask it to find the maximum. It finds the vertex at .      We also would like to be able to find a minimum. From the picture, we know that a downward pointing parabola has no absolute minimum. However, in business, we are typically concerned with functions defined on a finite domain. For this problem, consider only the interval . We want the minimum to appear in cell B7 , so we want to constrain cell A7 . If we start Solver, then hit the add button, we get a dialog box to enter the first constraint, that A7 .      In a similar manner, we add the constraint that and ask solver for a minimum.      Since we started the search for the minimum at , Solver finds the minimum at . This is a local minimum . Any value in the interval that is close by gives a higher value for the function.  We would also like to find the minimum at the other end of the interval. To do that it is useful to know a bit of the mathematics behind what solver is doing. Solver uses derivatives from the starting point to decide on the direction it should look and how far it should go to find the next guess for its answer. This is a modification of a technique called Newton’s method. In terms of our picture, depending on whether we tell it to find a maximum, minimum, or specified value, Solver tries to slide up or down the graph until it finds a good candidate, which it gives us as a solution. It is actually looking for the first local maximum or minimum it gets to. It does not look for other candidates. So if we started at , it will slide to the left to find an answer. To find the minimum at the other end of the interval, we need a starting point where the graph is already sloping down to the right. Starting at should work. We set up Solver.   Solver finds that the curve had a minimum at with .   "
},
{
  "id": "eg-deceptive-graph",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#eg-deceptive-graph",
  "type": "Example",
  "number": "3.5.8",
  "title": "A deceptive graph.",
  "body": " A deceptive graph    Video presentation of this example    Use solver to gather information, on the interval , on the graph of .    As always, start by looking at a graph.   From the graph I expect the function has no roots on the interval. It has local minimums near 0, 2.5, and 10. It has local maximums near 0.5, and 8. I will need to add constraints to find the local minimums at the boundaries. To make my worksheet easy to read I add two extra columns for the x and y values of interesting point, and fill in guesses.   After I use Solver, I find the local minimums occur at 0, 2.326, and 10, and the local maximums occur at 0.29115 and 7.3827. The maximum value for the function in the interval is 5.409 and the minimum is 1.0149. We verify that the endpoints, and , are both local minimums.   This function can be used to illustrate a limitation of our method. If we had graphed the functions at intervals at intervals of size 1 rather than 0.5, we get a different picture.   In that case, we miss the local maximum at 0.29 and confuse the left endpoint as a local maximum. Since Solver does not use the picture, it will not be misled by it. This example points out that while the graph is useful for guidance, we need to verify that we have not been misled by not graphing with enough resolution.   "
},
{
  "id": "sec-3-5-IntroductionSolver-10",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#sec-3-5-IntroductionSolver-10",
  "type": "Example",
  "number": "3.5.10",
  "title": "Deceiving Solver.",
  "body": " Deceiving Solver    Video presentation of this example    Use solver to gather information, on the interval , on the graph of .    As always, start by looking at a graph. We use the IF function to produce cases.   It is pretty easy to see that the function reaches a maximum of 7 at , and has a root at . On this interval the function does not have a minimum, but it gets close to -3 when approaches 0 from the negative side. If we start at and try sliding up or down the curve, we are going in the wrong direction to find the root or minimum. To find the maximum we also need to go down before we can go up to the maximum.  When we look at solver, we get the wrong but expected results. The function not only fails to have a tangent line at , it has a jump there. Solver finds the nearest local maximum and minimum. For the root, it tells us it can’t find a feasible solution.    "
},
{
  "id": "sec-3-5-IntroductionSolver-12-3",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#sec-3-5-IntroductionSolver-12-3",
  "type": "Example",
  "number": "3.5.12",
  "title": "Use solver to find a best fitting line to a data set.",
  "body": " Use solver to find a best fitting line to a data set    Video presentation of this example    Find a best fitting line to the following data.    x  1  2  3  4  5   y  35  46  78  84  114     As we mentioned in , when we are asked to find a best fitting line, we are asked to create a predicting function , with and chosen to minimize the sum of the squares of the error between the actual values and the predicted values. We build a worksheet that finds the sum of squared errors. We start with our variables, A and B, set at 5, an arbitrary initial guess.   We ask Solver to minimize D11 by changing B2 and B3 . For comparison we ask for the best fitting Trendline using the scatterplot.   We see that we get the same answers, subject to rounding rules.   "
},
{
  "id": "Reading_Check_Sec3.5",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#Reading_Check_Sec3.5",
  "type": "Reading Question",
  "number": "3.5.1",
  "title": "Reading check, Optimization.",
  "body": "Reading check, Optimization   This question checks your reading comprehension of the material is section 3.5, An Introduction to Solver, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Solver can be used on functions of 2 variables.    Solver will only find a root if the function actually has one.    It is easiest to think of solver as a more powerful version of Goal Seek.    Solver is more versatile than Goal Seek.    Solver can find the minimum of any function.    Solver uses a version of Newton's method to find extrema.    Solver can run into problems when it has to move across a bend in the curve to find a solution.    None of the above             "
},
{
  "id": "ex-solver-opt-first",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#ex-solver-opt-first",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": "  , on the interval .        We can read off the roots from the table at and at   Use Solver to find the minimum.   Solver indicates that the minimum value of the function is -16 and the minimum takes place at .  We have local maximums at the endpoints and .    Test the endpoints, and , and compare to the minimum, .  The absolute minimum is -16 (at ) and the absolute maximum is 9 (at and 10)     "
},
{
  "id": "exercises-set-sec-3-5-2-3",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#exercises-set-sec-3-5-2-3",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": "  , on the interval .  "
},
{
  "id": "exercises-set-sec-3-5-2-4",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#exercises-set-sec-3-5-2-4",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": "  , on the interval .        This function does not have any roots on the interval .   The graph indicates there is a maximum near . Use Solver: There is a maximum at . The maximum value is 3814.53.  We have local minimums at the endpoints and .    Compare the local extrema to the endpoints. We need to consider three points, , , and .  The global maximum is 3814.53 (at ).  The global minimum of 1093.71 (at ).     "
},
{
  "id": "exercises-set-sec-3-5-2-5",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#exercises-set-sec-3-5-2-5",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": " The revenue function, , on the interval .  "
},
{
  "id": "exercises-set-sec-3-5-2-6",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#exercises-set-sec-3-5-2-6",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": " The profit function, , on the interval .         There are 2 roots: one near , and the other near . Using Solver we find the roots are at and .    The local maximum looks to be near . Using solver we get a local maximum of $19,245.33 at .  We have local minimums at the endpoints and .    Compare the local extrema to the endpoints. We need to consider three points, , , and .  The global maximum is 19245.33 (at ).  The global minimum of -23000 (at ).     "
},
{
  "id": "exercises-set-sec-3-5-2-7",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#exercises-set-sec-3-5-2-7",
  "type": "Exercise",
  "number": "3.5.6",
  "title": "",
  "body": " The profit function obtained as the best fitting quadratic curve for the following data.    Quantity  157  513  702  842  995   Profit  143,814  314,801  322,223  279,988  189,263   on the interval .  "
},
{
  "id": "ex-solver-opt-last",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#ex-solver-opt-last",
  "type": "Exercise",
  "number": "3.5.7",
  "title": "",
  "body": " The cost function obtained as the best fitting cubic curve for the following data.    Quantity  2  6  9  12  15   Cost  487  539  532  541  626   on the interval .   First we need to use Trendlines to find the equation of the function. Use polynomial of degree 3 to find the function .       There are no roots on the interval .   There is a local maximum between 4 and 8, and a local minimum between 8 and 12. Using Solver We find the local maximum at and a local minimum at . We also have a local minimum at the endpoint and a local maximum at the other endpoint .    Compare the local extrema to the endpoints. We need to consider four points, , , , and .  The global maximum is $396.91 (at )  The global minimum of $679.604 (at )     "
},
{
  "id": "ex-solver-plot-first",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#ex-solver-plot-first",
  "type": "Exercise",
  "number": "3.5.8",
  "title": "",
  "body": "  , on the interval .  "
},
{
  "id": "exercises-set-sec-3-5-3-3",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#exercises-set-sec-3-5-3-3",
  "type": "Exercise",
  "number": "3.5.9",
  "title": "",
  "body": "  on the interval .      Inserting an empty row will allow us to see the break in the graph where we switch from the linear part to the quadratic part of the function. The functions have been included for clarity.     The local maximum looks to be at approximately and the local minimum appears to be near .    The local minimum is the most straight forward: start at and let Solver find the minimum. Solver indicates that the minimum value is 0 and the minimum occurs at .  For the local maximum we can have two things happen:  The maximum is on the linear part of the equation.  The maximum is on the quadratic part.    The two pieces do meet at , but we cannot see just where the line ends up.  So start with on Solver, find the maximum on the interval [4,5] and compare that to the value on the other branch of the graph.   Solver returns a value of 10 at .  Note that is defined to be 8 exactly at , because the output is determined by the part.  Thus we do not have a local maximum here. The graph approaches 10 (gets infinitely close to it) as x approaches 5 from the left, but switches to 8 at he last minute.     "
},
{
  "id": "ex-solver-plot-last",
  "level": "2",
  "url": "sec-3-5-IntroductionSolver.html#ex-solver-plot-last",
  "type": "Exercise",
  "number": "3.5.10",
  "title": "",
  "body": "  on the interval .  "
},
{
  "id": "sec-4-1-ElementaryDerivatives",
  "level": "1",
  "url": "sec-4-1-ElementaryDerivatives.html",
  "type": "Section",
  "number": "4.1",
  "title": "Elementary Derivatives",
  "body": " Elementary Derivatives   Definition and Notation  Link to worksheets used in this section  We start by recalling the formal definition, with a slight adjustment in notation to match the standard conventions:   Derivative   For a function , the instantaneous rate of change of , or the derivative of , denoted as , is defined as .    We also want to recall some alternate notations we may use.   Notation: Let .  The derivative of is denoted as or or .  The derivative at is denoted as or .   As is typical in mathematics, when there are several forms, we use the one that makes the most sense in the case on which we are working.    Derivatives of monomials  Our first rule for symbolic differentiation gives the derivative of a monomial.   Monomial rule   If , then .    This rule is a generalization of the rule we found in section 3.2 using trendlines. There we noticed that the derivative is linear whenever the function is quadratic. The rule is valid for all values of n, not just for positive whole numbers. We can now find derivatives for expressions that can be converted into this form.   Derivatives of monomials   Using our first rule of symbolic differentiation, find the derivatives of the following functions:           Using our rule:           For parts (d) and (e), we converted roots and fractions so they looked like monomials with negative or fractional exponents and applied our rule.  Probably the most convincing demonstration of the truth of this rule is for us to use Excel and the techniques of the last chapter to find a function, its numeric and symbolic derivatives and see that the symbolic and numeric derivatives are the same up to round off error. We would also like to see how the symbolic derivative can be derived from the formal definition of derivative in simple cases.   Derivatives of linear functions   From the formal definition of derivative, if , then show .    Using our definition: .  The last step is justified by noting that as gets very small the value of simply stays .    We want to look at a quadratic function, since we will need to take a limit in that case.   A quadratic derivative   From the formal definition of derivative, if , then show .    Using our definition: .  The last step is justified by noting that as gets very small the value of also gets very small.    We can modify this last example to find a formula for the derivative of for any positive integer . We recall that .  We are ready to generalize.   Derivative of power function   From the formal definition of derivative, if , then show .    Using our definition: .  The last step is justified by noting that as gets very small, the value of times a polynomial in also gets very small.      Derivatives of Exponential Functions   Exponential Rule   If , then .    The elegance of this rule is part of the reason why mathematicians and math books like base for exponential functions. However we more typically want to use exponential functions based on a rate of growth or decay.   General Exponential Rule   If , then .     Exponential examples   Using the exponential rules of symbolic differentiation, find the derivatives of the following functions:           Using our rule:           In some ways, the most convincing argument for these rules is to use Excel to plot the function, its numeric derivative and its symbolic derivative for a variety of values and see that the numeric and symbolic derivatives are the same up to rounding error. We would also like to make an argument from the formal definition of the derivative.   Justification of first exponential rule   From the formal definition of derivative show that if , then .    Using our definition: .  It suffices to show that . This can be done by starting with a formal definition of . For this class it can also be done by using Excel to evaluate the expression for smaller and smaller values of .   It seems clear that .     Justification of second exponential rule   From the formal definition of derivative, if , then show .    We start by mimicking the last problem. At a key step we will recall that by replacing with in our previous justification, we obtain . We also want to note that .  Using our definition: .    We are most likely to see exponential functions in the context of continuously compounding interest.   Computing future rate of change   If I have a dollar in the bank at an effective annual interest rate of 6%, compounded continuously, at what rate is the principal increasing after ten years?    We know . Thus . We evaluate this at 10 years and get . Thus after 10 years, I am earning a little more than 10 cents a year.      Derivatives of Logarithmic Functions  For a last rule for this section we want to find the derivative of .   Logarithmic Rule   If , then .     Derivatives of logarithmic functions   Using the logarithmic rule of symbolic differentiation, find the derivatives of the following functions:         Using our rule:         Our argument for this derivative rule will be more geometric.   Justification of logarithmic rule   If , then show .    We start by noticing that and are inverse functions. That means their graphs can be obtained by reflecting across the line .   The slope of the tangent line at is by the exponential rule. Symmetry tells us the slope of the line tangent to at is . Letting , the slope of the line tangent to at is . Thus .     Slope of a tangent line   Find the slope of the line tangent to at . Compare your answer to the estimate given by the approximation techniques of the last chapter.    Since , . When I use Excel to compute I get .      Reading Check  Reading check, Elementary Derivatives   This question checks your reading comprehension of the material is section 4.1, Elementary Derivatives, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    The monomial rule for taking the derivative of is only valid when is an integer.    If then .    If then .    If then .    If then .    If then .    If then .    None of the above                Exercises: Elementary Derivatives Problems    In the following exercises, use the symbolic rules to find the derivative of the function.                      Rewrite . Then, .                         Rewrite . Then .                                       For the following exercises, use the symbolic rules to find the derivative at the specified point. Use Excel to find the numeric approximation using the calculator formula. To how many digits do the two methods agree?     . Evaluate at .    , so . The numeric derivative agrees to 12 decimal digits.     . Evaluate at .     . Evaluate at .    . So . The numeric derivative agrees to 10 decimal digits.     . Evaluate at .     . Evaluate at .    . So . The numeric derivative agrees to 13 decimal digits.     . Evaluate at .      Find tangent lines to the given curves at the indicated points.     . At .   We need a point: if then .  We need a slope: . Hence .  Find the line: , so .  Comments  We can rewrite the tangent line as   We could have used the slope intercept version of the line to solve the problem as well. Then . We know , and we can solve for by letting and .        . At .     . At .   We need a point: if then .  We need a slope: .  Hence  Find the line: , so .     . At .     "
},
{
  "id": "DefDerivative",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#DefDerivative",
  "type": "Definition",
  "number": "4.1.1",
  "title": "Derivative.",
  "body": " Derivative   For a function , the instantaneous rate of change of , or the derivative of , denoted as , is defined as .   "
},
{
  "id": "DerivMonomialRule",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#DerivMonomialRule",
  "type": "Claim",
  "number": "4.1.2",
  "title": "Monomial rule.",
  "body": " Monomial rule   If , then .   "
},
{
  "id": "sec-4-1-ElementaryDerivatives-3-5",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#sec-4-1-ElementaryDerivatives-3-5",
  "type": "Example",
  "number": "4.1.3",
  "title": "Derivatives of monomials.",
  "body": " Derivatives of monomials   Using our first rule of symbolic differentiation, find the derivatives of the following functions:           Using our rule:          "
},
{
  "id": "sec-4-1-ElementaryDerivatives-3-8",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#sec-4-1-ElementaryDerivatives-3-8",
  "type": "Example",
  "number": "4.1.4",
  "title": "Derivatives of linear functions.",
  "body": " Derivatives of linear functions   From the formal definition of derivative, if , then show .    Using our definition: .  The last step is justified by noting that as gets very small the value of simply stays .   "
},
{
  "id": "sec-4-1-ElementaryDerivatives-3-10",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#sec-4-1-ElementaryDerivatives-3-10",
  "type": "Example",
  "number": "4.1.5",
  "title": "A quadratic derivative.",
  "body": " A quadratic derivative   From the formal definition of derivative, if , then show .    Using our definition: .  The last step is justified by noting that as gets very small the value of also gets very small.   "
},
{
  "id": "PowerFunctionRule",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#PowerFunctionRule",
  "type": "Example",
  "number": "4.1.6",
  "title": "Derivative of power function.",
  "body": " Derivative of power function   From the formal definition of derivative, if , then show .    Using our definition: .  The last step is justified by noting that as gets very small, the value of times a polynomial in also gets very small.   "
},
{
  "id": "ExponentialRuleDeriv",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#ExponentialRuleDeriv",
  "type": "Claim",
  "number": "4.1.7",
  "title": "Exponential Rule.",
  "body": " Exponential Rule   If , then .   "
},
{
  "id": "GenExponRUleClaim",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#GenExponRUleClaim",
  "type": "Claim",
  "number": "4.1.8",
  "title": "General Exponential Rule.",
  "body": " General Exponential Rule   If , then .   "
},
{
  "id": "sec-4-1-ElementaryDerivatives-4-5",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#sec-4-1-ElementaryDerivatives-4-5",
  "type": "Example",
  "number": "4.1.9",
  "title": "Exponential examples.",
  "body": " Exponential examples   Using the exponential rules of symbolic differentiation, find the derivatives of the following functions:           Using our rule:          "
},
{
  "id": "sec-4-1-ElementaryDerivatives-4-7",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#sec-4-1-ElementaryDerivatives-4-7",
  "type": "Example",
  "number": "4.1.10",
  "title": "Justification of first exponential rule.",
  "body": " Justification of first exponential rule   From the formal definition of derivative show that if , then .    Using our definition: .  It suffices to show that . This can be done by starting with a formal definition of . For this class it can also be done by using Excel to evaluate the expression for smaller and smaller values of .   It seems clear that .   "
},
{
  "id": "JustifySecondExponDerivRule",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#JustifySecondExponDerivRule",
  "type": "Example",
  "number": "4.1.11",
  "title": "Justification of second exponential rule.",
  "body": " Justification of second exponential rule   From the formal definition of derivative, if , then show .    We start by mimicking the last problem. At a key step we will recall that by replacing with in our previous justification, we obtain . We also want to note that .  Using our definition: .   "
},
{
  "id": "ExampleFutureRateOfChange",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#ExampleFutureRateOfChange",
  "type": "Example",
  "number": "4.1.12",
  "title": "Computing future rate of change.",
  "body": " Computing future rate of change   If I have a dollar in the bank at an effective annual interest rate of 6%, compounded continuously, at what rate is the principal increasing after ten years?    We know . Thus . We evaluate this at 10 years and get . Thus after 10 years, I am earning a little more than 10 cents a year.   "
},
{
  "id": "DerivLogRule",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#DerivLogRule",
  "type": "Claim",
  "number": "4.1.13",
  "title": "Logarithmic Rule.",
  "body": " Logarithmic Rule   If , then .   "
},
{
  "id": "ExampleDerivLorRule",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#ExampleDerivLorRule",
  "type": "Example",
  "number": "4.1.14",
  "title": "Derivatives of logarithmic functions.",
  "body": " Derivatives of logarithmic functions   Using the logarithmic rule of symbolic differentiation, find the derivatives of the following functions:         Using our rule:        "
},
{
  "id": "JustifyDerivLogRule",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#JustifyDerivLogRule",
  "type": "Example",
  "number": "4.1.15",
  "title": "Justification of logarithmic rule.",
  "body": " Justification of logarithmic rule   If , then show .    We start by noticing that and are inverse functions. That means their graphs can be obtained by reflecting across the line .   The slope of the tangent line at is by the exponential rule. Symmetry tells us the slope of the line tangent to at is . Letting , the slope of the line tangent to at is . Thus .   "
},
{
  "id": "ExampleSlopeTanLine",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#ExampleSlopeTanLine",
  "type": "Example",
  "number": "4.1.16",
  "title": "Slope of a tangent line.",
  "body": " Slope of a tangent line   Find the slope of the line tangent to at . Compare your answer to the estimate given by the approximation techniques of the last chapter.    Since , . When I use Excel to compute I get .   "
},
{
  "id": "Reading_Check_Sec4.1",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#Reading_Check_Sec4.1",
  "type": "Reading Question",
  "number": "4.1.5.1",
  "title": "Reading check, Elementary Derivatives.",
  "body": "Reading check, Elementary Derivatives   This question checks your reading comprehension of the material is section 4.1, Elementary Derivatives, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    The monomial rule for taking the derivative of is only valid when is an integer.    If then .    If then .    If then .    If then .    If then .    If then .    None of the above             "
},
{
  "id": "exercise-ElementaryDerivaitives1",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercise-ElementaryDerivaitives1",
  "type": "Exercise",
  "number": "4.1.6.1",
  "title": "",
  "body": "        "
},
{
  "id": "exercise-ElementaryDerivaitives2",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercise-ElementaryDerivaitives2",
  "type": "Exercise",
  "number": "4.1.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-ElementaryDerivaitives3",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercise-ElementaryDerivaitives3",
  "type": "Exercise",
  "number": "4.1.6.3",
  "title": "",
  "body": "     Rewrite . Then, .  "
},
{
  "id": "exercise-ElementaryDerivaitives4",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercise-ElementaryDerivaitives4",
  "type": "Exercise",
  "number": "4.1.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "exercise-ElementaryDerivaitives5",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercise-ElementaryDerivaitives5",
  "type": "Exercise",
  "number": "4.1.6.5",
  "title": "",
  "body": "      "
},
{
  "id": "exerciseGoup-1-ElementaryDerivaitives-7",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exerciseGoup-1-ElementaryDerivaitives-7",
  "type": "Exercise",
  "number": "4.1.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "exerciseGoup-1-ElementaryDerivaitives-8",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exerciseGoup-1-ElementaryDerivaitives-8",
  "type": "Exercise",
  "number": "4.1.6.7",
  "title": "",
  "body": "     Rewrite . Then .  "
},
{
  "id": "exerciseGoup-1-ElementaryDerivaitives-9",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exerciseGoup-1-ElementaryDerivaitives-9",
  "type": "Exercise",
  "number": "4.1.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "exerciseGoup-1-ElementaryDerivaitives-10",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exerciseGoup-1-ElementaryDerivaitives-10",
  "type": "Exercise",
  "number": "4.1.6.9",
  "title": "",
  "body": "        "
},
{
  "id": "exerciseGoup-1-ElementaryDerivaitives-11",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exerciseGoup-1-ElementaryDerivaitives-11",
  "type": "Exercise",
  "number": "4.1.6.10",
  "title": "",
  "body": "    "
},
{
  "id": "exerciseGoup-1-ElementaryDerivaitives-12",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exerciseGoup-1-ElementaryDerivaitives-12",
  "type": "Exercise",
  "number": "4.1.6.11",
  "title": "",
  "body": "        "
},
{
  "id": "exerciseGoup-1-ElementaryDerivaitives-13",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exerciseGoup-1-ElementaryDerivaitives-13",
  "type": "Exercise",
  "number": "4.1.6.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-ElementaryDerivaitives-3-2",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-3-2",
  "type": "Exercise",
  "number": "4.1.6.13",
  "title": "",
  "body": "  . Evaluate at .    , so . The numeric derivative agrees to 12 decimal digits.  "
},
{
  "id": "exercises-set-ElementaryDerivaitives-3-3",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-3-3",
  "type": "Exercise",
  "number": "4.1.6.14",
  "title": "",
  "body": "  . Evaluate at .  "
},
{
  "id": "exercises-set-ElementaryDerivaitives-3-4",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-3-4",
  "type": "Exercise",
  "number": "4.1.6.15",
  "title": "",
  "body": "  . Evaluate at .    . So . The numeric derivative agrees to 10 decimal digits.  "
},
{
  "id": "exercises-set-ElementaryDerivaitives-3-5",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-3-5",
  "type": "Exercise",
  "number": "4.1.6.16",
  "title": "",
  "body": "  . Evaluate at .  "
},
{
  "id": "exercises-set-ElementaryDerivaitives-3-6",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-3-6",
  "type": "Exercise",
  "number": "4.1.6.17",
  "title": "",
  "body": "  . Evaluate at .    . So . The numeric derivative agrees to 13 decimal digits.  "
},
{
  "id": "exercises-set-ElementaryDerivaitives-3-7",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-3-7",
  "type": "Exercise",
  "number": "4.1.6.18",
  "title": "",
  "body": "  . Evaluate at .  "
},
{
  "id": "exercises-set-ElementaryDerivaitives-4-2",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-4-2",
  "type": "Exercise",
  "number": "4.1.6.19",
  "title": "",
  "body": "  . At .   We need a point: if then .  We need a slope: . Hence .  Find the line: , so .  Comments  We can rewrite the tangent line as   We could have used the slope intercept version of the line to solve the problem as well. Then . We know , and we can solve for by letting and .     "
},
{
  "id": "exercises-set-ElementaryDerivaitives-4-3",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-4-3",
  "type": "Exercise",
  "number": "4.1.6.20",
  "title": "",
  "body": "  . At .  "
},
{
  "id": "exercises-set-ElementaryDerivaitives-4-4",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-4-4",
  "type": "Exercise",
  "number": "4.1.6.21",
  "title": "",
  "body": "  . At .   We need a point: if then .  We need a slope: .  Hence  Find the line: , so .  "
},
{
  "id": "exercises-set-ElementaryDerivaitives-4-5",
  "level": "2",
  "url": "sec-4-1-ElementaryDerivatives.html#exercises-set-ElementaryDerivaitives-4-5",
  "type": "Exercise",
  "number": "4.1.6.22",
  "title": "",
  "body": "  . At .  "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions",
  "level": "1",
  "url": "sec-4-2DerivativesCombinationFunctions.html",
  "type": "Section",
  "number": "4.2",
  "title": "Derivative Rules for Combinations of Functions",
  "body": " Derivative Rules for Combinations of Functions   In the last section we learned rules to symbolically differentiate some elementary functions. To summarize, we have established 5 rules.   Elementary Formulas  If , then .  If , then .  If , then , for any nonzero number n.  If , then .  If , then .  If , then   However, we do not yet have a rule for taking the derivative of a function as simple as . Rather than producing rules for each kind of function, we wish to discover how to differentiate functions obtained by arithmetic on functions we already know how to differentiate. This would let us differentiate functions like , or , or , which are built up from our elementary functions. We want rules for multiplying a known function by a constant, for adding or subtracting two known functions, and for multiplying or dividing two known functions.    Derivatives of scalar products  We start by differentiating a constant times a function.   Scalar multiple rule   The derivative of is . In other words, .     Derivatives of constants times standard functions   Find the derivatives of the following functions:         Using our rule:           Derivatives of sums and differences  Next we want to look at the sum or difference of two functions.   Sum and difference rule   The derivative of is . In other words, .     Derivatives of sums and differences of standard functions   Find the derivatives of the following functions:         Using our rule:      .        Theory and justification  The basic argument for all of our rules starts with local linearity. Recall that if is differentiable at , then in a region around , we can approximate by a linear function, . To find the derivative of a scalar product, sum, difference, product, or quotient of known functions, we perform the appropriate actions on the linear approximations of those functions. We then take the coefficient of the linear term of the result.  For our first rule we are differentiating a constant times a function. Following the general method we look at how we multiply a constant times the linear approximation. .  Taking the coefficient of the linear term gives the scalar multiple rule, the derivative of a constant times a functions is the constant times the derivative of the function.  Next, we want to look at the sum or difference of two functions. Following the general method we look at the sum or difference of the linear approximations. .  Taking the coefficient of the linear term gives the sum or difference rule, the derivative of a sum or difference of two functions is the sum or difference of the derivatives of the functions.     Derivatives of products  We now turn our attention to the product of two functions.   Product rule   The derivative of is . In other words, .    Warning: Note that the derivative of a product is not the product of the derivatives!  We start with an example that we can do by multiplying before taking the derivative. This gives us a way to check that we have the rule correct.   Simple derivative of a product   Let and . Find the derivative of .    Note that . Using our rule for monomials . Using the same rule we see , and . We can now evaluate using the product rule: .    Both methods give the same answer. Note that the product of the derivatives is which is NOT the derivative of the product.   General derivatives of products   Find the derivatives of the following functions:          .        Theory and justification  Following the general rule we look at the linear term of the product of the linear approximations. Consider the product of two linear expressions. .  The coefficient of the linear term is . Thus, when we take the product , the coefficient of the linear term is .     Derivatives of quotients  Finally, we turn our attention to the quotient of two functions.   Quotient rule   The derivative of is . In other words, .    Warning: Once again, note that the derivative of a quotient is NOT the quotient of the derivatives!   Simple derivative of a quotient   For our first example we look at a case that we dane do without the quotient rule by simplifying first. This lets us check our answer. Let and . Find the derivative of .    We start by simplifying. Note that . Using our rule for monomials, .  Now we use the quotient rule directly. Using the same rule we see , and . Using the quotient rule: .  Both methods give the same answer.    Note that the quotient of the derivatives is , which is not the same as the derivative of the quotient.   General derivatives of quotients   Find the derivatives of the following functions:                 Theory and justification  Following the general method, we look at the linear term of the quotient of the linear approximations. However, we need to do an algebraic trick before we can find the linear term. Consider the quotient of two linear expressions: .  When is small enough, we get a good approximation by ignoring the term. In that approximation, the coefficient of the linear term is . Thus, when we take the quotient, , the coefficient of the linear term is .     Reading Check  Reading check, Derivative Rules for Combinations of Functions   This question checks your reading comprehension of the material is section 4.2, Derivative Rules for Combinations of Functions, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    None of the above                Exercises: Derivative Rules for Combinations of Functions Problems    Use the rules from the last two sections to find the derivatives of the following functions.     .         .     .   Rewrite using exponential notation: Then take the derivative: .     .     .   Product Rule: .     .     .   Product Rule: .  Note: the equation is also acceptable as a solution.  Factoring is sometimes done, but depends on the problem we are trying to solve and what we are trying to do with the derivative.     .     .   If we have a product of 3 functions we need to first consider 2 of the functions as a sigle function that includes a product. .     .     .   Quotient Rule: .  We can simplify this : .     .     .   Quotient Rule: .     .     .   Quotient Rule: .     .     .   Quotient Rule with embedded Product Rule:            For the following problems, use the following data to find the indicated derivative.    x  0 1 2 3  4 5 6 7  8 9    f(x)  3 5 7 1  9 8 4 2  0 6    f'(x)  7 6 5 4  3 2 1 0  9 8    g(x)  8 4 0 6  2 9 5 1  7 3    g'(x)  6 8 4 2  0 7 9 3  5 1       , where .    .     , where .     , where .    .     , where .     The profit function at the widget factory is . Find the maximum profit.    is a downward opening parabola, so the maximum occurs where the derivative (slope of the tangent line) is 0.  Find the critical point: , So .  The maximum profit is .    The demand function for a fad item is , with measured in months. When is the demand the highest?    The cost function for gizmo production is , for . Find the equation of the line tangent to the cost function at .   For the tangent line we need a point and a slope, and once we have those we find the equation of the line.  Point: When , .  Slope: , so at we have .  The line: .  So we have , or in slope intercept form: .    The formula for the current value of a particular revenue stream is . Find the equation of the line tangent to the cost function at .    "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-3-3",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-3-3",
  "type": "Claim",
  "number": "4.2.1",
  "title": "Scalar multiple rule.",
  "body": " Scalar multiple rule   The derivative of is . In other words, .   "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-3-4",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-3-4",
  "type": "Example",
  "number": "4.2.2",
  "title": "Derivatives of constants times standard functions.",
  "body": " Derivatives of constants times standard functions   Find the derivatives of the following functions:         Using our rule:        "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-4-3",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-4-3",
  "type": "Claim",
  "number": "4.2.3",
  "title": "Sum and difference rule.",
  "body": " Sum and difference rule   The derivative of is . In other words, .   "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-4-4",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-4-4",
  "type": "Example",
  "number": "4.2.4",
  "title": "Derivatives of sums and differences of standard functions.",
  "body": " Derivatives of sums and differences of standard functions   Find the derivatives of the following functions:         Using our rule:      .      "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-5-3",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-5-3",
  "type": "Claim",
  "number": "4.2.5",
  "title": "Product rule.",
  "body": " Product rule   The derivative of is . In other words, .   "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-5-6",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-5-6",
  "type": "Example",
  "number": "4.2.6",
  "title": "Simple derivative of a product.",
  "body": " Simple derivative of a product   Let and . Find the derivative of .    Note that . Using our rule for monomials . Using the same rule we see , and . We can now evaluate using the product rule: .   "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-5-8",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-5-8",
  "type": "Example",
  "number": "4.2.7",
  "title": "General derivatives of products.",
  "body": " General derivatives of products   Find the derivatives of the following functions:          .      "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-6-3",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-6-3",
  "type": "Claim",
  "number": "4.2.8",
  "title": "Quotient rule.",
  "body": " Quotient rule   The derivative of is . In other words, .   "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-6-5",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-6-5",
  "type": "Example",
  "number": "4.2.9",
  "title": "Simple derivative of a quotient.",
  "body": " Simple derivative of a quotient   For our first example we look at a case that we dane do without the quotient rule by simplifying first. This lets us check our answer. Let and . Find the derivative of .    We start by simplifying. Note that . Using our rule for monomials, .  Now we use the quotient rule directly. Using the same rule we see , and . Using the quotient rule: .  Both methods give the same answer.   "
},
{
  "id": "sec-4-2DerivativesCombinationFunctions-6-7",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#sec-4-2DerivativesCombinationFunctions-6-7",
  "type": "Example",
  "number": "4.2.10",
  "title": "General derivatives of quotients.",
  "body": " General derivatives of quotients   Find the derivatives of the following functions:               "
},
{
  "id": "Reading_Check_Sec4.2",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#Reading_Check_Sec4.2",
  "type": "Reading Question",
  "number": "4.2.5.1",
  "title": "Reading check, Derivative Rules for Combinations of Functions.",
  "body": "Reading check, Derivative Rules for Combinations of Functions   This question checks your reading comprehension of the material is section 4.2, Derivative Rules for Combinations of Functions, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    The derivative of is .    None of the above             "
},
{
  "id": "exercises-set-sec-4-2-2-2",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-2",
  "type": "Exercise",
  "number": "4.2.6.1",
  "title": "",
  "body": "  .      "
},
{
  "id": "exercises-set-sec-4-2-2-3",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-3",
  "type": "Exercise",
  "number": "4.2.6.2",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-2-2-4",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-4",
  "type": "Exercise",
  "number": "4.2.6.3",
  "title": "",
  "body": "  .   Rewrite using exponential notation: Then take the derivative: .  "
},
{
  "id": "exercises-set-sec-4-2-2-5",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-5",
  "type": "Exercise",
  "number": "4.2.6.4",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-2-2-6",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-6",
  "type": "Exercise",
  "number": "4.2.6.5",
  "title": "",
  "body": "  .   Product Rule: .  "
},
{
  "id": "exercises-set-sec-4-2-2-7",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-7",
  "type": "Exercise",
  "number": "4.2.6.6",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-2-2-8",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-8",
  "type": "Exercise",
  "number": "4.2.6.7",
  "title": "",
  "body": "  .   Product Rule: .  Note: the equation is also acceptable as a solution.  Factoring is sometimes done, but depends on the problem we are trying to solve and what we are trying to do with the derivative.  "
},
{
  "id": "exercises-set-sec-4-2-2-9",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-9",
  "type": "Exercise",
  "number": "4.2.6.8",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-2-2-10",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-10",
  "type": "Exercise",
  "number": "4.2.6.9",
  "title": "",
  "body": "  .   If we have a product of 3 functions we need to first consider 2 of the functions as a sigle function that includes a product. .  "
},
{
  "id": "exercises-set-sec-4-2-2-11",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-11",
  "type": "Exercise",
  "number": "4.2.6.10",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-2-2-12",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-12",
  "type": "Exercise",
  "number": "4.2.6.11",
  "title": "",
  "body": "  .   Quotient Rule: .  We can simplify this : .  "
},
{
  "id": "exercises-set-sec-4-2-2-13",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-13",
  "type": "Exercise",
  "number": "4.2.6.12",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-2-2-14",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-14",
  "type": "Exercise",
  "number": "4.2.6.13",
  "title": "",
  "body": "  .   Quotient Rule: .  "
},
{
  "id": "exercises-set-sec-4-2-2-15",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-15",
  "type": "Exercise",
  "number": "4.2.6.14",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-2-2-16",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-16",
  "type": "Exercise",
  "number": "4.2.6.15",
  "title": "",
  "body": "  .   Quotient Rule: .  "
},
{
  "id": "exercises-set-sec-4-2-2-17",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-17",
  "type": "Exercise",
  "number": "4.2.6.16",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-2-2-18",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-18",
  "type": "Exercise",
  "number": "4.2.6.17",
  "title": "",
  "body": "  .   Quotient Rule with embedded Product Rule:   "
},
{
  "id": "exercises-set-sec-4-2-2-19",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-2-19",
  "type": "Exercise",
  "number": "4.2.6.18",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-2-3-2",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-3-2",
  "type": "Exercise",
  "number": "4.2.6.19",
  "title": "",
  "body": "  , where .    .  "
},
{
  "id": "exercises-set-sec-4-2-3-3",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-3-3",
  "type": "Exercise",
  "number": "4.2.6.20",
  "title": "",
  "body": "  , where .  "
},
{
  "id": "exercises-set-sec-4-2-3-4",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-3-4",
  "type": "Exercise",
  "number": "4.2.6.21",
  "title": "",
  "body": "  , where .    .  "
},
{
  "id": "exercises-set-sec-4-2-3-5",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-3-5",
  "type": "Exercise",
  "number": "4.2.6.22",
  "title": "",
  "body": "  , where .  "
},
{
  "id": "exercises-set-sec-4-2-4",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-4",
  "type": "Exercise",
  "number": "4.2.6.23",
  "title": "",
  "body": " The profit function at the widget factory is . Find the maximum profit.    is a downward opening parabola, so the maximum occurs where the derivative (slope of the tangent line) is 0.  Find the critical point: , So .  The maximum profit is .  "
},
{
  "id": "exercises-set-sec-4-2-5",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-5",
  "type": "Exercise",
  "number": "4.2.6.24",
  "title": "",
  "body": " The demand function for a fad item is , with measured in months. When is the demand the highest?  "
},
{
  "id": "exercises-set-sec-4-2-6",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-6",
  "type": "Exercise",
  "number": "4.2.6.25",
  "title": "",
  "body": " The cost function for gizmo production is , for . Find the equation of the line tangent to the cost function at .   For the tangent line we need a point and a slope, and once we have those we find the equation of the line.  Point: When , .  Slope: , so at we have .  The line: .  So we have , or in slope intercept form: .  "
},
{
  "id": "exercises-set-sec-4-2-7",
  "level": "2",
  "url": "sec-4-2DerivativesCombinationFunctions.html#exercises-set-sec-4-2-7",
  "type": "Exercise",
  "number": "4.2.6.26",
  "title": "",
  "body": " The formula for the current value of a particular revenue stream is . Find the equation of the line tangent to the cost function at .  "
},
{
  "id": "sec-4-3-ChainRule",
  "level": "1",
  "url": "sec-4-3-ChainRule.html",
  "type": "Section",
  "number": "4.3",
  "title": "The Chain Rule",
  "body": " The Chain Rule  In the last two sections we learned rules to symbolically differentiate some functions. To summarize, we have established some elementary formulas and some arithmetic rules.   Elementary Formulas  If , then .  If , then .  If , then , for any nonzero number n.  If , then .  If , then .  If , then    Arithmetic derivative rules  Arithmetic derivative rules :  Scalar multiple rule : The derivative of is .  Sum and difference rule : The derivative of is .  Product Rule : The derivative of is .  Quotient Rule : The derivative of is .   The other way we traditionally build functions from simpler functions is by use of composition. We want to be able to take derivatives of functions like , , and .   Chain rule   The derivative of is . In other words, .     Simple chain rule   Find the derivative of the following functions:            We could do this problem by expanding it to a polynomial and using rules from the previous section, but that is much too hard. We can write as where and . We use the rules from the previous section to compute and . Composing we get . Thus .    We can write as where and . We use the rules from the previous section to compute and . Composing we get . Thus     We can write as where and . We use the rules from the previous section to compute and . Composing we get . Thus .        Theory and justification  As in the previous section, we will use local linearity to justify our derivative rule.  To simplify notation, we will let . We will be substituting into and so we will be using the functions , with and , with .  The composition of and can then be written as .  The coefficient of the linear term is the product of the coefficients of the two linear terms we began with. Hence we find that .    The Chain rule in other notation  For the problems above, we used the prime notation, , , , etc, for derivatives. There is also a fractional notation for derivatives, , , or , , , that is commonly used. Intuitively, when we have zoomed in far enough for the graph of to look like a straight line, then the derivative is the small unit of rise over the small unit of run. With that notation the chain rule has a nice formulation where it reduces to the usual rules for multiplying fractions.   Chain Rule (fractional notation version)  If and so , then .     Successive processes   We have two processes that need to be run in succession to produce gizmos. The yields of the two processes are given by:  .  Find the rate of production in terms of the amount of raw material.    We want to find the derivatives of the individual processes and then use the chain rule.  .  Thus .  The rate of production is a linear function of the amount of raw material used.     Chain rule with separate functions   Find for for the given and .    and .  and .  and .           .  (Notice that the two derivatives are in terms of different variables. We need to convert to a single variable.)         Warning for this method :  We tend to use x as the variable for almost all functions. When we use the chain rule we need to remember that the input for the second function is the output from the first function. It is safest to use separate variable for the two functions.   Special cases :  Two special cases of the chain rule come up so often, it is worth explicitly noting them.   The general power rule   . This is simply the chain rule when the second function is a power.    The chain rule with a linear function         Reading Check  Reading check, The Chain Rule   This question checks your reading comprehension of the material is section 4.3, The Chain Rule, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    If , and , so , then .    The derivative of is .    If , and , so , then .    The derivative of is .    If then .    If then .    None of the above                Exercises: The Chain Rule    Find the derivatives of the following functions.     .   Let , then , and .     .     .   Let , with . .  Another way to think of the chain rule is that we need to take derivatives of the different functions that make up the composite function: .     .     .    .     .     .         .     .    .  Hint: It is easier to simplify to first.     .     .    .     .     .    .     .      For the following problems, use the following data to find the indicated derivative.    x  0 1 2 3  4 5 6 7  8 9    f(x)  3 5 7 1  9 8 4 2  0 6    f'(x)  7 6 5 4  3 2 1 0  9 8    g(x)  8 4 0 6  2 9 5 1  7 3    g'(x)  6 8 4 2  0 7 9 3  5 1       , where .    .     , where .     , where .    .     , where .     The pretax profit function is at the widget factory. The tax function is . Find the equation of the line tangent to the graph of after tax profits when .   We will need a point and a slope to construct the tangent line.  Point: when , we have  Also gives .  So the point is , .  Slope:  So at we have .  Tangent line:  So  In slope-intercept form we have .  Note that here we have approximated a composite function by something much simpler. Finding tax meant we had to first find the profit, and then plug that profit into the tax function. Now, all we have to do is plug our value of into the linear equation!    The revenue function for gizmos is . The commission cost to the sales force is . Find the equation of the tangent line to commissions as a function of quantity, when .    "
},
{
  "id": "sec-4-3-ChainRule-4-2",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Arithmetic derivative rules "
},
{
  "id": "sec-4-3-ChainRule-4-3",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scalar multiple rule "
},
{
  "id": "sec-4-3-ChainRule-4-4",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-4-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sum and difference rule "
},
{
  "id": "sec-4-3-ChainRule-4-5",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Product Rule "
},
{
  "id": "sec-4-3-ChainRule-4-6",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quotient Rule "
},
{
  "id": "sec-4-3-ChainRule-6",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-6",
  "type": "Claim",
  "number": "4.3.1",
  "title": "Chain rule.",
  "body": " Chain rule   The derivative of is . In other words, .   "
},
{
  "id": "sec-4-3-ChainRule-7",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-7",
  "type": "Example",
  "number": "4.3.2",
  "title": "Simple chain rule.",
  "body": " Simple chain rule   Find the derivative of the following functions:            We could do this problem by expanding it to a polynomial and using rules from the previous section, but that is much too hard. We can write as where and . We use the rules from the previous section to compute and . Composing we get . Thus .    We can write as where and . We use the rules from the previous section to compute and . Composing we get . Thus     We can write as where and . We use the rules from the previous section to compute and . Composing we get . Thus .      "
},
{
  "id": "sec-4-3-ChainRule-10",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-10",
  "type": "Example",
  "number": "4.3.3",
  "title": "Successive processes.",
  "body": " Successive processes   We have two processes that need to be run in succession to produce gizmos. The yields of the two processes are given by:  .  Find the rate of production in terms of the amount of raw material.    We want to find the derivatives of the individual processes and then use the chain rule.  .  Thus .  The rate of production is a linear function of the amount of raw material used.   "
},
{
  "id": "sec-4-3-ChainRule-11",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#sec-4-3-ChainRule-11",
  "type": "Example",
  "number": "4.3.4",
  "title": "Chain rule with separate functions.",
  "body": " Chain rule with separate functions   Find for for the given and .    and .  and .  and .           .  (Notice that the two derivatives are in terms of different variables. We need to convert to a single variable.)       "
},
{
  "id": "Reading_Check_Sec4.3",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#Reading_Check_Sec4.3",
  "type": "Reading Question",
  "number": "4.3.1",
  "title": "Reading check, The Chain Rule.",
  "body": "Reading check, The Chain Rule   This question checks your reading comprehension of the material is section 4.3, The Chain Rule, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    If , and , so , then .    The derivative of is .    If , and , so , then .    The derivative of is .    If then .    If then .    None of the above             "
},
{
  "id": "exercises-set-sec-4-3-2-2",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-2",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "  .   Let , then , and .  "
},
{
  "id": "exercises-set-sec-4-3-2-3",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-3",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-3-2-4",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-4",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "  .   Let , with . .  Another way to think of the chain rule is that we need to take derivatives of the different functions that make up the composite function: .  "
},
{
  "id": "exercises-set-sec-4-3-2-5",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-5",
  "type": "Exercise",
  "number": "4.3.4",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-3-2-6",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-6",
  "type": "Exercise",
  "number": "4.3.5",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-4-3-2-7",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-7",
  "type": "Exercise",
  "number": "4.3.6",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-3-2-8",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-8",
  "type": "Exercise",
  "number": "4.3.7",
  "title": "",
  "body": "  .      "
},
{
  "id": "exercises-set-sec-4-3-2-9",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-9",
  "type": "Exercise",
  "number": "4.3.8",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-3-2-10",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-10",
  "type": "Exercise",
  "number": "4.3.9",
  "title": "",
  "body": "  .    .  Hint: It is easier to simplify to first.  "
},
{
  "id": "exercises-set-sec-4-3-2-11",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-11",
  "type": "Exercise",
  "number": "4.3.10",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-3-2-12",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-12",
  "type": "Exercise",
  "number": "4.3.11",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-4-3-2-13",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-13",
  "type": "Exercise",
  "number": "4.3.12",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-3-2-14",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-14",
  "type": "Exercise",
  "number": "4.3.13",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-4-3-2-15",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-2-15",
  "type": "Exercise",
  "number": "4.3.14",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-3-3-2",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-3-2",
  "type": "Exercise",
  "number": "4.3.15",
  "title": "",
  "body": "  , where .    .  "
},
{
  "id": "exercises-set-sec-4-3-3-3",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-3-3",
  "type": "Exercise",
  "number": "4.3.16",
  "title": "",
  "body": "  , where .  "
},
{
  "id": "exercises-set-sec-4-3-3-4",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-3-4",
  "type": "Exercise",
  "number": "4.3.17",
  "title": "",
  "body": "  , where .    .  "
},
{
  "id": "exercises-set-sec-4-3-3-5",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-3-5",
  "type": "Exercise",
  "number": "4.3.18",
  "title": "",
  "body": "  , where .  "
},
{
  "id": "exercises-set-sec-4-3-4",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-4",
  "type": "Exercise",
  "number": "4.3.19",
  "title": "",
  "body": " The pretax profit function is at the widget factory. The tax function is . Find the equation of the line tangent to the graph of after tax profits when .   We will need a point and a slope to construct the tangent line.  Point: when , we have  Also gives .  So the point is , .  Slope:  So at we have .  Tangent line:  So  In slope-intercept form we have .  Note that here we have approximated a composite function by something much simpler. Finding tax meant we had to first find the profit, and then plug that profit into the tax function. Now, all we have to do is plug our value of into the linear equation!  "
},
{
  "id": "exercises-set-sec-4-3-5",
  "level": "2",
  "url": "sec-4-3-ChainRule.html#exercises-set-sec-4-3-5",
  "type": "Exercise",
  "number": "4.3.20",
  "title": "",
  "body": " The revenue function for gizmos is . The commission cost to the sales force is . Find the equation of the tangent line to commissions as a function of quantity, when .  "
},
{
  "id": "sec-4-4-DifferentiationComputerAlgebra",
  "level": "1",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html",
  "type": "Section",
  "number": "4.4",
  "title": "Differentiation Using Computer Algebra",
  "body": " Differentiation Using Computer Algebra  As we noted in , in this book we are limiting ourselves to mathematical tools that the student can reasonably expect to find in a generic work environment. That is one of the reasons for focusing on using spreadsheets and Excel. However, we will also look at using free web tools, particularly as a means of doing symbolic manipulation. Differentiation is one of those operations that can be done with free tools available on the web. The student in this course will be expected to routinely do symbolic differentiation by hand. However, it is good to be able to check your work. We also want tools that will work reliably with messier problems.  In working with derivatives, we have looked at three basic problems:  Given a function, find a formula for its derivative. A related question is finding the marginal function.  Given a function, find the value of the derivative at a particular point. We do this when we want a rate of change at a particular point.  Given a function, find where the derivative is 0. We do this when we are trying to find minimum or maximum values of the function.    There are a number of websites that will take symbolic derivatives. We start with Wolfram|Alpha, which is available at http:\/\/www.wolframalpha.com .   A simple derivative with Alpha   Use Wolfram|Alpha to find the derivative of .    When you call the website, you get an input bar much as you would with your favorite search engine.   The interface for Wolfram|Alpha is rather robust. While Wolfram|Alpha lets you use a Math Input pallette, we can ask the question in plain English. In our case, we would like to find the derivative of with respect to . Some of the ways of asking that question are:  find the derivative of (x^3+5x+7)  find the derivative of (x^3+5x+7) with respect to x  derivative of (x^3+5x+7)  differentiate (x^3+5x+7) with respect to x  differentiate (x^3+5x+7)  D (x^3+5x+7)  d\/dx (x^3+5x+7)  (x^3+5x+7)'    For all of these, the website provides the same answer.     Note that the response tells us the question that Wolfram|Alpha is answering. This helps us check that we have been properly understood.  It is worthwhile to note that Wolfram|Alpha has an option to show step-by-step solutions with a paid subscription. Alternatives can be found by searching for \"symbolic derivative calculator\".   Wolfram|Alpha understands the convention that the variable for math problems is typically . If we don't specify the variable with respect to which we are differentiating, it will guess that is our variable. Other letters are treated as constants unless we use function notation with parentheses. Thus we can use Wolfram|Alpha to check our differentiation rules.   Recalling the quotient rule   Use Wolfram|Alpha to recall the quotient rule.    See the image below.     It should be noted that Wolfram|Alpha will not work with long variable names like Principal or MonthlyPayment. We simply need to change variables to work with Wolfram|Alpha.   Working with long variable names   The cost of widgets is given by: .  Find the rate of change of cost with respect to quantity when . (We are using the derivative to estimate the marginal cost.)    Since we will use Wolfram|Alpha, we want to convert the equation to use single letter variables: . We can input this as c=2000+10*q+.001*q^2 .  We want to evaluate the derivative with respect to when .   Thus, when , increasing production by 1 widget increases cost by $12.    The third basic derivative problem was to find a maximum or minimum. For extrema problems, we want to find where the derivative is 0, since the extrema can only occur at endpoints and critical points.   Exploring a business example   The cost and demand price functions of widgets are given by: .  Find the quantity that maximizes profit.    We simplify variable names to , and for quantity, cost, profit and revenue, respectively. Our formula for profit is: .  When looking for a maximum, we always start by looking at a graph of the function in question.   From the graph, it is clear that we have a single maximum for the profit function and it occurs near . To find this point, we want to take the derivative and set it equal to zero, or we want to use the solve command on the derivative. We enter the command  solve(derivative 100q\/(1+.01q)-(2000+10q+.001q^2 ) with respect to q)  .   We need to do a bit of interpretation since Wolfram|Alpha is using numerical methods with complex numbers. In particular, the answers have a zero imaginary part. We are also looking for a positive number. Thus, we conclude profit is maximized at 209.8 widgets.    In looking at free software on the web for taking derivatives we started with Wolfram|Alpha because we can use it throughout the book when Excel does not solve our needs. It is also supported by the company that produces Mathematica , so it should stay available for the foreseeable future. Another useful source are the solvers from Symbolab https:\/\/www.symbolab.com\/solver . Symbolab has a collection of solvers for the topics in this course.   It also has a section that lets you do drill and practice with the techniques we have learned. Like Wolfram|Alpha, it gives the option of step-by-step solutions. I find the site a bit more user friendly for math students.  For individual problems we may want to use other software. For finding derivatives, a quick web search found http:\/\/www.derivative-calculator.net\/ which is nicer if you are simply checking your work. As with Wolfram|Alpha, the derivative calculator shows you the problem in math form so you can check your syntax.   However, the show steps formatting is nicer since hovering over one step shows the change for that step in the next line.   You may find other websites for doing derivatives as well.   Reading Check  Reading check, Differentiation Using Computer Algebra   This question checks your reading comprehension of the material is section 4.4, Differentiation Using Computer Algebra, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Differentiation can be done with free tools available on the web.    Some free tools give step by step work for symbolic differentiation.    Desmos is a free tool available on the web that does symbolic differentiation.    The free tools for differentiation all use the same syntax.    Symbolab is a free tool available on the web that does symbolic differentiation.    Wolfram|Alpha is a free tool available on the web that does symbolic differentiation.    None of the above                Exercises: Differentiation Using Computer Algebra Problems    Find the derivative of the given function.         So .              Wolfram returns several forms (they differ by some simple algebra). We can choose the one that has the form we find most useful. In this case we could choose for instance: .  It’s a nice compact answer that avoids decimal approximations.              Wolfram writes ln as log but still means base . The common log of x would be log(10,x) . To stick with our notation we would say .  Note that Wolfram allows us to copy the text. Hover over the answer and under “A” and you will find plaintext that can be copied. This can be edited into a word document or an Excel document.             Wolfram does not work well with whole word variables. Edit the equation (you can do this in Wolfram) and let and . This gives the following derivative:               Going back to the original notation we have , where .               .           Evaluate the definite derivative at the given point.     at .     .     at .     at .       at .     at .   Rewriting the function as we get:      at .     at .        Find the critical points of the given function. Identify each as a local minimum, local maximum, or neither.     .     .   We find the critical point by solving: Solve (derivative of q*100*(.9)^q)= 0    Then we plot the original function. We want to know if is a max, min or neither. So graph over the interval :   So the function has a local maximum at     .     .   Wolfram shows that the critical point is at .   Graphing the original function from 0 to 2000 shows the critical point is a maximum.      .        We set the derivative equal to 0. The general answer is complicated but the real valued answer is what we are looking for.   So the critical point is at .  We want to graph over some interval that contains . Big pictures are usually nice, so let’s choose the interval .   The function has a (local) maximum at the critical point.     "
},
{
  "id": "sec-4-4-DifferentiationComputerAlgebra-5",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#sec-4-4-DifferentiationComputerAlgebra-5",
  "type": "Example",
  "number": "4.4.1",
  "title": "A simple derivative with Alpha.",
  "body": " A simple derivative with Alpha   Use Wolfram|Alpha to find the derivative of .    When you call the website, you get an input bar much as you would with your favorite search engine.   The interface for Wolfram|Alpha is rather robust. While Wolfram|Alpha lets you use a Math Input pallette, we can ask the question in plain English. In our case, we would like to find the derivative of with respect to . Some of the ways of asking that question are:  find the derivative of (x^3+5x+7)  find the derivative of (x^3+5x+7) with respect to x  derivative of (x^3+5x+7)  differentiate (x^3+5x+7) with respect to x  differentiate (x^3+5x+7)  D (x^3+5x+7)  d\/dx (x^3+5x+7)  (x^3+5x+7)'    For all of these, the website provides the same answer.    "
},
{
  "id": "sec-4-4-DifferentiationComputerAlgebra-10",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#sec-4-4-DifferentiationComputerAlgebra-10",
  "type": "Example",
  "number": "4.4.2",
  "title": "Recalling the quotient rule.",
  "body": " Recalling the quotient rule   Use Wolfram|Alpha to recall the quotient rule.    See the image below.    "
},
{
  "id": "sec-4-4-DifferentiationComputerAlgebra-12",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#sec-4-4-DifferentiationComputerAlgebra-12",
  "type": "Example",
  "number": "4.4.3",
  "title": "Working with long variable names.",
  "body": " Working with long variable names   The cost of widgets is given by: .  Find the rate of change of cost with respect to quantity when . (We are using the derivative to estimate the marginal cost.)    Since we will use Wolfram|Alpha, we want to convert the equation to use single letter variables: . We can input this as c=2000+10*q+.001*q^2 .  We want to evaluate the derivative with respect to when .   Thus, when , increasing production by 1 widget increases cost by $12.   "
},
{
  "id": "sec-4-4-DifferentiationComputerAlgebra-14",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#sec-4-4-DifferentiationComputerAlgebra-14",
  "type": "Example",
  "number": "4.4.4",
  "title": "Exploring a business example.",
  "body": " Exploring a business example   The cost and demand price functions of widgets are given by: .  Find the quantity that maximizes profit.    We simplify variable names to , and for quantity, cost, profit and revenue, respectively. Our formula for profit is: .  When looking for a maximum, we always start by looking at a graph of the function in question.   From the graph, it is clear that we have a single maximum for the profit function and it occurs near . To find this point, we want to take the derivative and set it equal to zero, or we want to use the solve command on the derivative. We enter the command  solve(derivative 100q\/(1+.01q)-(2000+10q+.001q^2 ) with respect to q)  .   We need to do a bit of interpretation since Wolfram|Alpha is using numerical methods with complex numbers. In particular, the answers have a zero imaginary part. We are also looking for a positive number. Thus, we conclude profit is maximized at 209.8 widgets.   "
},
{
  "id": "Reading_Check_Sec4.4",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#Reading_Check_Sec4.4",
  "type": "Reading Question",
  "number": "4.4.1",
  "title": "Reading check, Differentiation Using Computer Algebra.",
  "body": "Reading check, Differentiation Using Computer Algebra   This question checks your reading comprehension of the material is section 4.4, Differentiation Using Computer Algebra, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Differentiation can be done with free tools available on the web.    Some free tools give step by step work for symbolic differentiation.    Desmos is a free tool available on the web that does symbolic differentiation.    The free tools for differentiation all use the same syntax.    Symbolab is a free tool available on the web that does symbolic differentiation.    Wolfram|Alpha is a free tool available on the web that does symbolic differentiation.    None of the above             "
},
{
  "id": "exercises-set-sec-4-4-2-2",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-2",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": "      So .  "
},
{
  "id": "exercises-set-sec-4-4-2-3",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-3",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-4-2-4",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-4",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": "      Wolfram returns several forms (they differ by some simple algebra). We can choose the one that has the form we find most useful. In this case we could choose for instance: .  It’s a nice compact answer that avoids decimal approximations.  "
},
{
  "id": "exercises-set-sec-4-4-2-5",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-5",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-4-2-6",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-6",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": "      Wolfram writes ln as log but still means base . The common log of x would be log(10,x) . To stick with our notation we would say .  Note that Wolfram allows us to copy the text. Hover over the answer and under “A” and you will find plaintext that can be copied. This can be edited into a word document or an Excel document.  "
},
{
  "id": "exercises-set-sec-4-4-2-7",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-7",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-4-2-8",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-8",
  "type": "Exercise",
  "number": "4.4.7",
  "title": "",
  "body": "     Wolfram does not work well with whole word variables. Edit the equation (you can do this in Wolfram) and let and . This gives the following derivative:   "
},
{
  "id": "exercises-set-sec-4-4-2-9",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-9",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-4-2-10",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-10",
  "type": "Exercise",
  "number": "4.4.9",
  "title": "",
  "body": "      Going back to the original notation we have , where .  "
},
{
  "id": "exercises-set-sec-4-4-2-11",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-11",
  "type": "Exercise",
  "number": "4.4.10",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-4-2-12",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-12",
  "type": "Exercise",
  "number": "4.4.11",
  "title": "",
  "body": "       .  "
},
{
  "id": "exercises-set-sec-4-4-2-13",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-2-13",
  "type": "Exercise",
  "number": "4.4.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-4-3-2",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-3-2",
  "type": "Exercise",
  "number": "4.4.13",
  "title": "",
  "body": "  at .     .  "
},
{
  "id": "exercises-set-sec-4-4-3-3",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-3-3",
  "type": "Exercise",
  "number": "4.4.14",
  "title": "",
  "body": "  at .  "
},
{
  "id": "exercises-set-sec-4-4-3-4",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-3-4",
  "type": "Exercise",
  "number": "4.4.15",
  "title": "",
  "body": "  at .    "
},
{
  "id": "exercises-set-sec-4-4-3-5",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-3-5",
  "type": "Exercise",
  "number": "4.4.16",
  "title": "",
  "body": "  at .  "
},
{
  "id": "exercises-set-sec-4-4-3-6",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-3-6",
  "type": "Exercise",
  "number": "4.4.17",
  "title": "",
  "body": "  at .   Rewriting the function as we get:   "
},
{
  "id": "exercises-set-sec-4-4-3-7",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-3-7",
  "type": "Exercise",
  "number": "4.4.18",
  "title": "",
  "body": "  at .  "
},
{
  "id": "exercises-set-sec-4-4-3-8",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-3-8",
  "type": "Exercise",
  "number": "4.4.19",
  "title": "",
  "body": "  at .    "
},
{
  "id": "exercises-set-sec-4-4-4-2",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-4-2",
  "type": "Exercise",
  "number": "4.4.20",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-4-4-3",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-4-3",
  "type": "Exercise",
  "number": "4.4.21",
  "title": "",
  "body": "  .   We find the critical point by solving: Solve (derivative of q*100*(.9)^q)= 0    Then we plot the original function. We want to know if is a max, min or neither. So graph over the interval :   So the function has a local maximum at  "
},
{
  "id": "exercises-set-sec-4-4-4-4",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-4-4",
  "type": "Exercise",
  "number": "4.4.22",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-4-4-5",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-4-5",
  "type": "Exercise",
  "number": "4.4.23",
  "title": "",
  "body": "  .   Wolfram shows that the critical point is at .   Graphing the original function from 0 to 2000 shows the critical point is a maximum.   "
},
{
  "id": "exercises-set-sec-4-4-4-6",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-4-6",
  "type": "Exercise",
  "number": "4.4.24",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-4-4-4-7",
  "level": "2",
  "url": "sec-4-4-DifferentiationComputerAlgebra.html#exercises-set-sec-4-4-4-7",
  "type": "Exercise",
  "number": "4.4.25",
  "title": "",
  "body": "     We set the derivative equal to 0. The general answer is complicated but the real valued answer is what we are looking for.   So the critical point is at .  We want to graph over some interval that contains . Big pictures are usually nice, so let’s choose the interval .   The function has a (local) maximum at the critical point.  "
},
{
  "id": "sec-4-5-SecondDerivativeConcavity",
  "level": "1",
  "url": "sec-4-5-SecondDerivativeConcavity.html",
  "type": "Section",
  "number": "4.5",
  "title": "The Second Derivative and Concavity",
  "body": " The Second Derivative and Concavity  For an intuitive definition of the derivative, we talked about zooming in on the graph until it looks like a straight line and taking the slope. For concavity, we want to zoom out a bit, so the graph curves up or down from a line.  We say that a graph is concave up if the line between two points is above the graph, or alternatively if the first derivative is increasing. (In finance, such a curve is said to be convex.) Similarly, we say that a graph is concave down if the line between two points is below the graph, or alternatively if the first derivative is decreasing. (In finance, such a curve is said to be concave.)      In determining is a curve is concave up or concave down, we want to take the second derivative of a function, or the derivative of the derivative.    For a function , the second derivative of or the derivative of , denoted as , is defined as .    We also want to recall some alternate notations we may use.    Notation : Let .  The second derivative of is denoted as or or .  The second derivative at is denoted as or .   As we have noted before, when there are several forms, we use the one that makes the most sense in the case on which we are working.   Finding second derivatives   Find the second derivative for each of the following functions:           Using our rule:                 As the last problem shows, it is often useful to simplify between taking the first and second derivatives.  If our function is the position of , then the first derivative is the rate of change or the velocity of . The second derivative is acceleration or how fast velocity changes.  Graphically, the first derivative gives the slope of the graph at a point. The second derivative tells whether the curve is concave up or concave down at that point. If the second derivative is positive at a point, the graph is bending upwards at that point. Similarly, if the second derivative is negative, the graph is concave down. This is of particular interest at a critical point where the tangent line is flat and concavity tells us if we have a relative minimum or maximum.   Second derivative test of extrema  Let be a function with . Then if , the function has a local minimum at . If , the function has a local maximum at . If , the second derivative test fails and we cannot tell if we have a local maximum, local minimum, or neither.    Second derivative tests   For the designated function and point, determine if the graph has a local minimum, local maximum, or non-extreme point, or if the second derivative test fails.             Using our rule:    x.  At , we have and . We are at a critical point, and the curve is concave up, so we have a local minimum.     .  At , we have and . We are at a critical point and the curve is concave down, so we have a local maximum.     .  At , we have . The second derivative is positive, so the curve is concave up, but since the derivative is not zero, this is not an extreme point.     .  At , we have and , so the second derivative test fails at this point. (However if we look a the graph, we can see the curve is concave up everywhere, and that this point is a local minimum.)     .  At , we have and , so the second derivative test fails at this point. (However if we look a the graph, we can see this point is neither a local minimum or a local maximum. It is a place where the graph switches from being concave up to being concave down. This is called an inflection point .)       We will use the second derivative test for finding maximums and minimums in the next chapter.   Second derivative with CAS  We can find second derivatives with our favorite CAS programs.  With Symbolab   With WolframAlpha     Second derivative in finance  The mathematical first and second derivatives are used in pricing various financial products and options that are also called derivatives. The first derivative is used to give a value to whether the underlying product has a price that goes up or down. It looks at the slope of the pricing curve. The second derivative is used to give a value to the volatility of the underlying product. It looks at how much the pricing curve bends. We will return to these uses when we look at integrals.    Reading Check  Reading check, The Second Derivative and Concavity   This question checks your reading comprehension of the material is section 4.5, The Second Derivative and Concavity, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We say that a graph is concave down if the line between any two points is below the graph.    We say that a graph is concave up if the first derivative is increasing.    We say that a graph is concave up if the line between any two points is above the graph.    If the second derivative is positive we are at a local minimum.    If the second derivative is positive we are at a local maximum.    If the second derivative is zero we cannot have a local maximum.    The second derivative of a function is the derivative of the derivative of the function.    The second derivative test fails if we are not at a critical point.    None of the above                Exercises: The Second Derivative and Concavity Problems      Find the first and second derivatives of the given function.  Determine where the function is concave up and where it is concave down.  Find the critical points of the function. Classify each as a local minimum, a local maximum, neither, or not a local extremum.                  The second derivative is always positive, so the function is always concave up  There is one critical point at . It is a local minimum.                        The function is concave down, where the second derivative is negative, that is for . It is concave up outside this region.    There are critical points when the derivative is undefined or 0. The only critical points are when and . When , , so we have a local minimum. When , , so we have a local maximum.                         The function is concave down, where the second derivative is negative, which for our function is when the denominator is negative. The function is concave down when . It is concave up outside this region.    There are critical points when is 0 or 2. When , , so we have a local minimum. When , the second derivative is negative and we have a local maximum.                        The second derivative is always negative, to the function is always concave down.  There is one critical point at . It is a local maximum.                       The second derivative is always positive, to the function is always concave up.  The first derivative is always positive. There are no critical points.        Identify which curve is , , and .         Note that local maximums of a function must correspond to zeroes of its derivative. The original function is F (green). Its derivative is D (Purple). The second derivative is E (black). .         Looking at the middle segment of the curves, the green curve is a downward facing parabola, whose derivative is a line with a negative slope like the purples curve, whose derivative is a negative constant like the black line. .      For the next set of problems, you need to know the formula for the price of a zero coupon bond given the face value, the interest rate, and the time to maturity. For such instruments we use the formula . (Be aware that a rate of 4% is a rate of 0.04.)  For each problem give:  The cost of the bond as described.  The first derivative of cost as a function of rate. (This measures risk of interest rate change.)  The second derivative of cost as a function of rate. (This measures the value of an option on the bond.)      The face value of the bond is $1000. The interest rate is currently 4%. The bond matures in 10 years.    The face value of the bond is $1000. The interest rate is currently 4%. The bond matures in 30 years.                       The face value of the bond is $1000. The interest rate is currently 6%. The bond matures in 10 years.    The face value of the bond is $1000. The interest rate is currently 3%. The bond matures in 20 years.                        "
},
{
  "id": "sec-4-5-SecondDerivativeConcavity-6",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#sec-4-5-SecondDerivativeConcavity-6",
  "type": "Definition",
  "number": "4.5.1",
  "title": "",
  "body": "  For a function , the second derivative of or the derivative of , denoted as , is defined as .   "
},
{
  "id": "sec-4-5-SecondDerivativeConcavity-10",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#sec-4-5-SecondDerivativeConcavity-10",
  "type": "Example",
  "number": "4.5.2",
  "title": "Finding second derivatives.",
  "body": " Finding second derivatives   Find the second derivative for each of the following functions:           Using our rule:                "
},
{
  "id": "sec-4-5-SecondDerivativeConcavity-12",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#sec-4-5-SecondDerivativeConcavity-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "velocity acceleration "
},
{
  "id": "sec-4-5-SecondDerivativeConcavity-14",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#sec-4-5-SecondDerivativeConcavity-14",
  "type": "Insight",
  "number": "4.5.3",
  "title": "Second derivative test of extrema.",
  "body": " Second derivative test of extrema  Let be a function with . Then if , the function has a local minimum at . If , the function has a local maximum at . If , the second derivative test fails and we cannot tell if we have a local maximum, local minimum, or neither.  "
},
{
  "id": "sec-4-5-SecondDerivativeConcavity-15",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#sec-4-5-SecondDerivativeConcavity-15",
  "type": "Example",
  "number": "4.5.4",
  "title": "Second derivative tests.",
  "body": " Second derivative tests   For the designated function and point, determine if the graph has a local minimum, local maximum, or non-extreme point, or if the second derivative test fails.             Using our rule:    x.  At , we have and . We are at a critical point, and the curve is concave up, so we have a local minimum.     .  At , we have and . We are at a critical point and the curve is concave down, so we have a local maximum.     .  At , we have . The second derivative is positive, so the curve is concave up, but since the derivative is not zero, this is not an extreme point.     .  At , we have and , so the second derivative test fails at this point. (However if we look a the graph, we can see the curve is concave up everywhere, and that this point is a local minimum.)     .  At , we have and , so the second derivative test fails at this point. (However if we look a the graph, we can see this point is neither a local minimum or a local maximum. It is a place where the graph switches from being concave up to being concave down. This is called an inflection point .)      "
},
{
  "id": "Reading_Check_Sec4.5",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#Reading_Check_Sec4.5",
  "type": "Reading Question",
  "number": "4.5.1",
  "title": "Reading check, The Second Derivative and Concavity.",
  "body": "Reading check, The Second Derivative and Concavity   This question checks your reading comprehension of the material is section 4.5, The Second Derivative and Concavity, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We say that a graph is concave down if the line between any two points is below the graph.    We say that a graph is concave up if the first derivative is increasing.    We say that a graph is concave up if the line between any two points is above the graph.    If the second derivative is positive we are at a local minimum.    If the second derivative is positive we are at a local maximum.    If the second derivative is zero we cannot have a local maximum.    The second derivative of a function is the derivative of the derivative of the function.    The second derivative test fails if we are not at a critical point.    None of the above             "
},
{
  "id": "exercises-set-sec-4-5-2-2",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-2",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": "             The second derivative is always positive, so the function is always concave up  There is one critical point at . It is a local minimum.    "
},
{
  "id": "exercises-set-sec-4-5-2-3",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-3",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-5-2-4",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-4",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "              The function is concave down, where the second derivative is negative, that is for . It is concave up outside this region.    There are critical points when the derivative is undefined or 0. The only critical points are when and . When , , so we have a local minimum. When , , so we have a local maximum.     "
},
{
  "id": "exercises-set-sec-4-5-2-5",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-5",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-5-2-6",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-6",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "              The function is concave down, where the second derivative is negative, which for our function is when the denominator is negative. The function is concave down when . It is concave up outside this region.    There are critical points when is 0 or 2. When , , so we have a local minimum. When , the second derivative is negative and we have a local maximum.     "
},
{
  "id": "exercises-set-sec-4-5-2-7",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-7",
  "type": "Exercise",
  "number": "4.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-5-2-8",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-8",
  "type": "Exercise",
  "number": "4.5.7",
  "title": "",
  "body": "             The second derivative is always negative, to the function is always concave down.  There is one critical point at . It is a local maximum.    "
},
{
  "id": "exercises-set-sec-4-5-2-9",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-9",
  "type": "Exercise",
  "number": "4.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-4-5-2-10",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-2-10",
  "type": "Exercise",
  "number": "4.5.9",
  "title": "",
  "body": "             The second derivative is always positive, to the function is always concave up.  The first derivative is always positive. There are no critical points.    "
},
{
  "id": "exercises-set-sec-4-5-3-2",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-3-2",
  "type": "Exercise",
  "number": "4.5.10",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-set-sec-4-5-3-3",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-3-3",
  "type": "Exercise",
  "number": "4.5.11",
  "title": "",
  "body": "   Note that local maximums of a function must correspond to zeroes of its derivative. The original function is F (green). Its derivative is D (Purple). The second derivative is E (black). .  "
},
{
  "id": "exercises-set-sec-4-5-3-4",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-3-4",
  "type": "Exercise",
  "number": "4.5.12",
  "title": "",
  "body": "  "
},
{
  "id": "exercises-set-sec-4-5-3-5",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-3-5",
  "type": "Exercise",
  "number": "4.5.13",
  "title": "",
  "body": "   Looking at the middle segment of the curves, the green curve is a downward facing parabola, whose derivative is a line with a negative slope like the purples curve, whose derivative is a negative constant like the black line. .  "
},
{
  "id": "exercises-set-sec-4-5-4-2",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-4-2",
  "type": "Exercise",
  "number": "4.5.14",
  "title": "",
  "body": " The face value of the bond is $1000. The interest rate is currently 4%. The bond matures in 10 years.  "
},
{
  "id": "exercises-set-sec-4-5-4-3",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-4-3",
  "type": "Exercise",
  "number": "4.5.15",
  "title": "",
  "body": " The face value of the bond is $1000. The interest rate is currently 4%. The bond matures in 30 years.                     "
},
{
  "id": "exercises-set-sec-4-5-4-4",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-4-4",
  "type": "Exercise",
  "number": "4.5.16",
  "title": "",
  "body": " The face value of the bond is $1000. The interest rate is currently 6%. The bond matures in 10 years.  "
},
{
  "id": "exercises-set-sec-4-5-4-5",
  "level": "2",
  "url": "sec-4-5-SecondDerivativeConcavity.html#exercises-set-sec-4-5-4-5",
  "type": "Exercise",
  "number": "4.5.17",
  "title": "",
  "body": " The face value of the bond is $1000. The interest rate is currently 3%. The bond matures in 20 years.                     "
},
{
  "id": "sec-5-1-ImplicitDifferentiation",
  "level": "1",
  "url": "sec-5-1-ImplicitDifferentiation.html",
  "type": "Section",
  "number": "5.1",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation  We often run into situations where is expressed not as a function of , but as being in a relation with . A familiar example is the equation for a circle of radius 5, .  We recall that a circle is not actually the graph of a function. It is, however, the combined graph of the two functions representing the top and bottom halves of the circle.  We have two approaches if we want to find the slope of the line tangent to the circle at . We could first use algebra to express as a function of , and then use our rules to find the derivative. That approach works in this problem but will fail with more complicated relations. The alternative method is to say that is implicitly a function of . We can then use the chain rule to take the derivative of the relation, with the derivative of being designated as . We can then solve for in terms of and . This second method is called implicit differentiation.  We start by trying both approaches on the equation of a circle.   Tangent to a circle   Find the equation of the line tangent to at .    Solution A  To find the equation of a line we need a point and a slope. We already have the point at . To find the slope, we can express the circle as the graph of 2 functions. We first solve for : . We then take the square root to produce 2 functions. .  The point is on the first function, which is the top half of the circle, so we take its derivative and evaluate at . .  Thus the tangent line, in point-slope form, is: .    Solution B  To find the equation of a line we need a point and a slope. We already have the point at . To find the slope, we take the derivative of our equation. Since we do not have y as a function of , we simply note that its derivative is the placeholder . Recall that , the derivative of with respect to , is simply 1. .  We then solve for and substitute our point in for . .  When we substitute our point in for we get the same value, . Thus the tangent line, in point-slope form, is: .    For the equation of a circle, either method works. We may encounter relations where solving for an explicit function is hard or impossible.   Differentiation of a price-quantity relationship   The quantity and demand price for widgets satisfy the relation , with , where quantity is in thousands of units. If I am currently selling 20,000 widgets, what is the relationship between change in quantity and change in price?    Instead of solving for quantity as an explicit function of price, we will implicitly differentiate. .  Since quantity is in thousands of units, if we are selling 20,000 widgets, and . Substituting those values into the formula for the derivative of price with respect to quantity, we see . We increase sales by 1000 by dropping price by $1.28.    For the first two examples, the relation was quadratic, so it was straightforward to find the derivative by either solving for an explicit function or by differentiating implicitly. However, if the relation more complicated we will find implicit differentiation easier than solving for the function.   Another price-quantity relationship   The quantity and demand price for gizmos satisfy the relation , with , where quantity is in thousands of units. If I am currently selling 25,000 widgets, what is the relationship between change in quantity and change in price?    There is no easy method to solve this relation for either price or quantity as an explicit function of the other. Instead, we will implicitly differentiate. .  Since quantity is in thousands of units, if we are selling 25,000 widgets, and . Substituting those values into the formula for the derivative of price with respect to quantity, we see .  We increase sales by 1000 by dropping price by $0.121.     A standard result from economics is the Cobb-Douglas equation that claims , where , , and represent total production, labor, and capital, respectively. In the classical model .   This can be understood as a relation involving capital and labor. An interesting question is to ask for the rate of change of capital with respect to labor, or how increasing or reducing capital investment will raise or lower labor costs.   Differentiation of Cobb-Douglas   A widget manufacturer has a production function given by .  The manufacturer currently uses 81 units of labor and 16 units of capital. Find the derivative of labor with respect to capital and interpret your result.    We implicitly differentiate our equation with respect to capital. .  Substituting in our values for and K we see that and . This means, if we want to keep level production, changing capital investment by 1 unit allows us to change labor by units.     Implicit differentiation using CAS  As with regular differentiation, we can use online computer algebra systems to do implicit differentiation. The easiest way to do this is with a web search for implicit differentiation calculator.   The first option we are given is a widget interface for WolframAlpha. It easily lets us do the first example in this section.   The second option from the search takes us to a calculator from Symbolab. It will easily do the second example from this section.   You should notice that the Symbolab calculator lets you use other variables and has an easy option for showing step by step solutions.    Summary  Implicit differentiation is an application of the chain rule. To use this technique we need an equation between two variables that we can think of as implicitly defining one variable as a function of the other. If assume one variable is implicitly a function of the other, differentiating the equation gives us an equation in the two variables and the derivative. We can then use algebra to solve the new equation for the derivative.    Reading Check  Reading check, Implicit Differentiation   This question checks your reading comprehension of the material is section 5.1, Implicit Differentiation, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    A relation involving two quantities implicitly defines one as a function of the other in a small region.    The textbook worked through examples of using implicit differentiation to find tangent lines to hyperbolas.    The textbook worked through examples of using implicit differentiation to find tangent lines to circles.    Implicit differentiation is used when we are given an equation between two variables and it is not solved for one of the variables.    For implicit differentiation, you need to explicitly solve for one of the variables.    Implicit differentiation is an application of the chain rule.    The textbook worked through examples of using implicit differentiation to find tangent lines to ellipses.    None of the above                Exercises: Implicit Differentiation Problems    For the following equations find the specified derivative.     . Find .   The best method is to notice this is a line with slope . Plunging ahead without noticing that: .  Solve for : .     . Find . (You can use two different methods.)     . Find .    .  For the term we need to use the product rule and for we need the chain rule. We then get .  Solve for : .     . Find .     . Find .   Some may find this easier with shorter variable labels: . Find . .  Hence .  So we have that .  So if we were to increase the quantity by 1 ( ), then there would be a decrease in price ( ) equal to the quantity divided by 3750. So a small increase in quantity would result in a (small) decrease in price.     . Find .     . Find .   Rewrite as: . Find .  We take the derivative with respect to q of both sides. In other words we apply to both sides. .     . Find .     . Find .   Take the derivative with respect to to both sides: .  Divide both sides by 5 and solve for . .     . Find .     . Find .    .     . Find .    The production function for a widget factory is . Find and . Interpret what they mean.   Part 1: Find . .  Part 2: Find . .  Part 3: Interpret. and are both negative and are reciprocals of one another. In other words: .  Since they are negative, if we increase , then will decrease and vice versa. measures the slope of ans a function of . measures the slope of ans a function of .    Let be an equation relating supply and price for gizmos. Find and . Explain what each derivative means.     . Find .    . Evaluating the derivatives: , which gives: . Next we solve for : .     "
},
{
  "id": "sec-5-1-ImplicitDifferentiation-6",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#sec-5-1-ImplicitDifferentiation-6",
  "type": "Example",
  "number": "5.1.1",
  "title": "Tangent to a circle.",
  "body": " Tangent to a circle   Find the equation of the line tangent to at .    Solution A  To find the equation of a line we need a point and a slope. We already have the point at . To find the slope, we can express the circle as the graph of 2 functions. We first solve for : . We then take the square root to produce 2 functions. .  The point is on the first function, which is the top half of the circle, so we take its derivative and evaluate at . .  Thus the tangent line, in point-slope form, is: .    Solution B  To find the equation of a line we need a point and a slope. We already have the point at . To find the slope, we take the derivative of our equation. Since we do not have y as a function of , we simply note that its derivative is the placeholder . Recall that , the derivative of with respect to , is simply 1. .  We then solve for and substitute our point in for . .  When we substitute our point in for we get the same value, . Thus the tangent line, in point-slope form, is: .   "
},
{
  "id": "sec-5-1-ImplicitDifferentiation-8",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#sec-5-1-ImplicitDifferentiation-8",
  "type": "Example",
  "number": "5.1.2",
  "title": "Differentiation of a price-quantity relationship.",
  "body": " Differentiation of a price-quantity relationship   The quantity and demand price for widgets satisfy the relation , with , where quantity is in thousands of units. If I am currently selling 20,000 widgets, what is the relationship between change in quantity and change in price?    Instead of solving for quantity as an explicit function of price, we will implicitly differentiate. .  Since quantity is in thousands of units, if we are selling 20,000 widgets, and . Substituting those values into the formula for the derivative of price with respect to quantity, we see . We increase sales by 1000 by dropping price by $1.28.   "
},
{
  "id": "sec-5-1-ImplicitDifferentiation-10",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#sec-5-1-ImplicitDifferentiation-10",
  "type": "Example",
  "number": "5.1.3",
  "title": "Another price-quantity relationship.",
  "body": " Another price-quantity relationship   The quantity and demand price for gizmos satisfy the relation , with , where quantity is in thousands of units. If I am currently selling 25,000 widgets, what is the relationship between change in quantity and change in price?    There is no easy method to solve this relation for either price or quantity as an explicit function of the other. Instead, we will implicitly differentiate. .  Since quantity is in thousands of units, if we are selling 25,000 widgets, and . Substituting those values into the formula for the derivative of price with respect to quantity, we see .  We increase sales by 1000 by dropping price by $0.121.   "
},
{
  "id": "sec-5-1-ImplicitDifferentiation-11-1",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#sec-5-1-ImplicitDifferentiation-11-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cobb-Douglas equation "
},
{
  "id": "sec-5-1-ImplicitDifferentiation-13",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#sec-5-1-ImplicitDifferentiation-13",
  "type": "Example",
  "number": "5.1.4",
  "title": "Differentiation of Cobb-Douglas.",
  "body": " Differentiation of Cobb-Douglas   A widget manufacturer has a production function given by .  The manufacturer currently uses 81 units of labor and 16 units of capital. Find the derivative of labor with respect to capital and interpret your result.    We implicitly differentiate our equation with respect to capital. .  Substituting in our values for and K we see that and . This means, if we want to keep level production, changing capital investment by 1 unit allows us to change labor by units.   "
},
{
  "id": "Reading_Check_Sec5.1",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#Reading_Check_Sec5.1",
  "type": "Reading Question",
  "number": "5.1.1",
  "title": "Reading check, Implicit Differentiation.",
  "body": "Reading check, Implicit Differentiation   This question checks your reading comprehension of the material is section 5.1, Implicit Differentiation, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    A relation involving two quantities implicitly defines one as a function of the other in a small region.    The textbook worked through examples of using implicit differentiation to find tangent lines to hyperbolas.    The textbook worked through examples of using implicit differentiation to find tangent lines to circles.    Implicit differentiation is used when we are given an equation between two variables and it is not solved for one of the variables.    For implicit differentiation, you need to explicitly solve for one of the variables.    Implicit differentiation is an application of the chain rule.    The textbook worked through examples of using implicit differentiation to find tangent lines to ellipses.    None of the above             "
},
{
  "id": "exercises-set-sec-5-1-2-2",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-2",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "  . Find .   The best method is to notice this is a line with slope . Plunging ahead without noticing that: .  Solve for : .  "
},
{
  "id": "exercises-set-sec-5-1-2-3",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-3",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": "  . Find . (You can use two different methods.)  "
},
{
  "id": "exercises-set-sec-5-1-2-4",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-4",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": "  . Find .    .  For the term we need to use the product rule and for we need the chain rule. We then get .  Solve for : .  "
},
{
  "id": "exercises-set-sec-5-1-2-5",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-5",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": "  . Find .  "
},
{
  "id": "exercises-set-sec-5-1-2-6",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-6",
  "type": "Exercise",
  "number": "5.1.5",
  "title": "",
  "body": "  . Find .   Some may find this easier with shorter variable labels: . Find . .  Hence .  So we have that .  So if we were to increase the quantity by 1 ( ), then there would be a decrease in price ( ) equal to the quantity divided by 3750. So a small increase in quantity would result in a (small) decrease in price.  "
},
{
  "id": "exercises-set-sec-5-1-2-7",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-7",
  "type": "Exercise",
  "number": "5.1.6",
  "title": "",
  "body": "  . Find .  "
},
{
  "id": "exercises-set-sec-5-1-2-8",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-8",
  "type": "Exercise",
  "number": "5.1.7",
  "title": "",
  "body": "  . Find .   Rewrite as: . Find .  We take the derivative with respect to q of both sides. In other words we apply to both sides. .  "
},
{
  "id": "exercises-set-sec-5-1-2-9",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-9",
  "type": "Exercise",
  "number": "5.1.8",
  "title": "",
  "body": "  . Find .  "
},
{
  "id": "exercises-set-sec-5-1-2-10",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-10",
  "type": "Exercise",
  "number": "5.1.9",
  "title": "",
  "body": "  . Find .   Take the derivative with respect to to both sides: .  Divide both sides by 5 and solve for . .  "
},
{
  "id": "exercises-set-sec-5-1-2-11",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-11",
  "type": "Exercise",
  "number": "5.1.10",
  "title": "",
  "body": "  . Find .  "
},
{
  "id": "exercises-set-sec-5-1-2-12",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-12",
  "type": "Exercise",
  "number": "5.1.11",
  "title": "",
  "body": "  . Find .    .  "
},
{
  "id": "exercises-set-sec-5-1-2-13",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-13",
  "type": "Exercise",
  "number": "5.1.12",
  "title": "",
  "body": "  . Find .  "
},
{
  "id": "exercises-set-sec-5-1-2-14",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-14",
  "type": "Exercise",
  "number": "5.1.13",
  "title": "",
  "body": " The production function for a widget factory is . Find and . Interpret what they mean.   Part 1: Find . .  Part 2: Find . .  Part 3: Interpret. and are both negative and are reciprocals of one another. In other words: .  Since they are negative, if we increase , then will decrease and vice versa. measures the slope of ans a function of . measures the slope of ans a function of .  "
},
{
  "id": "exercises-set-sec-5-1-2-15",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-15",
  "type": "Exercise",
  "number": "5.1.14",
  "title": "",
  "body": " Let be an equation relating supply and price for gizmos. Find and . Explain what each derivative means.  "
},
{
  "id": "exercises-set-sec-5-1-2-16",
  "level": "2",
  "url": "sec-5-1-ImplicitDifferentiation.html#exercises-set-sec-5-1-2-16",
  "type": "Exercise",
  "number": "5.1.15",
  "title": "",
  "body": "  . Find .    . Evaluating the derivatives: , which gives: . Next we solve for : .  "
},
{
  "id": "sec-5-2-RelatedRates",
  "level": "1",
  "url": "sec-5-2-RelatedRates.html",
  "type": "Section",
  "number": "5.2",
  "title": "Related Rates",
  "body": " Related Rates  As we have seen, is the instantaneous rate of change of with respect to . In we learned techniques for finding when is defined as a function of . In the last section we learned how to use implicit differentiation to find when we were given an equation in and . In this section we want find when and are both described in terms of another variable. As with the section on related rates, we will start with an example where we can solve the problem by eliminating the extra variable before differentiating, and then look at how to solve with related rates.   Change in revenue with respect to expense, doable two ways   We can buy widgets wholesale for $10 a widget. In the. retail market, the demand price of widgets is $20 minus 0.1 times the quantity to be sold. Find the derivative of revenue with respect to expense.    Solution A  The revenue and cost functions for widgets depend on the quantity . The formulas for revenue and cost are: .  We can solve the second equation for quantity and substitute back into the first equation. This now gives us the revenue function in terms of cost ( ). .  It is straightforward to take the derivative: .  Note that the derivative is positive for cost between $0 and $1000. This implies that the revenue is rising until the cost is $1000. After we hit a cost of $1000, the derivative becomes negative. This indicates that the revenue will actually decrease.    Solution B  The alternative method is to differentiate the equations for revenue ( ) and cost ( ) with respect to quantity ( ), and find the two derivatives and , then treat them as fractions. The derivative we want is the quotient of these fractions.  The revenue and cost functions for widgets are the same as above.   We now differentiate:   We divide these derivatives to get the desired derivative. .  Substituting gives the same solution we had from the first method.    When using the method of related rates, we act as if the derivatives are fractions that we can multiply or divide to obtain the appropriate fraction. We want to use a bit of caution with that approach, because it does not work with higher order derivatives, or with derivatives of functions of several variables. However, for derivatives of one variable the intuition works. Once again, if we zoom in far enough, the curve will look like a straight line and the derivative is the quotient of rise over run.  For the first example we could use both methods. We either use algebra to eliminate the extra variable, or find two rates of change and combine them to find the rate we are interested in. For some problems we will only have one choice, either because the algebra is too hard, or because we have been given partial information and the algebraic method is impossible.   Change in revenue with respect to expense, elimination hard   The cost ( ) and revenue ( ) equations for gizmos are both given in terms of quantity ( )   Find the derivative of revenue with respect to cost (  when .    Since the cost is quadratic in quantity, solving for revenue as a function of cost involves more work than we need for this problem. The appropriate derivatives are: .  When , we have .  We divide these derivatives to get the desired derivative. .  This means that when , there is an increase of $1.39 for every dollar increase in cost of investment.     Change in revenue with respect to expense, long variable names   We have the following cost and revenue information for whatchamacallits: .  Find the derivative of revenue with respect to cost when .    In this example we do not have a formula that lets us solve for revenue as a function of cost, so we must use the method of related rates. The other derivatives is: .  When , we have . Thus .    Related rates are also useful when we are looking at a two-step process and we are interested in the rate of the combined process.   Composition of functions   We are producing widgets ( ). The manufacturing process turns goop ( ) into sludge ( ) and sludge into widgets. The yield equations in the appropriate units are: , or in shorthand notation: , and , or in shorthand notation: .  Find the derivative of widgets with respect to goop when .    We note that when , we have . In this example we will take the derivatives of our equation. We will then multiply them to get the derivative we want. .  When , , and . We need to multiply the derivatives to cancel the . .  Thus the rate of widget production is increasing by 16 units per increase in on unit of goop at that point.    We often run into situations where several quantities are related by some constraint or equation. In such situations we will want to know the rate at which quantities are changing with time. The technique of related rates gives us a way to move from one rate with respect to time to another. Recall the Cobb-Douglas equation from the last section: , where , , and represent total production, labor, and capital, respectively. If we know the rate of investment in capital equipment, we will be interested in the rate of change of labor with respect to time. An interesting question is to ask for the rate of change of capital with respect to labor, or how increasing or reducing capital investment will raise or lower labor costs.   Cobb-Douglas   A gizmo manufacturer has a production function given by .  The manufacturer currently uses 16 units of labor and 81 units of capital. The total production is constant but the manufacturer is investing in automation. The derivative of capital with respect to time is 2. How fast is the amount of labor needed changing?    We are going to assume that both labor and capital are functions of time and the is a constant. We start by implicitly differentiating our equation with respect to time. .  We now substitute in for the values of , , and , which were given. .  If capital is increasing at a rate of 2 per unit of time, then labor is decreasing at a rate of per unit of time.     Summary  The related rates technique is an application of the chain rule. We use this technique when we have either three variables. We may want the rate of change of one variable with respect to a second, and those variables may be connected through equations using a third variable. We may also want to relate the rate of change of two variables with respect to time. We take advantage of the fact that we can think of a derivative as a fraction of two small values. We either want to multiply or divide theses fractions to obtain the desired derivative.    Reading Check  Reading check, Related Rates   This question checks your reading comprehension of the material is section 5.2, Related Rates, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Related rates are useful when we are looking at a two-step process and we are interested in the rate of the combined process.    Related rates are useful when we are looking at a two variables related by some constraint or equation and both are varying with time.    Related rates and implicit differentiation are interchangeable methods.    When using the method of related rates, we act as if the derivatives are fractions that we can multiply or divide to obtain the appropriate fraction.    We always can use algebra to reduce to two variables, so we do not really need related rates.    The related rates technique is an application of the chain rule.    None of the above                Exercises: Related Rates Problems   Let and . Find when by solving for as a function of and taking the derivative, and also by finding and and using related rates to apply the chain rule.                   Let and . Find when by solving for as a function of and taking the derivative, and also by finding and and using related rates to apply the chain rule.    Let and . Find when .   First find the derivative .  Next plug in our value of : .    Let and . Find when .    Let and . Find when by solving for as a function of and taking the derivative, and also by finding and and using related rates to apply the chain rule.      If then . Hence , so .        Let and . Find when .    Let and . Find when .   First find the derivative: .  Next plug in our value of : .    Let and . Find when x=10.    Let and . Find when .   We want to find . We know and we can compute , hence we compute:     Let and . Find when .    Let and . Find when .   We want to find . We know and we can compute , hence we compute:     Let and . Find dy\/dz when x=7.    The revenue and expense equations for gizmos are   Find the derivative of revenue with respect to expense when .   If , then .  If , then .  Combining the two rates we get .  Hence at we have that .    The revenue and expense equations for widgets are .  Find the derivative of revenue with respect to expense when .    The production of gadgets is a two step process: .  Find the derivative of gadgets with respect to RawMaterial when .   Let’s simplify the notation and write the two equations as .  We want to find when .  What do we have? .  We know (given), but we need to plug into the second part of the equation. The only function that tells us anything about is . If this means . So .  By the quadratic equation we have .  Using Wolfram Alpha we have that . Then .    The production of whatchamacallits is a three step process: .  Find the derivative of with respect to when .     Find the indicated derivative for the production function.    Our production function is . Find if , , .   Take the derivative with respect to : .  Solve for : .  If , , , then we have .    Our production function is . Find if , , .     "
},
{
  "id": "sec-5-2-RelatedRates-3",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#sec-5-2-RelatedRates-3",
  "type": "Example",
  "number": "5.2.1",
  "title": "Change in revenue with respect to expense, doable two ways.",
  "body": " Change in revenue with respect to expense, doable two ways   We can buy widgets wholesale for $10 a widget. In the. retail market, the demand price of widgets is $20 minus 0.1 times the quantity to be sold. Find the derivative of revenue with respect to expense.    Solution A  The revenue and cost functions for widgets depend on the quantity . The formulas for revenue and cost are: .  We can solve the second equation for quantity and substitute back into the first equation. This now gives us the revenue function in terms of cost ( ). .  It is straightforward to take the derivative: .  Note that the derivative is positive for cost between $0 and $1000. This implies that the revenue is rising until the cost is $1000. After we hit a cost of $1000, the derivative becomes negative. This indicates that the revenue will actually decrease.    Solution B  The alternative method is to differentiate the equations for revenue ( ) and cost ( ) with respect to quantity ( ), and find the two derivatives and , then treat them as fractions. The derivative we want is the quotient of these fractions.  The revenue and cost functions for widgets are the same as above.   We now differentiate:   We divide these derivatives to get the desired derivative. .  Substituting gives the same solution we had from the first method.   "
},
{
  "id": "sec-5-2-RelatedRates-6",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#sec-5-2-RelatedRates-6",
  "type": "Example",
  "number": "5.2.2",
  "title": "Change in revenue with respect to expense, <span class=\"process-math\">\\(q\\)<\/span> elimination hard.",
  "body": " Change in revenue with respect to expense, elimination hard   The cost ( ) and revenue ( ) equations for gizmos are both given in terms of quantity ( )   Find the derivative of revenue with respect to cost (  when .    Since the cost is quadratic in quantity, solving for revenue as a function of cost involves more work than we need for this problem. The appropriate derivatives are: .  When , we have .  We divide these derivatives to get the desired derivative. .  This means that when , there is an increase of $1.39 for every dollar increase in cost of investment.   "
},
{
  "id": "sec-5-2-RelatedRates-7",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#sec-5-2-RelatedRates-7",
  "type": "Example",
  "number": "5.2.3",
  "title": "Change in revenue with respect to expense, long variable names.",
  "body": " Change in revenue with respect to expense, long variable names   We have the following cost and revenue information for whatchamacallits: .  Find the derivative of revenue with respect to cost when .    In this example we do not have a formula that lets us solve for revenue as a function of cost, so we must use the method of related rates. The other derivatives is: .  When , we have . Thus .   "
},
{
  "id": "sec-5-2-RelatedRates-9",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#sec-5-2-RelatedRates-9",
  "type": "Example",
  "number": "5.2.4",
  "title": "Composition of functions.",
  "body": " Composition of functions   We are producing widgets ( ). The manufacturing process turns goop ( ) into sludge ( ) and sludge into widgets. The yield equations in the appropriate units are: , or in shorthand notation: , and , or in shorthand notation: .  Find the derivative of widgets with respect to goop when .    We note that when , we have . In this example we will take the derivatives of our equation. We will then multiply them to get the derivative we want. .  When , , and . We need to multiply the derivatives to cancel the . .  Thus the rate of widget production is increasing by 16 units per increase in on unit of goop at that point.   "
},
{
  "id": "sec-5-2-RelatedRates-11",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#sec-5-2-RelatedRates-11",
  "type": "Example",
  "number": "5.2.5",
  "title": "Cobb-Douglas.",
  "body": " Cobb-Douglas   A gizmo manufacturer has a production function given by .  The manufacturer currently uses 16 units of labor and 81 units of capital. The total production is constant but the manufacturer is investing in automation. The derivative of capital with respect to time is 2. How fast is the amount of labor needed changing?    We are going to assume that both labor and capital are functions of time and the is a constant. We start by implicitly differentiating our equation with respect to time. .  We now substitute in for the values of , , and , which were given. .  If capital is increasing at a rate of 2 per unit of time, then labor is decreasing at a rate of per unit of time.   "
},
{
  "id": "Reading_Check_Sec5.2",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#Reading_Check_Sec5.2",
  "type": "Reading Question",
  "number": "5.2.1",
  "title": "Reading check, Related Rates.",
  "body": "Reading check, Related Rates   This question checks your reading comprehension of the material is section 5.2, Related Rates, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Related rates are useful when we are looking at a two-step process and we are interested in the rate of the combined process.    Related rates are useful when we are looking at a two variables related by some constraint or equation and both are varying with time.    Related rates and implicit differentiation are interchangeable methods.    When using the method of related rates, we act as if the derivatives are fractions that we can multiply or divide to obtain the appropriate fraction.    We always can use algebra to reduce to two variables, so we do not really need related rates.    The related rates technique is an application of the chain rule.    None of the above             "
},
{
  "id": "exercises-set-sec-5-2-2",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-2",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": " Let and . Find when by solving for as a function of and taking the derivative, and also by finding and and using related rates to apply the chain rule.                 "
},
{
  "id": "exercises-set-sec-5-2-3",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-3",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": " Let and . Find when by solving for as a function of and taking the derivative, and also by finding and and using related rates to apply the chain rule.  "
},
{
  "id": "exercises-set-sec-5-2-4",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-4",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": " Let and . Find when .   First find the derivative .  Next plug in our value of : .  "
},
{
  "id": "exercises-set-sec-5-2-5",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-5",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": " Let and . Find when .  "
},
{
  "id": "exercises-set-sec-5-2-6",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-6",
  "type": "Exercise",
  "number": "5.2.5",
  "title": "",
  "body": " Let and . Find when by solving for as a function of and taking the derivative, and also by finding and and using related rates to apply the chain rule.      If then . Hence , so .      "
},
{
  "id": "exercises-set-sec-5-2-7",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-7",
  "type": "Exercise",
  "number": "5.2.6",
  "title": "",
  "body": " Let and . Find when .  "
},
{
  "id": "exercises-set-sec-5-2-8",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-8",
  "type": "Exercise",
  "number": "5.2.7",
  "title": "",
  "body": " Let and . Find when .   First find the derivative: .  Next plug in our value of : .  "
},
{
  "id": "exercises-set-sec-5-2-9",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-9",
  "type": "Exercise",
  "number": "5.2.8",
  "title": "",
  "body": " Let and . Find when x=10.  "
},
{
  "id": "exercises-set-sec-5-2-10",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-10",
  "type": "Exercise",
  "number": "5.2.9",
  "title": "",
  "body": " Let and . Find when .   We want to find . We know and we can compute , hence we compute:   "
},
{
  "id": "exercises-set-sec-5-2-11",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-11",
  "type": "Exercise",
  "number": "5.2.10",
  "title": "",
  "body": " Let and . Find when .  "
},
{
  "id": "exercises-set-sec-5-2-12",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-12",
  "type": "Exercise",
  "number": "5.2.11",
  "title": "",
  "body": " Let and . Find when .   We want to find . We know and we can compute , hence we compute:   "
},
{
  "id": "exercises-set-sec-5-2-13",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-13",
  "type": "Exercise",
  "number": "5.2.12",
  "title": "",
  "body": " Let and . Find dy\/dz when x=7.  "
},
{
  "id": "exercises-set-sec-5-2-14",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-14",
  "type": "Exercise",
  "number": "5.2.13",
  "title": "",
  "body": " The revenue and expense equations for gizmos are   Find the derivative of revenue with respect to expense when .   If , then .  If , then .  Combining the two rates we get .  Hence at we have that .  "
},
{
  "id": "exercises-set-sec-5-2-15",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-15",
  "type": "Exercise",
  "number": "5.2.14",
  "title": "",
  "body": " The revenue and expense equations for widgets are .  Find the derivative of revenue with respect to expense when .  "
},
{
  "id": "exercises-set-sec-5-2-16",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-16",
  "type": "Exercise",
  "number": "5.2.15",
  "title": "",
  "body": " The production of gadgets is a two step process: .  Find the derivative of gadgets with respect to RawMaterial when .   Let’s simplify the notation and write the two equations as .  We want to find when .  What do we have? .  We know (given), but we need to plug into the second part of the equation. The only function that tells us anything about is . If this means . So .  By the quadratic equation we have .  Using Wolfram Alpha we have that . Then .  "
},
{
  "id": "exercises-set-sec-5-2-17",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-17",
  "type": "Exercise",
  "number": "5.2.16",
  "title": "",
  "body": " The production of whatchamacallits is a three step process: .  Find the derivative of with respect to when .  "
},
{
  "id": "exercises-set-sec-5-2-18-2",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-18-2",
  "type": "Exercise",
  "number": "5.2.17",
  "title": "",
  "body": " Our production function is . Find if , , .   Take the derivative with respect to : .  Solve for : .  If , , , then we have .  "
},
{
  "id": "exercises-set-sec-5-2-18-3",
  "level": "2",
  "url": "sec-5-2-RelatedRates.html#exercises-set-sec-5-2-18-3",
  "type": "Exercise",
  "number": "5.2.18",
  "title": "",
  "body": " Our production function is . Find if , , .  "
},
{
  "id": "sec-5-3-Elasticity",
  "level": "1",
  "url": "sec-5-3-Elasticity.html",
  "type": "Section",
  "number": "5.3",
  "title": "Elasticity",
  "body": " Elasticity   Elasticity of demand is a concept from economics that looks at relative rate of change rather than rate of change. We want to look at how we express this as a variant of the derivative.  The law of demand states we increase demand by lowering price and lower demand by raising price. The naive rate of change in that case would be the change in quantity with respect to price. However that rate of change is not particularly useful. If I am told that I can sell 100 more units if I lower the price by $1 a unit, I don’t know if I should lower the price. I would definitely want to lower the price if I sell cars for an average price of $20,000 and typically sell 200 cars a year. I would not want to lower the price if I sell gasoline at $4.00 a gallon and sell 5,000,000 gallons a year.   Rather than looking at the derivative of quantity with respect to price, or the rate of change with respect to price, we want to look at the relative rate of change with respect to price, or the Elasticity of Demand .   If a small change in price causes a big change in demand, the demand is elastic. In that case, I generally want to lower the price and get a lot more customers. If I need to make a big change in price to get a small change in demand, the demand is inelastic. With inelastic demand I can raise revenue by raising price. Thus, elasticity of demand gives us a tool for maximizing revenue. We can look at this issue is either the discrete case (arc elasticity) or the continuous case (point elasticity).    Point Elasticity  To understand elasticity we look at the simple case when the demand price function is linear. In that case, we can use geometry to understand the problem.   If is a point for a given price and quantity , then revenue is , the price times the quantity at that point, or the area of the rectangle above. We want to know if we should pick a different point on the demand curve to increase the area of the rectangle.  If the special case where the price and quantity are both 1, the revenue rectangle is a square and we can simply look at the slope of the demand function. In that case, when the demand curve is flatter than a slope of minus 1, increasing the quantity increases the area because quantity increases faster than price decreases. Similarly, when the demand curve is steeper than a slope of minus 1, increasing the quantity causes the price to decrease even faster, so the area of the rectangle decreases.   We note that the slope of the demand curve is almost always negative. We also note that we are reversing the normal roles, with price being the input and quantity the output. We will It is thus convenient to talk about the negative reciprocal of the slope of the normalized demand price curve.   We refer to that quantity as Elasticity of Demand . .   If the elasticity is greater than 1, a small relative change in the price goes with a large relative change in the quantity. We would expect high elasticity in products that can easily be substituted. The demand for gasoline at one gas station, when there are 2 other gas stations at the same intersection, would be highly elastic.   When demand is elastic , we raise revenue by lowering price.   We would expect low elasticity in products that are essential for which there is no reasonable substitute. Wedding rings and lifesaving medicine would have highly inelastic demand.   When the demand is inelastic ( ), we increase revenue by increasing price.   A relatively large change in price will produce a relatively small change in demand. Revenue will be at a maximum when elasticity is 1. This condition is referred to as unit elasticity.  Note that we have usually described price as a function of quantity, and in the definition of elasticity we use the derivative obtained from making quantity a function of price. From related rates, we know that these derivatives are reciprocals of each other.   Point elasticity   The demand price function for widgets is given in terms of quantity ( ). .     Find the elasticity when . Interpret what that means for the strategy to raise revenue.   Compare to the situation when .         The formula for elasticity is: .  I need to compute and . Substituting into the demand function, .  To find , I recall from related rates, that . .  Thus .  Since the demand is elastic when the quantity is 800, we should lower the price, causing a relatively large increase in quantity, to raise revenue.    When the quantity is 1500, the demand price is 5 and the derivative of quantity with respect to price is still . .  Since the demand is inelastic when the quantity is 1500, we should raise the price, causing a relatively small decrease in quantity, to raise revenue.  In this example, the revenue function is .  We recognize that this is a downward parabola with a maximum when , which is consistent with our results.         Arc Elasticity  Point elasticity was developed for use with a continuous demand price function where we could take a derivative. Often, our demand price function is a set of discrete points, because our quantity has to be a whole number. We would like to adapt elasticity to that case.  For arc elasticity we have two quantity-price points and . We want to adapt our formula for elasticity to the discrete case. We can think of the derivative, , as the ratio of small changes in quantity and price. The best value for price and quantity is the average value from the two points.   Our formula is converted to: .   Arc Elasticity   .    Elasticity from two points   Two quantity-price points for gizmos are and . What is the arc elasticity between the two points? Which price produces higher revenue?    The formula for arc elasticity is:   The market for gizmos is inelastic, as a price drop of about 10% only increases the market by about 4%. To increase revenue, I should charge the higher price.    Checking my work by computing the revenue at the two points, the first point, with the higher price and lower quantity produces $100,000, while the second point, with a lower price and higher quantity produces $93,600 in revenue.  We can use elasticity to approximate change in revenue form a change in price.   Elasticity in terms of per cent change   The short-term elasticity for gadgets is 0.6. What is the percentage change in revenue if the price is raised by 5%?    An alternate formula for elasticity is: .  Thus we see the % change in quantity is . Thus the new price is 1.05 times the old price and the new quantity is 0.97 times the old quantity.     Thus raising the price by 5% will raise revenue by 1.85%.      Reading Check  Reading check, 5.3, Elasticity   This question checks your reading comprehension of the material is section 5.3, Elasticity, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Arc elasticity is computed from two points.    Elasticity of demand is a concept from economics that looks at relative rate of change rather than rate of change.    When demand is inelastic (E is less than 1), we raise revenue by raising price.    We say elasticity is low we cannot easily change the price without changing the demand.    The formula for Point elasticity is .    Elasticity of demand is the relative rate of change with respect to price.    When demand is elastic (E is greater than 1), we raise revenue by lowering price.    We say elasticity is high if we can easily change the price without changing the demand.    None of the above                Exercises: Elasticity Problems    For the given demand-price function and quantity:  Find the price associated with the given quantity.  Find the elasticity for the given quantity.  State which pricing strategy, raising, lowering, or holding steady on prices, increases revenue.  Find the price and quantity that maximizes profit.       .       so demand is elastic, which means we raise revenue by lowering prices.   We can maximize revenue by finding the price and quantity when (unit elastic). We want   First solve for : . Next find the price: .  Hence we have a maximum revenue when and . (The actual maximum revenue is .)                     When we have unit elasticity and the revenue is at a maximum. Hence we want to leave the price as is.    The maximum revenue occurs when , so we want and .                        , so we raise revenue by lowering the price.   We can maximize revenue by finding the price and quantity when (unit elastic). We want   And hence , so . When , we have that .              For the given demand-quantity points:  Find the elasticity for the given pair of points.  State which price-point, increases revenue.      First price-quantity point = ($50,1000) Second price-quantity point = ($51,900).          , So the market is elastic and we should choose the lower price.      First price-quantity point = ($5.00,387) Second price-quantity point = ($4.95,410).    First price-quantity point = ($1.99,2500) Second price-quantity point = ($2.01,2385).          , So the market is elastic and we should choose the lower price.      First price-quantity point = ($783,455) Second price-quantity point = ($792,442).    List 3 items where you would expect the demand price to be elastic and 3 items where you would expect the demand price to be inelastic. Explain why you have put each item into its category.   Hint:  Elastic ( ) The book mentions an elastic market points to something that can be easily substituted and where revenue goes up when prices go down. Examples are a particular cut of meat and for instance a brand of clothes. If there is a sale we would choose the cheaper item. What else falls into this category?  Inelastic ( ) This is something where an increase in price would not decrease revenue. One situation would be items that are not easily substituted. For example wedding rings or life saving medication. What else falls into this category?    Give reasons why a vendor might set a price that does not maximize revenues.    If the short-term elasticity for widgets is 2.5 and the price is raised by 10%, find the percent change in quantity and revenue.    So we have , and thus .  And .  Hence we have a change in revenue.    If the short-term elasticity for thingamabobs is 0.8 and the price is raised by 10%, find the percent change in quantity and revenue.     "
},
{
  "id": "sec-5-3-Elasticity-2-3-1",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#sec-5-3-Elasticity-2-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elasticity of Demand "
},
{
  "id": "sec-5-3-Elasticity-3-8-1",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#sec-5-3-Elasticity-3-8-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elasticity of Demand "
},
{
  "id": "sec-5-3-Elasticity-3-15",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#sec-5-3-Elasticity-3-15",
  "type": "Example",
  "number": "5.3.1",
  "title": "Point elasticity.",
  "body": " Point elasticity   The demand price function for widgets is given in terms of quantity ( ). .     Find the elasticity when . Interpret what that means for the strategy to raise revenue.   Compare to the situation when .         The formula for elasticity is: .  I need to compute and . Substituting into the demand function, .  To find , I recall from related rates, that . .  Thus .  Since the demand is elastic when the quantity is 800, we should lower the price, causing a relatively large increase in quantity, to raise revenue.    When the quantity is 1500, the demand price is 5 and the derivative of quantity with respect to price is still . .  Since the demand is inelastic when the quantity is 1500, we should raise the price, causing a relatively small decrease in quantity, to raise revenue.  In this example, the revenue function is .  We recognize that this is a downward parabola with a maximum when , which is consistent with our results.      "
},
{
  "id": "sec-5-3-Elasticity-4-7",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#sec-5-3-Elasticity-4-7",
  "type": "Example",
  "number": "5.3.2",
  "title": "Elasticity from two points.",
  "body": " Elasticity from two points   Two quantity-price points for gizmos are and . What is the arc elasticity between the two points? Which price produces higher revenue?    The formula for arc elasticity is:   The market for gizmos is inelastic, as a price drop of about 10% only increases the market by about 4%. To increase revenue, I should charge the higher price.   "
},
{
  "id": "sec-5-3-Elasticity-4-10",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#sec-5-3-Elasticity-4-10",
  "type": "Example",
  "number": "5.3.3",
  "title": "Elasticity in terms of per cent change.",
  "body": " Elasticity in terms of per cent change   The short-term elasticity for gadgets is 0.6. What is the percentage change in revenue if the price is raised by 5%?    An alternate formula for elasticity is: .  Thus we see the % change in quantity is . Thus the new price is 1.05 times the old price and the new quantity is 0.97 times the old quantity.     Thus raising the price by 5% will raise revenue by 1.85%.   "
},
{
  "id": "Reading_Check_Sec5.3",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#Reading_Check_Sec5.3",
  "type": "Reading Question",
  "number": "5.3.3.1",
  "title": "Reading check, 5.3, Elasticity.",
  "body": "Reading check, 5.3, Elasticity   This question checks your reading comprehension of the material is section 5.3, Elasticity, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Arc elasticity is computed from two points.    Elasticity of demand is a concept from economics that looks at relative rate of change rather than rate of change.    When demand is inelastic (E is less than 1), we raise revenue by raising price.    We say elasticity is low we cannot easily change the price without changing the demand.    The formula for Point elasticity is .    Elasticity of demand is the relative rate of change with respect to price.    When demand is elastic (E is greater than 1), we raise revenue by lowering price.    We say elasticity is high if we can easily change the price without changing the demand.    None of the above             "
},
{
  "id": "exercises-set-sec-5-3-2-2",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-2-2",
  "type": "Exercise",
  "number": "5.3.4.1",
  "title": "",
  "body": "  .       so demand is elastic, which means we raise revenue by lowering prices.   We can maximize revenue by finding the price and quantity when (unit elastic). We want   First solve for : . Next find the price: .  Hence we have a maximum revenue when and . (The actual maximum revenue is .)     "
},
{
  "id": "exercises-set-sec-5-3-2-3",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-2-3",
  "type": "Exercise",
  "number": "5.3.4.2",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-5-3-2-4",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-2-4",
  "type": "Exercise",
  "number": "5.3.4.3",
  "title": "",
  "body": "          When we have unit elasticity and the revenue is at a maximum. Hence we want to leave the price as is.    The maximum revenue occurs when , so we want and .     "
},
{
  "id": "exercises-set-sec-5-3-2-5",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-2-5",
  "type": "Exercise",
  "number": "5.3.4.4",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-5-3-2-6",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-2-6",
  "type": "Exercise",
  "number": "5.3.4.5",
  "title": "",
  "body": "             , so we raise revenue by lowering the price.   We can maximize revenue by finding the price and quantity when (unit elastic). We want   And hence , so . When , we have that .     "
},
{
  "id": "exercises-set-sec-5-3-2-7",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-2-7",
  "type": "Exercise",
  "number": "5.3.4.6",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-set-sec-5-3-3-2",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-3-2",
  "type": "Exercise",
  "number": "5.3.4.7",
  "title": "",
  "body": " First price-quantity point = ($50,1000) Second price-quantity point = ($51,900).          , So the market is elastic and we should choose the lower price.    "
},
{
  "id": "exercises-set-sec-5-3-3-3",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-3-3",
  "type": "Exercise",
  "number": "5.3.4.8",
  "title": "",
  "body": " First price-quantity point = ($5.00,387) Second price-quantity point = ($4.95,410).  "
},
{
  "id": "exercises-set-sec-5-3-3-4",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-3-4",
  "type": "Exercise",
  "number": "5.3.4.9",
  "title": "",
  "body": " First price-quantity point = ($1.99,2500) Second price-quantity point = ($2.01,2385).          , So the market is elastic and we should choose the lower price.    "
},
{
  "id": "exercises-set-sec-5-3-3-5",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-3-5",
  "type": "Exercise",
  "number": "5.3.4.10",
  "title": "",
  "body": " First price-quantity point = ($783,455) Second price-quantity point = ($792,442).  "
},
{
  "id": "exercises-set-sec-5-3-3-6",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-3-6",
  "type": "Exercise",
  "number": "5.3.4.11",
  "title": "",
  "body": " List 3 items where you would expect the demand price to be elastic and 3 items where you would expect the demand price to be inelastic. Explain why you have put each item into its category.   Hint:  Elastic ( ) The book mentions an elastic market points to something that can be easily substituted and where revenue goes up when prices go down. Examples are a particular cut of meat and for instance a brand of clothes. If there is a sale we would choose the cheaper item. What else falls into this category?  Inelastic ( ) This is something where an increase in price would not decrease revenue. One situation would be items that are not easily substituted. For example wedding rings or life saving medication. What else falls into this category?  "
},
{
  "id": "exercises-set-sec-5-3-3-7",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-3-7",
  "type": "Exercise",
  "number": "5.3.4.12",
  "title": "",
  "body": " Give reasons why a vendor might set a price that does not maximize revenues.  "
},
{
  "id": "exercises-set-sec-5-3-3-8",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-3-8",
  "type": "Exercise",
  "number": "5.3.4.13",
  "title": "",
  "body": " If the short-term elasticity for widgets is 2.5 and the price is raised by 10%, find the percent change in quantity and revenue.    So we have , and thus .  And .  Hence we have a change in revenue.  "
},
{
  "id": "exercises-set-sec-5-3-3-9",
  "level": "2",
  "url": "sec-5-3-Elasticity.html#exercises-set-sec-5-3-3-9",
  "type": "Exercise",
  "number": "5.3.4.14",
  "title": "",
  "body": " If the short-term elasticity for thingamabobs is 0.8 and the price is raised by 10%, find the percent change in quantity and revenue.  "
},
{
  "id": "sec-6-1-EvaluatingFunctionsSeveralVariables",
  "level": "1",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html",
  "type": "Section",
  "number": "6.1",
  "title": "Evaluating and Graphing Functions of Several Variables",
  "body": " Evaluating and Graphing Functions of Several Variables  Link to worksheets used in this section  When we were evaluating functions of a single variable we had to replace the variable with a cell reference. We do the same for functions of several variables. We simply have to use several cell references.   Bank balances    Bank Balance Video    Find the amount of money I will have in the bank in 10 years if I deposit $1000 and the bank pays 5% interest, compounded quarterly. Set the problem up in Excel so that I can use the worksheet for similar problems with different numbers.    We use the formula for future value of a single deposit. .  Rather than typing the numbers into the formula, we place them in separate cells, so we can easily change the values for any of the 4 variables.     Show formulas version     Unshow formulas version     At the end of 10 years, we have $1,643.62 in the bank. By simply changing values in the worksheet, I find that compounding the interest annually reduces the final amount on 10 years to $1.628.89, while compounding weekly increases the final amount to $1,648.33.    In this example we have four variables. We could vary the initial deposit, the rate, the number of periods per year and the interest rate. In previous chapters we have a variable (say q) and the function (such as profit) that depends on . Such a function might be written as something like .  If we simplify the notation a little bit in this example so that we have , where is the future amount, and this is a function of four variables (deposit), (interest rate), (number of payments), and (number of years).  Demand price defined by 2 points    Function from 2 points video    Find the revenue for 500 widgets if I know that the demand price for 100 widgets is $20, the demand price for 200 widgets is $18.75, and that the demand price is a linear function. Set the problem up in Excel so that I can use the worksheet for similar problems with different numbers.    To make our worksheet easier to read, we use named cells. We first have to find an equation for the demand price formula. We compute a slope and intercept for this line from the points (100, 20) and (200, 18.75). Once we have this function, we find that the demand price is $15 when quantity is 500. We then compute revenue as price times quantity.      In this problem, revenue is a function of 5 variables: Demand1 , Demand2 , Price1 , Price2 , and NewDemand .     The next task to consider is making a table of values for a function of several variables. Since our screens have 2 dimensions, we first look at the case when we allow two values to change. When we made a table for a single variable, we had to use both absolute and relative cell reference to distinguish between constant values used for all entries and variables that changed in each case. With functions of two variables our table will have rows where one variable is held constant and columns where the other is held constant. We note that quick filling a formula with the reference $A5 will keep the column, A, constant but allow the row to change. Similarly with the reference A$5 the column can change, but the row is constant.  Building a table with two variables    Video of table with two variables example    I want to produce a table that shows how much I need to put in the bank to have $100,000 at some point in the future. I will assume that interest is compounded annually. I want interest rate and number of years to be treated as variables with interest rate ranging from 5% to 6% and the length of time to vary from 5 to 40 years.    We use the formula for present value of a single deposit. Since the interest is compounded annually, the formula simplifies. .  As we build the table, the future amount will be a constant, so it needs to be given as an absolute reference. The number of years will be down the left side of the table and will be constant across a row, so its reference should have a dollar sign before the letter. The interest rate will be listed across the top of the table, so its reference should have a dollar sign before the number.     This lets us build the table we desire. From the complete table, we see that we can have $100,000 in the bank in 40 years by making a deposit of $9,722.22 at 6% interest. In contrast if we only earn 5% interest and can only keep the money in the bank for 15 years, we need to start with $48,101.71.     Similarly, we might want to produce a table that shows the monthly payment on a mortgage where both the annual interest rate and the number of years are treated as variables. Such a chart would be useful in deciding how big a mortgage a person can afford with different kinds of mortgages.  Mortgage payments    Video presentation of mortgage payments    I want to produce a table that shows the monthly payment on a $100,000 mortgage with a range of interest rates and lengths of the mortgage.    We use the PMT command to find the monthly payment.   We can see that the monthly payment is $421.60 for a 30-year fixed rate mortgage at 3% compounded monthly. For a 10-year mortgage at 6% the payment increases to $1,110.21.     After we build a table for a function we would also like to see a graph of the function. Excel's abilities to graph surfaces in not one of the program's strong points. Nevertheless, it is useful to be “able to see the big picture” by looking at a graph. We will also note how to draw a graph of a surface with Wolfram Alpha.  When we looked at models of price, quantity, cost, revenue, and profit, we made the simplifying assumption that a company only produces one product. We want to consider what happens with two products.  Table and graph    Video Producing a graph from a table    I have a company that produces two products, widgets and gizmos. The two demand functions are: .  Produce a table and a graph for revenue as a function of the quantity of gizmos and widgets produced.    We need to start by producing a formula for revenue. To shorten the equations we will abbreviate the terms or use initials. We need formulas for revenue for each of our products: .  Putting the equations together gives an equation for revenue. .  Next we build a build a table for the function as we have done above.  First table    Finally, we would like to see a graph of the function. We notice that the 3D plots in Excel have a number of drawbacks. The plots do not label the input variables. These first plots also don’t tell us what values of the variables correspond to particular points on the graph. Some of these drawbacks can be overcome, but only with more work than we wish to expend in this course. We will only add one non-intuitive option to make the graphs work better.  Second table    We will move the names of the variables out of the upper left corner of the chart and into the row above and to the side of the data. We leave the corner cell blank. This will let us see the values of the variables in the graphs. In the table, we select the data we would like to graph. In this example we select from cells B4 through M12 . Finally, we select a chart to insert. The charts we are interested in are surface charts. The types of interest are 3-D Surface, Wireframe 3-D, and contour. Each of these chart types highlights some useful information.  The 3-D Surface gives a fast picture. It is useful in seeing local minimums and maximums.  Surface chart    The Wireframe 3-D chart emphasizes that we can build a reasonable picture from the curves obtained by treating either or as a constant. It lets us understand a function of 2 variables by putting together a collection of several functions of one variable. This point of view will be useful when we try to take derivatives.  Wire frame chart    The Contour chart emphasizes the level curves. The rate of change will be fastest in a direction perpendicular to the level curves.  Contour chart    Another alternative for seeing a graph is to use Wolfram Alpha. Unfortunately variable names in Alpha seem to be limited to a single letter, or a letter followed by a digit. Thus we change the formula to one using the names g and w .     The techniques of this section let us look at functions of two variables. In the next section we explore techniques for understanding functions of several variables by treating some of the variables as constants.    Reading Check  Reading check, Evaluating and Graphing Functions of Several Variables   This question checks your reading comprehension of the material is section 6.1, Evaluating and Graphing Functions of Several Variables, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Wolfram Alpha will plot functions of two variables.    All functions have a single input variable, x    Excel easily graphs functions of three variables.    In the text, the demand price of an object was discussed as a function of 5 variables, 2 given demands with associated prices and the demand quantity in question.    The book showed how to make a table for functions of two variables.    In the text, bank balance was discussed as a function of 4 variables.    None of the above                Exercises: Evaluating and Graphing Functions of Several Variables Problems    For the following exercises, set up an Excel notebook, and evaluate the given function of several variables at the indicated values. T he workbook should be set up so that the input values can be changed and the formula will re-compute with the new values.    Evaluate the function , when , and .   Setting this up so that the values of and can be easily changed we define and in separate cells and then enter the function that computes .        Excel commands and general setup  Excel output      Evaluate the function , when , , and .    Express cost as a function of quantity, initial cost, and per-unit cost, when the initial cost is $2,000, the per-unit cost is $25, and the quantity is 75.   The function we would have is .  We can set this up as a general Excel worksheet that allows us to vary all three givens.        Excel commands and general setup  Excel output      Express revenue as a function of two quantity demand-price pairs and quantity, assuming that demand price is a linear function, where the quantity demand-price pairs are and and the quantity is 300. (You may find it useful to have intermediate computations that find the coefficients of the demand price function, and the demand price.)    Express revenue as a function of two quantity demand-price pairs and quantity, assuming that demand price is an exponential function, here the quantity price pairs are and and the quantity is 300. (You may find it useful to have intermediate computations that find the coefficients of the demand price function, and the demand price.)   To get the price equation we can solve the system of equations we get by evaluating the exponential function at the two given points: .  Then (from the first equation) , and implies so that .  Hence . Solving for : .  Alternatively we can use Excel. Remember that if we have only two points we need to add one of the pairs twice so that Excel can graph the points correctly in a scatter plot.   In Excel we have the Price equation as .  The difference between the symbolic and numerical answers is a matter of how many decimals \/ significant digits we choose to keep.  The simplest answer would be to treat Price as a function of quantity. But this is a section about multivariable functions. So what if we wanted a more general setting where we were given the following:  Two points and  A quantity    The Price function would be .  In Excel we could set up a table that would allow us to change , , and  .        Excel commands and general setup  Excel output      Express profit as a function of two quantity demand-price pairs, quantity, initial cost, and per-unit cost, assuming that demand price is a linear function, where the quantity demand-price pairs are and , the quantity is 300, the initial cost is $3000, and the per-unit cost is $8. (You may find it useful to have intermediate computations that find the cost and revenue.)    Express the future value of a deposit as a function of the initial deposit, the annual interest rate, the number of years the deposit is held, and the number of times per year that the interest is compounded, where the deposit of $10,000 is held for 20 years at 3% interest, compounded monthly.    .        Excel commands and general setup  Excel output    For the rate, you should either make sure the cell is formatted as a percentage. Or you can just enter the decimal 0.03. The display formula allows you to check that the number is formatted correctly. We do want Excel to use the value of 0.03 in the formula, not 3.    Express the future value of a regular series of deposits as a function of the periodic deposit amount, the annual interest rate, the number of years the deposits accumulate, and the number of times per year that the deposits are made, where the deposit of $200 is deposited weekly for 20 years at 3% interest, compounded weekly.    Express the current value of a bond as a function of the final value, the annual interest rate, and the number of years the bond is held, where the final value of the bond is $10,000, held for 15 years at 3.5% interest, compounded monthly.    .        Excel commands and general setup  Excel output    So, to have $10,000 after 15 years we need to invest $5,920.08 now.      For the following exercises, set up an Excel notebook to produce a table for the given function as a function of the two specified variables and the other parameters. The workbook should be set up so that the input values can be changed and the formula will recompute with the new values.    Create a table for the function , with ranging from to , and ranging from to .    Create a table for the function , with ranging from to , and ranging from to , with .   We need different types of absolute references. If the values are entered in column A, and the values are entered in row 4, and is stored in Cell B2 :  When using , we want to fix the column reference.  When using , we want to fix the row reference.  When using z we want to fix the cell reference.     In table form we get:   We can always check our work by double clicking a value in the table. This will highlight the calls called upon to compute the entry. Note that this will check if you are calling on the right , and . To check that the formula is correct we recommend the Show Formula feature.    Create a table that expresses cost as a function of quantity, and per-unit cost, with initial cost as a parameter, when the initial cost is $3,000, the per-unit cost ranges from $20 to $40 by $2, and the quantity ranges from 50 to 100 by 5.    Create a table that expresses the future value of a deposit as a function of the annual interest rate and the number of years the deposit is held, with the amount of the initial deposit and the number of times per year that the interest is compounded being treated as parameters, where the interest on a deposit of $10,000 is compounded quarterly, and the deposit is held for 20 to 40 years at interest rates ranging from 3% to 5%.   We will enter the deposit and the times the interest is compounded (ppy) as fixed parameters. The years run from 20 to 40, and the interest rate from 3% to 5%. We have enough space on one sheet to do the years in increments of 1. The interest is done in increments of 0.25%. This is something not uncommon in the banking world.    How much detail should you give? Imagine working at a bank. What would be a good spreadsheet to share with a colleague, boss, or costumer? It should be adequately labeled and it should be easy to read.    Create a table that expresses the future value of a regular series of deposits as a function of the annual interest rate and the number of years the deposit accumulate, with the amount of the deposits and the number of times per year that the interest is compounded being treated as parameters, where a deposit of $2,000 is made monthly, and the deposits accumulate for 20 to 40 years at interest rates ranging from 3% to 5%.    Create a table that expresses the current value of a bond as a function of the number of years the bond is held and the interest rate, where the final value of the bond is $10,000, the number of years the bond is held runs from 5 to 40 and the interest rate runs from 2% to 6%.   The entries in the cell look like this:    We can easily read off what our initial investment needs to be if we want to earn $10,000.    Create a table that expresses revenue as a function of the quantity of widgets and gizmos sold as both quantities range from 0 to 1000, where the demand price functions are: .    Create a table that expresses revenue as a function of the quantity of widgets and gizmos sold as both quantities range from 0 to 1000, where the demand price functions are: .   Let be Gizmo, and be Widget, then .       Use either Excel or WolframAlpha to produce a graph of the function described in .    "
},
{
  "id": "sec-6-1-EvaluatingFunctionsSeveralVariables-4",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#sec-6-1-EvaluatingFunctionsSeveralVariables-4",
  "type": "Example",
  "number": "6.1.1",
  "title": "Bank balances.",
  "body": "Bank balances    Bank Balance Video    Find the amount of money I will have in the bank in 10 years if I deposit $1000 and the bank pays 5% interest, compounded quarterly. Set the problem up in Excel so that I can use the worksheet for similar problems with different numbers.    We use the formula for future value of a single deposit. .  Rather than typing the numbers into the formula, we place them in separate cells, so we can easily change the values for any of the 4 variables.     Show formulas version     Unshow formulas version     At the end of 10 years, we have $1,643.62 in the bank. By simply changing values in the worksheet, I find that compounding the interest annually reduces the final amount on 10 years to $1.628.89, while compounding weekly increases the final amount to $1,648.33.   "
},
{
  "id": "sec-6-1-EvaluatingFunctionsSeveralVariables-7",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#sec-6-1-EvaluatingFunctionsSeveralVariables-7",
  "type": "Example",
  "number": "6.1.5",
  "title": "Demand price defined by 2 points.",
  "body": "Demand price defined by 2 points    Function from 2 points video    Find the revenue for 500 widgets if I know that the demand price for 100 widgets is $20, the demand price for 200 widgets is $18.75, and that the demand price is a linear function. Set the problem up in Excel so that I can use the worksheet for similar problems with different numbers.    To make our worksheet easier to read, we use named cells. We first have to find an equation for the demand price formula. We compute a slope and intercept for this line from the points (100, 20) and (200, 18.75). Once we have this function, we find that the demand price is $15 when quantity is 500. We then compute revenue as price times quantity.      In this problem, revenue is a function of 5 variables: Demand1 , Demand2 , Price1 , Price2 , and NewDemand .   "
},
{
  "id": "sec-6-1-EvaluatingFunctionsSeveralVariables-9",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#sec-6-1-EvaluatingFunctionsSeveralVariables-9",
  "type": "Example",
  "number": "6.1.7",
  "title": "Building a table with two variables.",
  "body": "Building a table with two variables    Video of table with two variables example    I want to produce a table that shows how much I need to put in the bank to have $100,000 at some point in the future. I will assume that interest is compounded annually. I want interest rate and number of years to be treated as variables with interest rate ranging from 5% to 6% and the length of time to vary from 5 to 40 years.    We use the formula for present value of a single deposit. Since the interest is compounded annually, the formula simplifies. .  As we build the table, the future amount will be a constant, so it needs to be given as an absolute reference. The number of years will be down the left side of the table and will be constant across a row, so its reference should have a dollar sign before the letter. The interest rate will be listed across the top of the table, so its reference should have a dollar sign before the number.     This lets us build the table we desire. From the complete table, we see that we can have $100,000 in the bank in 40 years by making a deposit of $9,722.22 at 6% interest. In contrast if we only earn 5% interest and can only keep the money in the bank for 15 years, we need to start with $48,101.71.    "
},
{
  "id": "sec-6-1-EvaluatingFunctionsSeveralVariables-11",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#sec-6-1-EvaluatingFunctionsSeveralVariables-11",
  "type": "Example",
  "number": "6.1.10",
  "title": "Mortgage payments.",
  "body": "Mortgage payments    Video presentation of mortgage payments    I want to produce a table that shows the monthly payment on a $100,000 mortgage with a range of interest rates and lengths of the mortgage.    We use the PMT command to find the monthly payment.   We can see that the monthly payment is $421.60 for a 30-year fixed rate mortgage at 3% compounded monthly. For a 10-year mortgage at 6% the payment increases to $1,110.21.    "
},
{
  "id": "ex-multi-two-products",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#ex-multi-two-products",
  "type": "Example",
  "number": "6.1.12",
  "title": "Table and graph.",
  "body": "Table and graph    Video Producing a graph from a table    I have a company that produces two products, widgets and gizmos. The two demand functions are: .  Produce a table and a graph for revenue as a function of the quantity of gizmos and widgets produced.    We need to start by producing a formula for revenue. To shorten the equations we will abbreviate the terms or use initials. We need formulas for revenue for each of our products: .  Putting the equations together gives an equation for revenue. .  Next we build a build a table for the function as we have done above.  First table    Finally, we would like to see a graph of the function. We notice that the 3D plots in Excel have a number of drawbacks. The plots do not label the input variables. These first plots also don’t tell us what values of the variables correspond to particular points on the graph. Some of these drawbacks can be overcome, but only with more work than we wish to expend in this course. We will only add one non-intuitive option to make the graphs work better.  Second table    We will move the names of the variables out of the upper left corner of the chart and into the row above and to the side of the data. We leave the corner cell blank. This will let us see the values of the variables in the graphs. In the table, we select the data we would like to graph. In this example we select from cells B4 through M12 . Finally, we select a chart to insert. The charts we are interested in are surface charts. The types of interest are 3-D Surface, Wireframe 3-D, and contour. Each of these chart types highlights some useful information.  The 3-D Surface gives a fast picture. It is useful in seeing local minimums and maximums.  Surface chart    The Wireframe 3-D chart emphasizes that we can build a reasonable picture from the curves obtained by treating either or as a constant. It lets us understand a function of 2 variables by putting together a collection of several functions of one variable. This point of view will be useful when we try to take derivatives.  Wire frame chart    The Contour chart emphasizes the level curves. The rate of change will be fastest in a direction perpendicular to the level curves.  Contour chart    Another alternative for seeing a graph is to use Wolfram Alpha. Unfortunately variable names in Alpha seem to be limited to a single letter, or a letter followed by a digit. Thus we change the formula to one using the names g and w .    "
},
{
  "id": "Reading_Check_Sec6.1",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#Reading_Check_Sec6.1",
  "type": "Reading Question",
  "number": "6.1.1",
  "title": "Reading check, Evaluating and Graphing Functions of Several Variables.",
  "body": "Reading check, Evaluating and Graphing Functions of Several Variables   This question checks your reading comprehension of the material is section 6.1, Evaluating and Graphing Functions of Several Variables, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Wolfram Alpha will plot functions of two variables.    All functions have a single input variable, x    Excel easily graphs functions of three variables.    In the text, the demand price of an object was discussed as a function of 5 variables, 2 given demands with associated prices and the demand quantity in question.    The book showed how to make a table for functions of two variables.    In the text, bank balance was discussed as a function of 4 variables.    None of the above             "
},
{
  "id": "exercises-set-sec-6-1-2-2",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-2",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "",
  "body": " Evaluate the function , when , and .   Setting this up so that the values of and can be easily changed we define and in separate cells and then enter the function that computes .        Excel commands and general setup  Excel output    "
},
{
  "id": "exercises-set-sec-6-1-2-3",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-3",
  "type": "Exercise",
  "number": "6.1.2",
  "title": "",
  "body": " Evaluate the function , when , , and .  "
},
{
  "id": "exercises-set-sec-6-1-2-4",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-4",
  "type": "Exercise",
  "number": "6.1.3",
  "title": "",
  "body": " Express cost as a function of quantity, initial cost, and per-unit cost, when the initial cost is $2,000, the per-unit cost is $25, and the quantity is 75.   The function we would have is .  We can set this up as a general Excel worksheet that allows us to vary all three givens.        Excel commands and general setup  Excel output    "
},
{
  "id": "exercises-set-sec-6-1-2-5",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-5",
  "type": "Exercise",
  "number": "6.1.4",
  "title": "",
  "body": " Express revenue as a function of two quantity demand-price pairs and quantity, assuming that demand price is a linear function, where the quantity demand-price pairs are and and the quantity is 300. (You may find it useful to have intermediate computations that find the coefficients of the demand price function, and the demand price.)  "
},
{
  "id": "exercises-set-sec-6-1-2-6",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-6",
  "type": "Exercise",
  "number": "6.1.5",
  "title": "",
  "body": " Express revenue as a function of two quantity demand-price pairs and quantity, assuming that demand price is an exponential function, here the quantity price pairs are and and the quantity is 300. (You may find it useful to have intermediate computations that find the coefficients of the demand price function, and the demand price.)   To get the price equation we can solve the system of equations we get by evaluating the exponential function at the two given points: .  Then (from the first equation) , and implies so that .  Hence . Solving for : .  Alternatively we can use Excel. Remember that if we have only two points we need to add one of the pairs twice so that Excel can graph the points correctly in a scatter plot.   In Excel we have the Price equation as .  The difference between the symbolic and numerical answers is a matter of how many decimals \/ significant digits we choose to keep.  The simplest answer would be to treat Price as a function of quantity. But this is a section about multivariable functions. So what if we wanted a more general setting where we were given the following:  Two points and  A quantity    The Price function would be .  In Excel we could set up a table that would allow us to change , , and  .        Excel commands and general setup  Excel output    "
},
{
  "id": "exercises-set-sec-6-1-2-7",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-7",
  "type": "Exercise",
  "number": "6.1.6",
  "title": "",
  "body": " Express profit as a function of two quantity demand-price pairs, quantity, initial cost, and per-unit cost, assuming that demand price is a linear function, where the quantity demand-price pairs are and , the quantity is 300, the initial cost is $3000, and the per-unit cost is $8. (You may find it useful to have intermediate computations that find the cost and revenue.)  "
},
{
  "id": "exercises-set-sec-6-1-2-8",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-8",
  "type": "Exercise",
  "number": "6.1.7",
  "title": "",
  "body": " Express the future value of a deposit as a function of the initial deposit, the annual interest rate, the number of years the deposit is held, and the number of times per year that the interest is compounded, where the deposit of $10,000 is held for 20 years at 3% interest, compounded monthly.    .        Excel commands and general setup  Excel output    For the rate, you should either make sure the cell is formatted as a percentage. Or you can just enter the decimal 0.03. The display formula allows you to check that the number is formatted correctly. We do want Excel to use the value of 0.03 in the formula, not 3.  "
},
{
  "id": "exercises-set-sec-6-1-2-9",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-9",
  "type": "Exercise",
  "number": "6.1.8",
  "title": "",
  "body": " Express the future value of a regular series of deposits as a function of the periodic deposit amount, the annual interest rate, the number of years the deposits accumulate, and the number of times per year that the deposits are made, where the deposit of $200 is deposited weekly for 20 years at 3% interest, compounded weekly.  "
},
{
  "id": "exercises-set-sec-6-1-2-10",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-2-10",
  "type": "Exercise",
  "number": "6.1.9",
  "title": "",
  "body": " Express the current value of a bond as a function of the final value, the annual interest rate, and the number of years the bond is held, where the final value of the bond is $10,000, held for 15 years at 3.5% interest, compounded monthly.    .        Excel commands and general setup  Excel output    So, to have $10,000 after 15 years we need to invest $5,920.08 now.  "
},
{
  "id": "exg-ch6-excel-2",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exg-ch6-excel-2",
  "type": "Exercise",
  "number": "6.1.10",
  "title": "",
  "body": " Create a table for the function , with ranging from to , and ranging from to .  "
},
{
  "id": "exg-ch6-excel-3",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exg-ch6-excel-3",
  "type": "Exercise",
  "number": "6.1.11",
  "title": "",
  "body": " Create a table for the function , with ranging from to , and ranging from to , with .   We need different types of absolute references. If the values are entered in column A, and the values are entered in row 4, and is stored in Cell B2 :  When using , we want to fix the column reference.  When using , we want to fix the row reference.  When using z we want to fix the cell reference.     In table form we get:   We can always check our work by double clicking a value in the table. This will highlight the calls called upon to compute the entry. Note that this will check if you are calling on the right , and . To check that the formula is correct we recommend the Show Formula feature.  "
},
{
  "id": "exg-ch6-excel-4",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exg-ch6-excel-4",
  "type": "Exercise",
  "number": "6.1.12",
  "title": "",
  "body": " Create a table that expresses cost as a function of quantity, and per-unit cost, with initial cost as a parameter, when the initial cost is $3,000, the per-unit cost ranges from $20 to $40 by $2, and the quantity ranges from 50 to 100 by 5.  "
},
{
  "id": "exg-ch6-excel-5",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exg-ch6-excel-5",
  "type": "Exercise",
  "number": "6.1.13",
  "title": "",
  "body": " Create a table that expresses the future value of a deposit as a function of the annual interest rate and the number of years the deposit is held, with the amount of the initial deposit and the number of times per year that the interest is compounded being treated as parameters, where the interest on a deposit of $10,000 is compounded quarterly, and the deposit is held for 20 to 40 years at interest rates ranging from 3% to 5%.   We will enter the deposit and the times the interest is compounded (ppy) as fixed parameters. The years run from 20 to 40, and the interest rate from 3% to 5%. We have enough space on one sheet to do the years in increments of 1. The interest is done in increments of 0.25%. This is something not uncommon in the banking world.    How much detail should you give? Imagine working at a bank. What would be a good spreadsheet to share with a colleague, boss, or costumer? It should be adequately labeled and it should be easy to read.  "
},
{
  "id": "exg-ch6-excel-6",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exg-ch6-excel-6",
  "type": "Exercise",
  "number": "6.1.14",
  "title": "",
  "body": " Create a table that expresses the future value of a regular series of deposits as a function of the annual interest rate and the number of years the deposit accumulate, with the amount of the deposits and the number of times per year that the interest is compounded being treated as parameters, where a deposit of $2,000 is made monthly, and the deposits accumulate for 20 to 40 years at interest rates ranging from 3% to 5%.  "
},
{
  "id": "exg-ch6-excel-7",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exg-ch6-excel-7",
  "type": "Exercise",
  "number": "6.1.15",
  "title": "",
  "body": " Create a table that expresses the current value of a bond as a function of the number of years the bond is held and the interest rate, where the final value of the bond is $10,000, the number of years the bond is held runs from 5 to 40 and the interest rate runs from 2% to 6%.   The entries in the cell look like this:    We can easily read off what our initial investment needs to be if we want to earn $10,000.  "
},
{
  "id": "exg-ch6-excel-8",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exg-ch6-excel-8",
  "type": "Exercise",
  "number": "6.1.16",
  "title": "",
  "body": " Create a table that expresses revenue as a function of the quantity of widgets and gizmos sold as both quantities range from 0 to 1000, where the demand price functions are: .  "
},
{
  "id": "exg-ch6-excel-9",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exg-ch6-excel-9",
  "type": "Exercise",
  "number": "6.1.17",
  "title": "",
  "body": " Create a table that expresses revenue as a function of the quantity of widgets and gizmos sold as both quantities range from 0 to 1000, where the demand price functions are: .   Let be Gizmo, and be Widget, then .    "
},
{
  "id": "exercises-set-sec-6-1-4",
  "level": "2",
  "url": "sec-6-1-EvaluatingFunctionsSeveralVariables.html#exercises-set-sec-6-1-4",
  "type": "Exercise",
  "number": "6.1.18",
  "title": "",
  "body": " Use either Excel or WolframAlpha to produce a graph of the function described in .  "
},
{
  "id": "sec-6-2-PartialDeriva8tives",
  "level": "1",
  "url": "sec-6-2-PartialDeriva8tives.html",
  "type": "Section",
  "number": "6.2",
  "title": "Wire Frames, Partial Derivatives, and Tangent Planes",
  "body": " Wire Frames, Partial Derivatives, and Tangent Planes   Link to worksheets used in this section  A standard technique in mathematics courses is to try to break a complicated problem into smaller and easier problems. For functions of several variables this can be done by looking at the variables one at a time, and treating the other variables as constants. Then we are back to considering functions of a single variable.    Wire frames  We start by returning to from , and seeing what information can be obtained by looking at one variable at a time.   Optimizing Revenue with Two Products    Video presentation this example    I have a company that produces two products, widgets and gizmos. The two demand functions are: . This gives me the following revenue function: .  Look at the functions of one variable obtained by treating either QG or QW as a constant. Use this information to find where we maximize revenue.    In terms of the last example, we want to start with a table and a wire frame chart.    The wires are obtained by intersecting the graph of the function with a plane where QW or QG is held constant.   Thus, when we treat either QW or QG as a constant we effectively are looking at one of the wires of the wire frame. To illustrate this, we will look at the wires corresponding to and . When , our revenue function simplifies to . Thus, the wire corresponding to is a parabola that bends down.  The interactive below shows how the wireframe is built from cuves defined by slice curves defined by cut planes.   Wire mesh     To find the vertex of the parabola, we take the derivative of our function of QW and set it equal to zero. . This derivative is zero when . That is the only possible place on this wire where we can have a maximum.  Similarly, when , . This derivative is zero when . That is the only possible place on this wire where we can have a maximum.  Putting the information together, the maximum must occur at . Putting these values back in the original equation gives a maximum of $5250 for the revenue function.      Partial Derivatives  The procedure we used in the first example of replacing one variable with a constant and then taking the derivative of the resulting single variable function is a bit cumbersome. We can simplify the process by taking the derivative of the original function with respect to one variable while treating the other variables as constants. This is referred to as taking a partial derivative. There is also a change in notation. The familiar derivative of with respect to uses the symbol , while the partial derivative with respect to uses the symbol , or . Similarly, the partial derivative with respect to uses the symbol , or .   Finding and Interpreting Partial Derivatives   Find the partial derivatives of at . Explain what the partial derivatives mean in terms of the graph.    It is useful to look at a picture with the graph, the two curves obtained by keeping and , and the tangent lines to those curves.   We also want to look at the slices corresponding keeping and .      The yellow curve is obtained by fixing and letting vary. The blue curve is obtained by fixing and letting vary. We now take the partial derivatives with respect to both variables. .  The partial derivatives give the slopes of the purple and red lines above. At the point , the (yellow) curves obtained by treating y as a constant and letting vary has a (magenta) tangent line with a slope of , the value . At the point , the (blue) curves obtained by treating as a constant and letting vary has a (red) tangent line with a slope of 1, the value .      Tangent Planes and Linear Approximation  For functions of one variable, we had two main uses of the derivative. One was to identify candidate points for maxima and minima. We will look at critical points and extrema in the next section. The other use of the derivative was to produce a linear approximation or tangent line. We can generalize the tangent line for one variable to a tangent plane for two variables. For a function , we used the value of the point, and the slope to get the equation of the tangent line approximation near .   Tangent line   .   For a function, , of two variables, we simply use partials for the slopes.   Tangent Plane   .    Approximating with a Tangent Plane   The general Cobb-Douglas production function determines the Production (P), in terms of the variables Labor (L) and Capital (C): , or using short-hand notation: , where , , and are constants. For our widget factory, this becomes , with labor production and capital in the appropriate units.  Find . Use a linear approximation to estimate .    We answer the first question by substituting the values into the equation. .  To produce the tangent plane we take the partial derivatives and evaluate them at our base point. .  This gives us our tangent plane: .  Substituting in values gives our estimate. .    In the case of the last example, evaluating the linear approximation was nicer than evaluating the function directly because the 4th roots of 16 and 81 are whole numbers, while the 4th roots of 85 and 14 are harder to compute. For real world functions, evaluating functions may involve a substantial investment of time and money, depending on the nature of the function.   Linear Approximations of Functions of More than Two Variables  In this section we have focused on functions of 2 variables since their graphs are surfaces in 3 dimensions, which is a familiar concept. For real world functions, we are often concerned with functions of many variables. The concept of partial derivative easily extends, with one variable and multiple parameters. Finding the linear approximation also extends without difficulty. We simply have a linear term for each variable.     Reading Check  Reading check, Wire Frames, Partial Derivatives, and Tangent Planes   This question checks your reading comprehension of the material is section 6.2, Wire Frames, Partial Derivatives, and Tangent Planes, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Partial derivatives are not defined for functions of three variables.    The partial derivative of with respect to is represented as .    A partial derivative is obtained by treating all but one variable as a constant.    A tangent plane can be used for a linear approximation of a function of two variables.    Partial derivatives give the slope of the tangent line for the curve obtained by holding one variable constant.    The partial derivative of with respect to is represented as .    We cannot graph functions of two variables.    None of the above                Exercises: Wire Frames, Partial Derivatives, and Tangent Planes Problems    For the given functions and points and :  Give the 2 functions of one variable through obtained by holding each variable constant.  Find the partial derivatives of the original function.  Evaluate the partial derivatives at .  Give the equation of the tangent plane through .  The approximation at obtained from the tangent plane.      The function is , , and .      Give the 2 functions of one variable through obtained by holding each variable constant. .    Find the partial derivatives of the original function. .    Evaluate the partial derivatives at . .    Give the equation of the tangent plane through .  We need for the equation of the tangent plane. .    The approximation at obtained from the tangent plane. .       The function is , , and .    The function is , , and .      Give the 2 functions of one variable through obtained by holding each variable constant. .    Find the partial derivatives of the original function. .    Evaluate the partial derivatives at . .    Give the equation of the tangent plane through .  We need for the equation of the tangent plane .    The approximation at obtained from the tangent plane. .       The function is the revenue function for selling widgets and gizmos with demand price functions , and , and .    The function is the revenue function for selling widgets and gizmos with demand price functions , and , and .   For the sake of notation we will use the following abbreviations: , and , and .  We need to find the Revenue function to solve the problem: .     Give the 2 functions of one variable through obtained by holding each variable constant. .  This function gives us information about the revenue in terns of Widgets near a production level of 400 widgets and 800 gizmos. We can use Wolfram Alpha to graph this. Assuming there are 800 gizmos the widget influence on the revenue looks like this:   The slope is about . .  The revenue generated by the gizmos assuming the number of widgets equals 400 and the number of gizmos is near 800 gives the following picture:   The slope is about .    Find the partial derivatives of the original function.  In part a we saw that the revenue function seems to be growing faster for the gizmo variable, then for the widget variable. To get more information we can compute the partial derivatives (b) and then evaluate them at (c). .  Note that the first part requires a product rule and then a chain rule to deal with the exponential part of the formula. .    Evaluate the partial derivatives at . .  The estimates we observed in part a were fairly close to the actual rates of change.    Give the equation of the tangent plane through . .  We need to find . Using Wolfram Alpha (or calculator) we get .    The approximation at obtained from the tangent plane.  The estimated revenue when is given by .  In this case the change in production would result in a loss in revenue. This is mainly due to the impact of the lower production in gizmos.       The function is the Cobb-Douglas production function in a widget factory, , where labor is in workers, capital equipment is in units of $20,000, and production is in units of 200 widgets produced per month. In the plane, let , and .    The function is the Cobb-Douglas production function in a country, , where labor is in millions of workers, capital equipment is in units of billions of dollars, and production is in units of billions of dollars per year. In the plane, let , and .      Give the 2 functions of one variable through obtained by holding each variable constant. . Hence both cross sections are exponential function.    Find the partial derivatives of the original function. .  Then we have .  Then we have that .    Evaluate the partial derivatives at . .    Give the equation of the tangent plane through . .    The approximation at obtained from the tangent plane. .  So as both and increase, so does the production. Specifically increasing by 10 million workers and by 2 billion dollars would give an estimated increase in production of billions of dollars worth of units.         For the given functions and points and :  Give the 3 functions of one variable through obtained by holding each variable constant.  Find the partial derivatives of the original function.  Evaluate the partial derivatives at .  Give the equation of the linear approximating function through .  The approximation at obtained from the function in d.      The function is , , and .    The function is , , and .      Give the 3 functions of one variable through obtained by holding each variable constant. .    Find the partial derivatives of the original function. .    Evaluate the partial derivatives at . .    Give the equation of the linear approximating function through . .    The approximation at obtained from the function in d. .       The function is  , and .    The function is the revenue function for selling widgets, gizmos, and gadgets with demand price functions , and in space, , and .   We can do the entire problem in terms of gadgets, gizmos and widgets, but for notation sake we will replace them (alphabetically) as follows: .  We need the revenue function and we have the price functions, so we have that .  (Note: the last step\/simplification was done in Wolfram Alpha)     Give the 3 functions of one variable through obtained by holding each variable constant. , so the cross sectional function are all quadratic (parabolas) that open downwards.    Find the partial derivatives of the original function.  Finding the partial derivatives when dealing with three variables is very similar to the procedure we use when we have two variables. We treat the other variables as constants. .    Evaluate the partial derivatives at . .    Give the equation of the linear approximating function through . . Then the linear approximation is given by .    The approximation at obtained from the function in d. .         "
},
{
  "id": "sec-6-2-PartialDeriva8tives-3-3",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#sec-6-2-PartialDeriva8tives-3-3",
  "type": "Example",
  "number": "6.2.1",
  "title": "Optimizing Revenue with Two Products.",
  "body": " Optimizing Revenue with Two Products    Video presentation this example    I have a company that produces two products, widgets and gizmos. The two demand functions are: . This gives me the following revenue function: .  Look at the functions of one variable obtained by treating either QG or QW as a constant. Use this information to find where we maximize revenue.    In terms of the last example, we want to start with a table and a wire frame chart.    The wires are obtained by intersecting the graph of the function with a plane where QW or QG is held constant.   Thus, when we treat either QW or QG as a constant we effectively are looking at one of the wires of the wire frame. To illustrate this, we will look at the wires corresponding to and . When , our revenue function simplifies to . Thus, the wire corresponding to is a parabola that bends down.  The interactive below shows how the wireframe is built from cuves defined by slice curves defined by cut planes.   Wire mesh     To find the vertex of the parabola, we take the derivative of our function of QW and set it equal to zero. . This derivative is zero when . That is the only possible place on this wire where we can have a maximum.  Similarly, when , . This derivative is zero when . That is the only possible place on this wire where we can have a maximum.  Putting the information together, the maximum must occur at . Putting these values back in the original equation gives a maximum of $5250 for the revenue function.   "
},
{
  "id": "sec-6-2-PartialDeriva8tives-4-3",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#sec-6-2-PartialDeriva8tives-4-3",
  "type": "Example",
  "number": "6.2.4",
  "title": "Finding and Interpreting Partial Derivatives.",
  "body": " Finding and Interpreting Partial Derivatives   Find the partial derivatives of at . Explain what the partial derivatives mean in terms of the graph.    It is useful to look at a picture with the graph, the two curves obtained by keeping and , and the tangent lines to those curves.   We also want to look at the slices corresponding keeping and .      The yellow curve is obtained by fixing and letting vary. The blue curve is obtained by fixing and letting vary. We now take the partial derivatives with respect to both variables. .  The partial derivatives give the slopes of the purple and red lines above. At the point , the (yellow) curves obtained by treating y as a constant and letting vary has a (magenta) tangent line with a slope of , the value . At the point , the (blue) curves obtained by treating as a constant and letting vary has a (red) tangent line with a slope of 1, the value .   "
},
{
  "id": "sec-6-2-PartialDeriva8tives-5-6",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#sec-6-2-PartialDeriva8tives-5-6",
  "type": "Example",
  "number": "6.2.5",
  "title": "Approximating with a Tangent Plane.",
  "body": " Approximating with a Tangent Plane   The general Cobb-Douglas production function determines the Production (P), in terms of the variables Labor (L) and Capital (C): , or using short-hand notation: , where , , and are constants. For our widget factory, this becomes , with labor production and capital in the appropriate units.  Find . Use a linear approximation to estimate .    We answer the first question by substituting the values into the equation. .  To produce the tangent plane we take the partial derivatives and evaluate them at our base point. .  This gives us our tangent plane: .  Substituting in values gives our estimate. .   "
},
{
  "id": "Reading_Check_Sec6.2",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#Reading_Check_Sec6.2",
  "type": "Reading Question",
  "number": "6.2.4.1",
  "title": "Reading check, Wire Frames, Partial Derivatives, and Tangent Planes.",
  "body": "Reading check, Wire Frames, Partial Derivatives, and Tangent Planes   This question checks your reading comprehension of the material is section 6.2, Wire Frames, Partial Derivatives, and Tangent Planes, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Partial derivatives are not defined for functions of three variables.    The partial derivative of with respect to is represented as .    A partial derivative is obtained by treating all but one variable as a constant.    A tangent plane can be used for a linear approximation of a function of two variables.    Partial derivatives give the slope of the tangent line for the curve obtained by holding one variable constant.    The partial derivative of with respect to is represented as .    We cannot graph functions of two variables.    None of the above             "
},
{
  "id": "exercises-set-sec-6-2-2-2",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-2-2",
  "type": "Exercise",
  "number": "6.2.5.1",
  "title": "",
  "body": " The function is , , and .      Give the 2 functions of one variable through obtained by holding each variable constant. .    Find the partial derivatives of the original function. .    Evaluate the partial derivatives at . .    Give the equation of the tangent plane through .  We need for the equation of the tangent plane. .    The approximation at obtained from the tangent plane. .     "
},
{
  "id": "exercises-set-sec-6-2-2-3",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-2-3",
  "type": "Exercise",
  "number": "6.2.5.2",
  "title": "",
  "body": " The function is , , and .  "
},
{
  "id": "exercises-set-sec-6-2-2-4",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-2-4",
  "type": "Exercise",
  "number": "6.2.5.3",
  "title": "",
  "body": " The function is , , and .      Give the 2 functions of one variable through obtained by holding each variable constant. .    Find the partial derivatives of the original function. .    Evaluate the partial derivatives at . .    Give the equation of the tangent plane through .  We need for the equation of the tangent plane .    The approximation at obtained from the tangent plane. .     "
},
{
  "id": "exercises-set-sec-6-2-2-5",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-2-5",
  "type": "Exercise",
  "number": "6.2.5.4",
  "title": "",
  "body": " The function is the revenue function for selling widgets and gizmos with demand price functions , and , and .  "
},
{
  "id": "exercises-set-sec-6-2-2-6",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-2-6",
  "type": "Exercise",
  "number": "6.2.5.5",
  "title": "",
  "body": " The function is the revenue function for selling widgets and gizmos with demand price functions , and , and .   For the sake of notation we will use the following abbreviations: , and , and .  We need to find the Revenue function to solve the problem: .     Give the 2 functions of one variable through obtained by holding each variable constant. .  This function gives us information about the revenue in terns of Widgets near a production level of 400 widgets and 800 gizmos. We can use Wolfram Alpha to graph this. Assuming there are 800 gizmos the widget influence on the revenue looks like this:   The slope is about . .  The revenue generated by the gizmos assuming the number of widgets equals 400 and the number of gizmos is near 800 gives the following picture:   The slope is about .    Find the partial derivatives of the original function.  In part a we saw that the revenue function seems to be growing faster for the gizmo variable, then for the widget variable. To get more information we can compute the partial derivatives (b) and then evaluate them at (c). .  Note that the first part requires a product rule and then a chain rule to deal with the exponential part of the formula. .    Evaluate the partial derivatives at . .  The estimates we observed in part a were fairly close to the actual rates of change.    Give the equation of the tangent plane through . .  We need to find . Using Wolfram Alpha (or calculator) we get .    The approximation at obtained from the tangent plane.  The estimated revenue when is given by .  In this case the change in production would result in a loss in revenue. This is mainly due to the impact of the lower production in gizmos.     "
},
{
  "id": "exercises-set-sec-6-2-2-7",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-2-7",
  "type": "Exercise",
  "number": "6.2.5.6",
  "title": "",
  "body": " The function is the Cobb-Douglas production function in a widget factory, , where labor is in workers, capital equipment is in units of $20,000, and production is in units of 200 widgets produced per month. In the plane, let , and .  "
},
{
  "id": "exercises-set-sec-6-2-2-8",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-2-8",
  "type": "Exercise",
  "number": "6.2.5.7",
  "title": "",
  "body": " The function is the Cobb-Douglas production function in a country, , where labor is in millions of workers, capital equipment is in units of billions of dollars, and production is in units of billions of dollars per year. In the plane, let , and .      Give the 2 functions of one variable through obtained by holding each variable constant. . Hence both cross sections are exponential function.    Find the partial derivatives of the original function. .  Then we have .  Then we have that .    Evaluate the partial derivatives at . .    Give the equation of the tangent plane through . .    The approximation at obtained from the tangent plane. .  So as both and increase, so does the production. Specifically increasing by 10 million workers and by 2 billion dollars would give an estimated increase in production of billions of dollars worth of units.     "
},
{
  "id": "exercises-set-sec-6-2-3-2",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-3-2",
  "type": "Exercise",
  "number": "6.2.5.8",
  "title": "",
  "body": " The function is , , and .  "
},
{
  "id": "exercises-set-sec-6-2-3-3",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-3-3",
  "type": "Exercise",
  "number": "6.2.5.9",
  "title": "",
  "body": " The function is , , and .      Give the 3 functions of one variable through obtained by holding each variable constant. .    Find the partial derivatives of the original function. .    Evaluate the partial derivatives at . .    Give the equation of the linear approximating function through . .    The approximation at obtained from the function in d. .     "
},
{
  "id": "exercises-set-sec-6-2-3-4",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-3-4",
  "type": "Exercise",
  "number": "6.2.5.10",
  "title": "",
  "body": " The function is  , and .  "
},
{
  "id": "exercises-set-sec-6-2-3-5",
  "level": "2",
  "url": "sec-6-2-PartialDeriva8tives.html#exercises-set-sec-6-2-3-5",
  "type": "Exercise",
  "number": "6.2.5.11",
  "title": "",
  "body": " The function is the revenue function for selling widgets, gizmos, and gadgets with demand price functions , and in space, , and .   We can do the entire problem in terms of gadgets, gizmos and widgets, but for notation sake we will replace them (alphabetically) as follows: .  We need the revenue function and we have the price functions, so we have that .  (Note: the last step\/simplification was done in Wolfram Alpha)     Give the 3 functions of one variable through obtained by holding each variable constant. , so the cross sectional function are all quadratic (parabolas) that open downwards.    Find the partial derivatives of the original function.  Finding the partial derivatives when dealing with three variables is very similar to the procedure we use when we have two variables. We treat the other variables as constants. .    Evaluate the partial derivatives at . .    Give the equation of the linear approximating function through . . Then the linear approximation is given by .    The approximation at obtained from the function in d. .      "
},
{
  "id": "sec-6-3-CriticalPointsExtrema",
  "level": "1",
  "url": "sec-6-3-CriticalPointsExtrema.html",
  "type": "Section",
  "number": "6.3",
  "title": "Critical Points and Extrema",
  "body": " Critical Points and Extrema   Critical Points  Link to worksheets used in this section  With functions of one variable we were interested in places where the derivative is zero, since they made candidate points for the maximum or minimum of a function. If the derivative is not zero, we have a direction that is downhill and moving a little in that direction gives a lower value of the function. Similarly, with functions of two variables we can only find a minimum or maximum for a function if both partial derivatives are 0 at the same time. Such points are called critical points.   The point is a critical point for the multivariable function , if both partial derivatives are 0 at the same time.  In other words, and .    Finding a Local Minimum of a Function    Video of finding local minimum    Use the partial derivatives of to find the minimum of the graph.       Critical Point by Algebra  In the previous section, we already computed .  We need to find the places where both partial derivatives are 0. With this simple system, I can solve this system algebraically and find the only critical point is . .  Subtract the equations to eliminate : . Solve for : . Substitute back and solve for : .    Critical Point by Solver  If the partials are more complicated, I will want to find the critical points another way. I can find the point with Solver.   Critical point setup    To get solver to set both partials to 0 at the same time, I ask it to solve for , while setting as a constraint. Make sure to uncheck the box that makes unconstrained variables non-negative.   Critical point setup    This finds our critical point within our error tolerance.     Critical Point by CAS  We can also use Wolfram|Alpha to find the solution to our system of equations.     Determining the Critical Point is a Minimum  We thus get a critical point at with any of the three methods of solving for both partial derivatives being zero at the same time. Once we have a critical point we want to determine if it is a maximum, minimum, or something else. The easiest way is to look at the graph near the critical point.   It is clear from the graph that this critical point is a local minimum.       It is easy to see that has a critical point at and that that point is a minimum for the function. Similarly, has a critical point at and that that point is a maximum for the function. For some functions, like , which has a critical point at , we can have a maximum in one direction and a minimum in another direction. Such a point is called a saddle point . We note that we can have a saddle point even if the and slice curves both indicate a minimum.   A Saddle Point at a Minimum on Both Axes    Video presentation of this example    Show that has a critical point at , which is a minimum of both slice curves, but is not a local minimum.    We look at the two partial derivatives, and notice they are both zero at the origin. .  We then see that both slice curves are parabolas that bend up, with a minimum at 0. .  However if we take the slice with , we get a parabola bending down, so we don’t have a minimum. . Looking at the graph, we see that this graph does not have a minimum.       Second Partial Derivatives  With only first derivatives, we can just find the critical points. To check if a critical point is maximum, a minimum, or a saddle point, using only the first derivative, the best method is to look at a graph to determine the kind of critical point. For some applications we want to categorize the critical points symbolically.  With functions of one variable we used the second derivative to test if a critical point was a maximum or minimum. In the two variable case we need to define the second derivatives and use them to define the discriminant of a function to test if a critical point is a minimum, maximum, or saddle point. We first need to define second partial derivatives.   Second partials   .   Note that is simply the old second derivative of the curve and is simply the old second derivative of the curve . For functions with continuous second partial derivatives, the mixed partials, and are the same.   Finding Second Partial Derivatives   Find the second partial derivatives of .    We start by computing the first partial derivatives. .  Then we compute the second partial derivatives. . As expected, the mixed partials are the same.      Using the Discriminant to Test Critical Points  To test if a critical point is a maximum, minimum, or saddle point we compute the discriminant of the function.   Discriminant   .    Finding the Discriminant of a Function   Find the discriminant of .    We have already computed the second partial derivatives. . Substituting into the formula, .     Discriminant test  Let be a critical point of .  If and then is a local minimum of .  If and then is a local maximum of .  If then is a saddle point of .  If we do not have enough information to classify the point.    Using the Discriminant to Classify Critical Points   Based on the information given, classify each of the following points as a local maximum, local minimum, saddle point, not a critical point, or not enough information to classify.    p         A  0  0  0  0  1    B  0  1  3  2  4    C  1  0  0  2  3    D  0  0  1  2  0    E  0  0  -1  2  3    F  0  0  -3  1  -2    G  0  0  3  3  3      We need to compute the discriminant and apply the test.    p       Discriminant  Classification    A  0  0  0  0  1  0  Not enough information    B  0  1  3  2  4  8  Not a critical point    C  1  0  0  2  3  -4  Not a critical point    D  0  0  1  2  0  -4  Saddle point    E  0  0  -1  2  3  -7  Saddle point    F  0  0  -3  1  -2  5  Maximum    G  0  0  3  3  3  0  Not enough information       Finding and Classifying Critical Points   Let . Find the critical points and classify them using the discriminant.    We start by computing the first partial derivatives. .  Then we compute the second partial derivatives and the discriminant. .  We have critical points when both first partials are 0, so at , , , and .  At , both and are positive, so we have a local minimum.  At and , is negative, so we have a saddle point.  At , is positive and is negative, so we have a local maximum.      Reading Check  Reading check, Wire Frames, Critical Points and Extrema   This question checks your reading comprehension of the material is section 6.3, Critical Points and Extrema, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    If the discriminant of is positive , and is negative, then we have a local maximum.    The point is a critical point for the multivariable function , if both partial derivatives are 0 at the same time.    If the discriminant of is positive at a critical point, and is positive, then we have a local minimum.    We cannot have a maximum if the discriminant is zero.    If the discriminant is negative at a critical point, then we have a saddle point.    If a function is a minimum in both the and directions, then it is a minimum.    The formula for the discriminant of is is .    A saddle point has a minimum in one direction and a maximum in a different direction.    None of the above                Exercises: Critical Points and Extrema Problems    For the given functions and region:  Find the partial derivatives of the original function.  Find any critical points in the region.  Produce a small graph around any critical point.  Determine if the critical points are maxima, minima, or saddle points.      The function is , for the region , and .       .    Set the partial derivatives equal to 0 and solve for and . .  We can use either the method of substitution (solve for or in one equation and substitute into the other and solve), or method by elimination (multiply both equations by carefully chosen numbers and add\/subtract the equations from each other.)  We will demonstrate method of elimination: . Adding the two equations gives ; hence, .  Pick one of the equations to solve for x (it does not matter which one): implies that so .  We can also solve this system of equations using Wolfram Alpha:     The command in Wolfram Alpha is:   It is worth looking at both the 3D Plot and the Contour Plot.        3D Plot  Contour Plot      The 3D plot suggests a minimum, and this is confirmed by the contour plot which shows they typical view of a local minimum.  As an alternative we can find the discriminant. . Since and we have a local minimum.       The function is , for the region , and .    The function is , for the region , and .       .    Set the partial derivatives equal to 0 and solve for and . .  Adding the equations , and so .  Substituting in the first equation give , and so .  Hence we have a critical points at .    For :         From the picture we conclude that the critical point is a maximum. As an alternative we can find the discriminant. .  Since and we have a local maximum.       The function is , for the region , and .    The function is the revenue function for selling widgets and gizmos with demand price functions for the region , and .   To solve this problem we will rename Gizmos and Widgets . This will make using Wolfram Alpha slightly easier, and symbol manipulation a tad more straight forward. .          Using WolframALpha, the critical point is at .     Using WolframAlpha we get:      From the picture we conclude that the critical point is a maximum.  As an alternative we can find the discriminant. .  Since and we have a local maximum.       The function is the revenue function for selling widgets and gizmos with demand price functions for the region , and . (Warning: There are several critical points.)     Based on the information given, classify each of the following points as a local maximum, local minimum, saddle point, not a critical point, or not enough information to classify.    p         A  1  2  3  4  5    B  0  0  0  0  0    C  0  1  2  5  3    D  0  0  2  2  2    E  0  0  1  2  3    F  0  0  0  1  0    G  0  0  0  -1  0     Add a column for D and classify.    p        Classification    A  1  2  3  4  5  -1  Not Critical    B  0  0  0  0  0  0  Not Enough Info    C  0  1  2  5  3  -19  Not Critical    D  0  0  2  2  2  0  Not Enough Info    E  0  0  1  2  3  -1  Saddle Point    F  0  0  0  1  0  0  Not Enough Info    G  0  0  0  -1  0  0  Not Enough Info      Based on the information given, classify each of the following points as a local maximum, local minimum, saddle point, not a critical point, or not enough information to classify.    p         A  1  2  3  4  5    B  0  0  0  0  0    C  0  1  2  5  3    D  0  0  2  2  2    E  0  0  1  2  3    F  0  0  0  1  0    G  0  0  0  -1  0      Using polynomials of the form , produce a function that has a critical point at , of each type.    A local maximum.  A local minimum.  A saddle point where the function f(x,0) has a local maximum and f(0,y) has a local minimum.  A saddle point where the function f(x,0) and f(0,y) both have inflection points.     It helps to consider the question with only one variable.  has an inflection point at and neither a max nor a minimum.  has minimum at if and a maximum if .  Since all terms are of degree at least three, all second partial derivatives are zero at the origin, so the discriminant test fails.     A local maximum: . Both and are nonnegative, so the function is negative everywhere except at the origin where it is 0.    A local minimum: . Both and are nonnegative, so the function is positive everywhere except at the origin where it is 0.    A saddle point where the function has a local maximum and has a local minimum: .    A saddle point where the function and both have inflection points:        "
},
{
  "id": "sec-6-3-CriticalPointsExtrema-2-4-1",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#sec-6-3-CriticalPointsExtrema-2-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical point "
},
{
  "id": "sec-6-3-CriticalPointsExtrema-2-5",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#sec-6-3-CriticalPointsExtrema-2-5",
  "type": "Example",
  "number": "6.3.1",
  "title": "Finding a Local Minimum of a Function.",
  "body": " Finding a Local Minimum of a Function    Video of finding local minimum    Use the partial derivatives of to find the minimum of the graph.       Critical Point by Algebra  In the previous section, we already computed .  We need to find the places where both partial derivatives are 0. With this simple system, I can solve this system algebraically and find the only critical point is . .  Subtract the equations to eliminate : . Solve for : . Substitute back and solve for : .    Critical Point by Solver  If the partials are more complicated, I will want to find the critical points another way. I can find the point with Solver.   Critical point setup    To get solver to set both partials to 0 at the same time, I ask it to solve for , while setting as a constraint. Make sure to uncheck the box that makes unconstrained variables non-negative.   Critical point setup    This finds our critical point within our error tolerance.     Critical Point by CAS  We can also use Wolfram|Alpha to find the solution to our system of equations.     Determining the Critical Point is a Minimum  We thus get a critical point at with any of the three methods of solving for both partial derivatives being zero at the same time. Once we have a critical point we want to determine if it is a maximum, minimum, or something else. The easiest way is to look at the graph near the critical point.   It is clear from the graph that this critical point is a local minimum.      "
},
{
  "id": "sec-6-3-CriticalPointsExtrema-2-6",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#sec-6-3-CriticalPointsExtrema-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "saddle point "
},
{
  "id": "sec-6-3-CriticalPointsExtrema-2-7",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#sec-6-3-CriticalPointsExtrema-2-7",
  "type": "Example",
  "number": "6.3.5",
  "title": "A Saddle Point at a Minimum on Both Axes.",
  "body": " A Saddle Point at a Minimum on Both Axes    Video presentation of this example    Show that has a critical point at , which is a minimum of both slice curves, but is not a local minimum.    We look at the two partial derivatives, and notice they are both zero at the origin. .  We then see that both slice curves are parabolas that bend up, with a minimum at 0. .  However if we take the slice with , we get a parabola bending down, so we don’t have a minimum. . Looking at the graph, we see that this graph does not have a minimum.    "
},
{
  "id": "sec-6-3-CriticalPointsExtrema-3-6",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#sec-6-3-CriticalPointsExtrema-3-6",
  "type": "Example",
  "number": "6.3.7",
  "title": "Finding Second Partial Derivatives.",
  "body": " Finding Second Partial Derivatives   Find the second partial derivatives of .    We start by computing the first partial derivatives. .  Then we compute the second partial derivatives. . As expected, the mixed partials are the same.   "
},
{
  "id": "sec-6-3-CriticalPointsExtrema-4-4",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#sec-6-3-CriticalPointsExtrema-4-4",
  "type": "Example",
  "number": "6.3.8",
  "title": "Finding the Discriminant of a Function.",
  "body": " Finding the Discriminant of a Function   Find the discriminant of .    We have already computed the second partial derivatives. . Substituting into the formula, .   "
},
{
  "id": "sec-6-3-CriticalPointsExtrema-4-6",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#sec-6-3-CriticalPointsExtrema-4-6",
  "type": "Example",
  "number": "6.3.9",
  "title": "Using the Discriminant to Classify Critical Points.",
  "body": " Using the Discriminant to Classify Critical Points   Based on the information given, classify each of the following points as a local maximum, local minimum, saddle point, not a critical point, or not enough information to classify.    p         A  0  0  0  0  1    B  0  1  3  2  4    C  1  0  0  2  3    D  0  0  1  2  0    E  0  0  -1  2  3    F  0  0  -3  1  -2    G  0  0  3  3  3      We need to compute the discriminant and apply the test.    p       Discriminant  Classification    A  0  0  0  0  1  0  Not enough information    B  0  1  3  2  4  8  Not a critical point    C  1  0  0  2  3  -4  Not a critical point    D  0  0  1  2  0  -4  Saddle point    E  0  0  -1  2  3  -7  Saddle point    F  0  0  -3  1  -2  5  Maximum    G  0  0  3  3  3  0  Not enough information     "
},
{
  "id": "sec-6-3-CriticalPointsExtrema-4-7",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#sec-6-3-CriticalPointsExtrema-4-7",
  "type": "Example",
  "number": "6.3.10",
  "title": "Finding and Classifying Critical Points.",
  "body": " Finding and Classifying Critical Points   Let . Find the critical points and classify them using the discriminant.    We start by computing the first partial derivatives. .  Then we compute the second partial derivatives and the discriminant. .  We have critical points when both first partials are 0, so at , , , and .  At , both and are positive, so we have a local minimum.  At and , is negative, so we have a saddle point.  At , is positive and is negative, so we have a local maximum.   "
},
{
  "id": "Reading_Check_Sec6.3",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#Reading_Check_Sec6.3",
  "type": "Reading Question",
  "number": "6.3.4.1",
  "title": "Reading check, Wire Frames, Critical Points and Extrema.",
  "body": "Reading check, Wire Frames, Critical Points and Extrema   This question checks your reading comprehension of the material is section 6.3, Critical Points and Extrema, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    If the discriminant of is positive , and is negative, then we have a local maximum.    The point is a critical point for the multivariable function , if both partial derivatives are 0 at the same time.    If the discriminant of is positive at a critical point, and is positive, then we have a local minimum.    We cannot have a maximum if the discriminant is zero.    If the discriminant is negative at a critical point, then we have a saddle point.    If a function is a minimum in both the and directions, then it is a minimum.    The formula for the discriminant of is is .    A saddle point has a minimum in one direction and a maximum in a different direction.    None of the above             "
},
{
  "id": "exercises-set-sec-6-3-2-2",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-2-2",
  "type": "Exercise",
  "number": "6.3.5.1",
  "title": "",
  "body": " The function is , for the region , and .       .    Set the partial derivatives equal to 0 and solve for and . .  We can use either the method of substitution (solve for or in one equation and substitute into the other and solve), or method by elimination (multiply both equations by carefully chosen numbers and add\/subtract the equations from each other.)  We will demonstrate method of elimination: . Adding the two equations gives ; hence, .  Pick one of the equations to solve for x (it does not matter which one): implies that so .  We can also solve this system of equations using Wolfram Alpha:     The command in Wolfram Alpha is:   It is worth looking at both the 3D Plot and the Contour Plot.        3D Plot  Contour Plot      The 3D plot suggests a minimum, and this is confirmed by the contour plot which shows they typical view of a local minimum.  As an alternative we can find the discriminant. . Since and we have a local minimum.     "
},
{
  "id": "exercises-set-sec-6-3-2-3",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-2-3",
  "type": "Exercise",
  "number": "6.3.5.2",
  "title": "",
  "body": " The function is , for the region , and .  "
},
{
  "id": "exercises-set-sec-6-3-2-4",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-2-4",
  "type": "Exercise",
  "number": "6.3.5.3",
  "title": "",
  "body": " The function is , for the region , and .       .    Set the partial derivatives equal to 0 and solve for and . .  Adding the equations , and so .  Substituting in the first equation give , and so .  Hence we have a critical points at .    For :         From the picture we conclude that the critical point is a maximum. As an alternative we can find the discriminant. .  Since and we have a local maximum.     "
},
{
  "id": "exercises-set-sec-6-3-2-5",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-2-5",
  "type": "Exercise",
  "number": "6.3.5.4",
  "title": "",
  "body": " The function is , for the region , and .  "
},
{
  "id": "exercises-set-sec-6-3-2-6",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-2-6",
  "type": "Exercise",
  "number": "6.3.5.5",
  "title": "",
  "body": " The function is the revenue function for selling widgets and gizmos with demand price functions for the region , and .   To solve this problem we will rename Gizmos and Widgets . This will make using Wolfram Alpha slightly easier, and symbol manipulation a tad more straight forward. .          Using WolframALpha, the critical point is at .     Using WolframAlpha we get:      From the picture we conclude that the critical point is a maximum.  As an alternative we can find the discriminant. .  Since and we have a local maximum.     "
},
{
  "id": "exercises-set-sec-6-3-2-7",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-2-7",
  "type": "Exercise",
  "number": "6.3.5.6",
  "title": "",
  "body": " The function is the revenue function for selling widgets and gizmos with demand price functions for the region , and . (Warning: There are several critical points.)  "
},
{
  "id": "exercises-set-sec-6-3-3",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-3",
  "type": "Exercise",
  "number": "6.3.5.7",
  "title": "",
  "body": " Based on the information given, classify each of the following points as a local maximum, local minimum, saddle point, not a critical point, or not enough information to classify.    p         A  1  2  3  4  5    B  0  0  0  0  0    C  0  1  2  5  3    D  0  0  2  2  2    E  0  0  1  2  3    F  0  0  0  1  0    G  0  0  0  -1  0     Add a column for D and classify.    p        Classification    A  1  2  3  4  5  -1  Not Critical    B  0  0  0  0  0  0  Not Enough Info    C  0  1  2  5  3  -19  Not Critical    D  0  0  2  2  2  0  Not Enough Info    E  0  0  1  2  3  -1  Saddle Point    F  0  0  0  1  0  0  Not Enough Info    G  0  0  0  -1  0  0  Not Enough Info    "
},
{
  "id": "exercises-set-sec-6-3-4",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-4",
  "type": "Exercise",
  "number": "6.3.5.8",
  "title": "",
  "body": " Based on the information given, classify each of the following points as a local maximum, local minimum, saddle point, not a critical point, or not enough information to classify.    p         A  1  2  3  4  5    B  0  0  0  0  0    C  0  1  2  5  3    D  0  0  2  2  2    E  0  0  1  2  3    F  0  0  0  1  0    G  0  0  0  -1  0    "
},
{
  "id": "exercises-set-sec-6-3-5",
  "level": "2",
  "url": "sec-6-3-CriticalPointsExtrema.html#exercises-set-sec-6-3-5",
  "type": "Exercise",
  "number": "6.3.5.9",
  "title": "",
  "body": " Using polynomials of the form , produce a function that has a critical point at , of each type.    A local maximum.  A local minimum.  A saddle point where the function f(x,0) has a local maximum and f(0,y) has a local minimum.  A saddle point where the function f(x,0) and f(0,y) both have inflection points.     It helps to consider the question with only one variable.  has an inflection point at and neither a max nor a minimum.  has minimum at if and a maximum if .  Since all terms are of degree at least three, all second partial derivatives are zero at the origin, so the discriminant test fails.     A local maximum: . Both and are nonnegative, so the function is negative everywhere except at the origin where it is 0.    A local minimum: . Both and are nonnegative, so the function is positive everywhere except at the origin where it is 0.    A saddle point where the function has a local maximum and has a local minimum: .    A saddle point where the function and both have inflection points:      "
},
{
  "id": "sec-6-4-OptimizationBestFitCurves",
  "level": "1",
  "url": "sec-6-4-OptimizationBestFitCurves.html",
  "type": "Section",
  "number": "6.4",
  "title": "Optimization and Best Fitting Curves",
  "body": " Optimization and Best Fitting Curves  Link to worksheets used in this section  In the last section we looked at using the partial derivatives to find the maximum or minimum of a function in several variables. This is an extension of the optimization problems we did with functions of a single variable. It is worthwhile to take another look at best fitting curves or trendlines, a process Excel has been doing throughout the course and see that it is a particular example of optimization. This will let us to best fitting curves that use models other than the ones used by the trendline command.   Definition of Best Fitting Curve  Before we can find the curve that is best fitting to a set of data, we need to understand how best fitting is defined. We start with the simplest nontrivial example. We consider a data set of 3 points, and a line that we will use to predict the y-value given the x-value, . We want to determine how well the line matches that data. For each point, , in the set we start by finding the corresponding point, , on the line.  This gives us a set of predicted points, .   For each point we now compute the difference between the actual y-values and the predicted y-values. Our errors are the lengths of the brown segments in the picture, in this case . Finally we add the squares of the errors, .  The best fitting line is defined to be the line that that minimizes the sum of the squares of the error. If we are trying to fit the data with a different model, we want to choose the equation from that model that minimizes the sum of the squares of the error.   Now that we have a definition we want to look at fitting a line to a simple data set in three ways. We will start with the data set of three points:    x  2  4  8    y  1  15  15    We want to start with the familiar method, using the trendline command from a graph. Then we want to use solver to minimize the sum of squared errors. Finally, we want to look at the function for sum of squared errors to see how we find the line using partial derivatives. After we have looked at all three approaches for this first example, we will consider more complicated examples.   Video presentation of the first two examples>     Finding a Best-Fit Curve with Trendline   Use the trendline command to find the best fitting line for the data:    x  2  4  8    y  1  15  15      We start by making a table adding a scatterplot and adding a trendline to the graph. We remember to select the option to make the formula visible. The trendline command tells us the slope should be 2 and the intercept should be 1.      Finding a Best-Fit Curve with the Definition and Solver   Use solver and the definition of best fitting to find the best fitting line for the data:    x  2  4  8    y  1  15  15      We need to add the predicting equation to use solver . We start with a randomly chosen slope and intercept for our prediction line. Our table has a PredictedY column, which gives the value that would be on the line with our slope and intercept. We add in the error, which is the difference between the predicted y and the actual y, and the square of the error. We then take the sum of the squares of the errors.   Our use of Solver is similar to when we were looking for a minimum of a function of one variable. We need to designate the cell with the value we want to minimize. We select the button to minimize. Recall that Solver selects the \"Make unconstrained variables non-negative\" and we want to uncheck that box. We now designate two cells that represent variables we can change.   Solver produces the same answer. The best fitting line is .     Finding a Best-Fit Curve with the Definition and Calculus   Use calculus, partial derivatives, and the definition of best fitting to find the best fitting line for the data:    x  2  4  8    y  1  15  15      Before we can use partial derivatives to find a best fitting line, we need a function whose derivatives we are taking. We start with the chart we produced when we were using solver. This gives a formula for the squared error at each point in terms of the slope and intercept of the line.    Point  x  y  Predicted-y              P2  4  15  m*4+b  m*4+b-15  (m*4+b-15)    P3  8  15  m*8+b  m*8+b-15     We can expand the error squared term and add up those values. After a straightforward but tedious computation, we see that we are trying to minimize .  We take the partial derivative of this function with respect to the slope and the intercept . .  Setting the two partials to zero and solving we see the partials are both zero when and . One again, this method produces the same best fitting line.    We can use the same methods with a larger problem.   Use the Solver Method on a larger Data Set    Video presentation of this example    The table below gives census data for a collection of 10 states. Find the best fitting line to predict 2010 population based on 2000 population.     Pop 2000  Pop 2010    Wyoming  493,782  563,62    Delaware  783,600  897,934    Maine  1,274,923  1,328,361    Nevada  1,998,257  2,700,551    Iowa  2,926,324  3,046,355    Kentucky  4,041,769  4,339,367    Arizona  5,130,632  6,392,017    Washington  5,894,121  6,724,540    New Jersey  8,414,350  8,791,894    California  33,871,648  37,253,956      We set up a spreadsheet in the same way we set it up in the last example. For an initial slope we will start with 1.1 for 10% growth. For a starting point we will guess an intercept of 0. As we did in the last example, the predicted population in 2010 is the slope times the population in 2000 plus the intercept. We add extra columns for the predicted population, the error between the prediction and the actual population, the square of the error. At the bottom of the last column, we add the squared errors. This gives the value we want to minimize.   When we use solver, the best fitting line is .    The advantage of using the sum of squares definition is that we can find a best fitting curve using a model not supported by Excel. For example, if we have money invested with interest, but a portion of the capital kept available as cash without earning interest, we are looking for a curve of the form: .  The trendline command does not let us choose such a model to find a best fitting curve. It is straightforward using the best fit construction.   Finding a Best-Fit Curve for a Nonstandard Model Equation    Video presentation of this example    We are given the following data on the value of a portfolio over time:    Year  Amount    0  $10,000    2  $10,920    5  $12,490    8  $14,300    9  $14,960    12  $17,169    14  $18,820    17  $21,630    19  $23,740    20  $24,880    We think the investor put some money in a secure account that does not give interest (a coffee can) and the rest of the money in an account that bore interest (an investment account). Find the amount deposited in each account and the interest rate of the investment account.    We set this up much like we did for the linear model, except of model equation is now .   We then use Solver to minimize cell E26 , by changing cells B20:B22 . Our solution indicates that , , and .    When we use this technique with other mathematical models, the only change is in the formula used for the predicted value.   Finding a Best-Fit Logistic Curve    Video presentation of this example    We are managing a wood harvesting business. The number of trees available in a plot is modeled as constrained growth. That means we expect it to be modeled by a logistic equation. .  We have the following information. Find the best fitting curve.    Time  Trees    0  150    5  400    10  1030    20  5300    30  12020    40  14510      We set this up much like we did for the linear model, but using the logistic model.  We then use Solver to minimize cell E12 , by changing cells B1:B3 . Our solution indicates that , , and .      Strengths and weaknesses of the three methods of fitting curves  We have examined three methods for finding a best fitting curve. From , we reviewed the method of plotting points and adding a trendline. Using the sum of least squared error definition of best fit, we looked at creating an error function and using Solver to minimize the error. We also looked at using partial derivatives to find critical points of the error function. It is worthwhile to look at some of the strengths and weaknesses of each method.  The method of graphing points and using the trendline command has the advantage of being the simplest method when it works. The biggest disadvantage of this method is that it only works with a small collection of mathematical models. (We can use this method if our desired equation is linear, , logarithmic, , polynomial of degree no more than 6, power, , or exponential, .) As we have seen in this section, it is not hard to find situations where some other model should be used. This method also has the disadvantage of simply giving an answer without showing intermediate steps that might provide other useful information.  The method of using partial derivatives has the advantage of being mathematically clear. It shows us what is going on when we find a best fitting curve. However, in all but the simplest cases, this method has the disadvantage of involving a daunting flood of computations. This method is good for informing us about how the method works, but not a method we want to use in practice for most realistic problems.  The middle method, using Solver, is a hybrid of the other two methods. We start by deciding on the mathematical model that should fit our situation. As we saw, the method is straightforward to adapt to any kind of equation. It is straightforward to explicitly build our error function. This method also has the advantage of making the error attributed to each point visible. We can see if another curve is almost as good as the solution we find.  The disadvantages of the Solver method are the standard disadvantages of using Solver to find a minimum. Recall that Solver simply finds a local minimum from a starting point. Since solver uses numerical methods it looks for places where the partial derivatives are within our tolerance bounds of zero. We cannot expect Solver to give an answer that is more precise than the tolerance bounds. With all of the methods we should be aware that we need enough points to get a reasonable fit of the curve. Intuitively, a small change in any point should not cause a big change in the curve.  As a general rule, we will use the trendline command when it works with the kind of equation we have decided to use as our model.    Reading Check  Reading check, Optimization and Best Fitting Curves   This question checks your reading comprehension of the material is section 6.4, Optimization and Best Fitting Curves, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Solver always find the global minimum of a function.    The method of graphing points and using the trendline command has the advantage of being the simplest method when it works.    The best fitting line is defined to be the line that that minimizes the sum of the squares of the error.    The minimize sum of squared errors method works with a broader array of functions.    the trendline command only works with a limited number of kinds of functions.    To find the best fitting curve we try to use the trendline command, even if the curve is not a line.    The method of using partial derivatives has the advantage of easiest to use.    None of the above                Exercises: Optimization and Best Fitting Curves Problems    For the given data sets:  Plot the points and add a linear trendline. Show the equation of the line.  Create a spreadsheet to compare the data to a linear function.  Add error to your spreadsheet. Find the best fitting line, using Solver.  Explicitly find the sum of squared errors function as a quadratic function of the slope m, and the intercept b.  Find the values of m and b that minimize the error function by taking partial derivatives and setting them equal to 0.      The given points are:    x  -2  0  6    y  -7  5  15     With trendlines we get the best fitting line:   The line that gives us the best fitting curve is .  Using the least square error method we have the following values.  We can set the information up as rows or as columns. Using the rows form the initial problem we have:   Next we use Solver to minimize the sum of the errors.   We started with and (somewhat arbitrary choices). We unchecked the constraint that the variables should be non-negative ( and\/or could theoretically be negative).   The least square method gives us the function .  (Comment: this shows that the least squares method gives the same answer as the trendline method. The Least Square method is a more general technique however and can be used in cases where the trendlines are not sufficient. )    The given points are:    x  -2  0  6    y  24  10  20      The given points are:    x  -3  -1  1  3    y  -2  6  10  10      We would define and and use these to create . If we had not done the trendline, the question would be: what should the initial values for and ?  The data ranges from to which suggests a slope of . Looking at the data near the -axis suggests an initial guess of . So we would start with an Excel sheet like this:    Setting up Solver as shown above we get and .    The given points are:    x  -2  0  2  4    y  -7  5  11  11        Find the curve of the indicated type that gives the best fit for the data.    Sally has money invested in a single account that compounds the return back into the account. Thus, the model we want to use for the amount is: .  With the data:    Time  0  2  5  10  15  20    Amount  $5000  $5600  $6700  $9000  $12000  $16000    Find the best fitting curve of the given model.   A scatter plot of the data will help us find some good initial guesses for the initial amount and the rate.   The -intercept is about $5000. This occurs when time = 0, so the initial guess for the initial amount will be 5,000. The graph is an increasing function, so we know rate .  Choosing will cause problems (the base of an exponential function should not be 1). Assuming this is a reasonable investment problem we will assume 5$ growth, so .  The initial set-up looks like this. We have included a graph of the data given versus the predicted numbers. The initial guesses are not bad, but clearly we can do better.   After using Solver we determine that the best model function for our data is as follows:    . Notice that the data is now indistinguishable from the model function in the graph.  Remark: If we use Trendlines to find a exponential function that fits the data, we would get . The least square error analysis shows that this is not as good of an approximation as the one we just found using Solver! The least squares error for the trendline is approximately 30% greater than for the value we found using Solver.    Fred has put some of his money in a cash account that pays no interest and the rest of his money a single account that compounds the return back into the account. Thus, the model we want to use for the amount is .  With the data:    Time  0  2  5  10  15  20    Amount  $10000  $11000  $14000  $19000  $27000  $39000    Find the best fitting curve of the given model.    Mary has put some of her money in an investment that pays simple interest and the rest of her money into a single account that compounds the return back into the account. Thus, the model we want to use for the amount is .  With the data:    Time  0  2  5  10  15  20  30  40    Amount  $10000  $11300  $13500  $18300  $24700  $33500  $62600  $118800    Find the best fitting curve of the given model.   The function we are looking for has a linear component ( ), and an exponential component. There is no trendline that would do this for us.  What do we know about these values?  We have $10,000 at the very beginning and this is split into two different investments, so Amount 1 + Amount 2 = $10,000.  What is Return 1? It should be the return on the first part of the investment. So it should be some amount we receive on an investment of at most $10,000. A first guess would be that the value is in the hundreds of dollars, but maybe close to $150 or $200?  The rate is our final parameter. This is the growth due to interests. We will start with a guess of .    The Excel commands used to generate the table are as follows:   It is worth graphing both the actual data and the predicted data to see if we are setting the problem up correctly.   The general shape of the predicted values graph seems fine. The values are off, but Solver will be able to reduce the error.   The solution is:    Amount 1  3317.59    return 1  163.19    rate  1.07    Hence , and we have that .  In Excel the data and the predicted values now line up very nicely.    John has divided his money between two accounts. They both compound their returns, but they pay different rates. Thus, the formula that models the investment is: .  With the data:    Time  0  2  5  10  15  20  30  40    Amount  $10000  $11500  $14000  $20000  $29000  $41500  $87000  $183500    Find the best fitting curve of the given model.     "
},
{
  "id": "sec-6-4-OptimizationBestFitCurves-8",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#sec-6-4-OptimizationBestFitCurves-8",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " Video presentation of the first two examples>   "
},
{
  "id": "sec-6-4-OptimizationBestFitCurves-9",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#sec-6-4-OptimizationBestFitCurves-9",
  "type": "Example",
  "number": "6.4.2",
  "title": "Finding a Best-Fit Curve with Trendline.",
  "body": " Finding a Best-Fit Curve with Trendline   Use the trendline command to find the best fitting line for the data:    x  2  4  8    y  1  15  15      We start by making a table adding a scatterplot and adding a trendline to the graph. We remember to select the option to make the formula visible. The trendline command tells us the slope should be 2 and the intercept should be 1.    "
},
{
  "id": "sec-6-4-OptimizationBestFitCurves-10",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#sec-6-4-OptimizationBestFitCurves-10",
  "type": "Example",
  "number": "6.4.3",
  "title": "Finding a Best-Fit Curve with the Definition and Solver.",
  "body": " Finding a Best-Fit Curve with the Definition and Solver   Use solver and the definition of best fitting to find the best fitting line for the data:    x  2  4  8    y  1  15  15      We need to add the predicting equation to use solver . We start with a randomly chosen slope and intercept for our prediction line. Our table has a PredictedY column, which gives the value that would be on the line with our slope and intercept. We add in the error, which is the difference between the predicted y and the actual y, and the square of the error. We then take the sum of the squares of the errors.   Our use of Solver is similar to when we were looking for a minimum of a function of one variable. We need to designate the cell with the value we want to minimize. We select the button to minimize. Recall that Solver selects the \"Make unconstrained variables non-negative\" and we want to uncheck that box. We now designate two cells that represent variables we can change.   Solver produces the same answer. The best fitting line is .   "
},
{
  "id": "sec-6-4-OptimizationBestFitCurves-11",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#sec-6-4-OptimizationBestFitCurves-11",
  "type": "Example",
  "number": "6.4.4",
  "title": "Finding a Best-Fit Curve with the Definition and Calculus.",
  "body": " Finding a Best-Fit Curve with the Definition and Calculus   Use calculus, partial derivatives, and the definition of best fitting to find the best fitting line for the data:    x  2  4  8    y  1  15  15      Before we can use partial derivatives to find a best fitting line, we need a function whose derivatives we are taking. We start with the chart we produced when we were using solver. This gives a formula for the squared error at each point in terms of the slope and intercept of the line.    Point  x  y  Predicted-y              P2  4  15  m*4+b  m*4+b-15  (m*4+b-15)    P3  8  15  m*8+b  m*8+b-15     We can expand the error squared term and add up those values. After a straightforward but tedious computation, we see that we are trying to minimize .  We take the partial derivative of this function with respect to the slope and the intercept . .  Setting the two partials to zero and solving we see the partials are both zero when and . One again, this method produces the same best fitting line.   "
},
{
  "id": "sec-6-4-OptimizationBestFitCurves-13",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#sec-6-4-OptimizationBestFitCurves-13",
  "type": "Example",
  "number": "6.4.5",
  "title": "Use the Solver Method on a larger Data Set.",
  "body": " Use the Solver Method on a larger Data Set    Video presentation of this example    The table below gives census data for a collection of 10 states. Find the best fitting line to predict 2010 population based on 2000 population.     Pop 2000  Pop 2010    Wyoming  493,782  563,62    Delaware  783,600  897,934    Maine  1,274,923  1,328,361    Nevada  1,998,257  2,700,551    Iowa  2,926,324  3,046,355    Kentucky  4,041,769  4,339,367    Arizona  5,130,632  6,392,017    Washington  5,894,121  6,724,540    New Jersey  8,414,350  8,791,894    California  33,871,648  37,253,956      We set up a spreadsheet in the same way we set it up in the last example. For an initial slope we will start with 1.1 for 10% growth. For a starting point we will guess an intercept of 0. As we did in the last example, the predicted population in 2010 is the slope times the population in 2000 plus the intercept. We add extra columns for the predicted population, the error between the prediction and the actual population, the square of the error. At the bottom of the last column, we add the squared errors. This gives the value we want to minimize.   When we use solver, the best fitting line is .   "
},
{
  "id": "sec-6-4-OptimizationBestFitCurves-16",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#sec-6-4-OptimizationBestFitCurves-16",
  "type": "Example",
  "number": "6.4.7",
  "title": "Finding a Best-Fit Curve for a Nonstandard Model Equation.",
  "body": " Finding a Best-Fit Curve for a Nonstandard Model Equation    Video presentation of this example    We are given the following data on the value of a portfolio over time:    Year  Amount    0  $10,000    2  $10,920    5  $12,490    8  $14,300    9  $14,960    12  $17,169    14  $18,820    17  $21,630    19  $23,740    20  $24,880    We think the investor put some money in a secure account that does not give interest (a coffee can) and the rest of the money in an account that bore interest (an investment account). Find the amount deposited in each account and the interest rate of the investment account.    We set this up much like we did for the linear model, except of model equation is now .   We then use Solver to minimize cell E26 , by changing cells B20:B22 . Our solution indicates that , , and .   "
},
{
  "id": "sec-6-4-OptimizationBestFitCurves-18",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#sec-6-4-OptimizationBestFitCurves-18",
  "type": "Example",
  "number": "6.4.9",
  "title": "Finding a Best-Fit Logistic Curve.",
  "body": " Finding a Best-Fit Logistic Curve    Video presentation of this example    We are managing a wood harvesting business. The number of trees available in a plot is modeled as constrained growth. That means we expect it to be modeled by a logistic equation. .  We have the following information. Find the best fitting curve.    Time  Trees    0  150    5  400    10  1030    20  5300    30  12020    40  14510      We set this up much like we did for the linear model, but using the logistic model.  We then use Solver to minimize cell E12 , by changing cells B1:B3 . Our solution indicates that , , and .    "
},
{
  "id": "Reading_Check_Sec6.4",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#Reading_Check_Sec6.4",
  "type": "Reading Question",
  "number": "6.4.1",
  "title": "Reading check, Optimization and Best Fitting Curves.",
  "body": "Reading check, Optimization and Best Fitting Curves   This question checks your reading comprehension of the material is section 6.4, Optimization and Best Fitting Curves, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Solver always find the global minimum of a function.    The method of graphing points and using the trendline command has the advantage of being the simplest method when it works.    The best fitting line is defined to be the line that that minimizes the sum of the squares of the error.    The minimize sum of squared errors method works with a broader array of functions.    the trendline command only works with a limited number of kinds of functions.    To find the best fitting curve we try to use the trendline command, even if the curve is not a line.    The method of using partial derivatives has the advantage of easiest to use.    None of the above             "
},
{
  "id": "exercises-set-sec-6-4-2-2",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#exercises-set-sec-6-4-2-2",
  "type": "Exercise",
  "number": "6.4.1",
  "title": "",
  "body": " The given points are:    x  -2  0  6    y  -7  5  15     With trendlines we get the best fitting line:   The line that gives us the best fitting curve is .  Using the least square error method we have the following values.  We can set the information up as rows or as columns. Using the rows form the initial problem we have:   Next we use Solver to minimize the sum of the errors.   We started with and (somewhat arbitrary choices). We unchecked the constraint that the variables should be non-negative ( and\/or could theoretically be negative).   The least square method gives us the function .  (Comment: this shows that the least squares method gives the same answer as the trendline method. The Least Square method is a more general technique however and can be used in cases where the trendlines are not sufficient. )  "
},
{
  "id": "exercises-set-sec-6-4-2-3",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#exercises-set-sec-6-4-2-3",
  "type": "Exercise",
  "number": "6.4.2",
  "title": "",
  "body": " The given points are:    x  -2  0  6    y  24  10  20    "
},
{
  "id": "exercises-set-sec-6-4-2-4",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#exercises-set-sec-6-4-2-4",
  "type": "Exercise",
  "number": "6.4.3",
  "title": "",
  "body": " The given points are:    x  -3  -1  1  3    y  -2  6  10  10      We would define and and use these to create . If we had not done the trendline, the question would be: what should the initial values for and ?  The data ranges from to which suggests a slope of . Looking at the data near the -axis suggests an initial guess of . So we would start with an Excel sheet like this:    Setting up Solver as shown above we get and .  "
},
{
  "id": "exercises-set-sec-6-4-2-5",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#exercises-set-sec-6-4-2-5",
  "type": "Exercise",
  "number": "6.4.4",
  "title": "",
  "body": " The given points are:    x  -2  0  2  4    y  -7  5  11  11    "
},
{
  "id": "exercises-set-sec-6-4-3-2",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#exercises-set-sec-6-4-3-2",
  "type": "Exercise",
  "number": "6.4.5",
  "title": "",
  "body": " Sally has money invested in a single account that compounds the return back into the account. Thus, the model we want to use for the amount is: .  With the data:    Time  0  2  5  10  15  20    Amount  $5000  $5600  $6700  $9000  $12000  $16000    Find the best fitting curve of the given model.   A scatter plot of the data will help us find some good initial guesses for the initial amount and the rate.   The -intercept is about $5000. This occurs when time = 0, so the initial guess for the initial amount will be 5,000. The graph is an increasing function, so we know rate .  Choosing will cause problems (the base of an exponential function should not be 1). Assuming this is a reasonable investment problem we will assume 5$ growth, so .  The initial set-up looks like this. We have included a graph of the data given versus the predicted numbers. The initial guesses are not bad, but clearly we can do better.   After using Solver we determine that the best model function for our data is as follows:    . Notice that the data is now indistinguishable from the model function in the graph.  Remark: If we use Trendlines to find a exponential function that fits the data, we would get . The least square error analysis shows that this is not as good of an approximation as the one we just found using Solver! The least squares error for the trendline is approximately 30% greater than for the value we found using Solver.  "
},
{
  "id": "exercises-set-sec-6-4-3-3",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#exercises-set-sec-6-4-3-3",
  "type": "Exercise",
  "number": "6.4.6",
  "title": "",
  "body": " Fred has put some of his money in a cash account that pays no interest and the rest of his money a single account that compounds the return back into the account. Thus, the model we want to use for the amount is .  With the data:    Time  0  2  5  10  15  20    Amount  $10000  $11000  $14000  $19000  $27000  $39000    Find the best fitting curve of the given model.  "
},
{
  "id": "exercises-set-sec-6-4-3-4",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#exercises-set-sec-6-4-3-4",
  "type": "Exercise",
  "number": "6.4.7",
  "title": "",
  "body": " Mary has put some of her money in an investment that pays simple interest and the rest of her money into a single account that compounds the return back into the account. Thus, the model we want to use for the amount is .  With the data:    Time  0  2  5  10  15  20  30  40    Amount  $10000  $11300  $13500  $18300  $24700  $33500  $62600  $118800    Find the best fitting curve of the given model.   The function we are looking for has a linear component ( ), and an exponential component. There is no trendline that would do this for us.  What do we know about these values?  We have $10,000 at the very beginning and this is split into two different investments, so Amount 1 + Amount 2 = $10,000.  What is Return 1? It should be the return on the first part of the investment. So it should be some amount we receive on an investment of at most $10,000. A first guess would be that the value is in the hundreds of dollars, but maybe close to $150 or $200?  The rate is our final parameter. This is the growth due to interests. We will start with a guess of .    The Excel commands used to generate the table are as follows:   It is worth graphing both the actual data and the predicted data to see if we are setting the problem up correctly.   The general shape of the predicted values graph seems fine. The values are off, but Solver will be able to reduce the error.   The solution is:    Amount 1  3317.59    return 1  163.19    rate  1.07    Hence , and we have that .  In Excel the data and the predicted values now line up very nicely.  "
},
{
  "id": "exercises-set-sec-6-4-3-5",
  "level": "2",
  "url": "sec-6-4-OptimizationBestFitCurves.html#exercises-set-sec-6-4-3-5",
  "type": "Exercise",
  "number": "6.4.8",
  "title": "",
  "body": " John has divided his money between two accounts. They both compound their returns, but they pay different rates. Thus, the formula that models the investment is: .  With the data:    Time  0  2  5  10  15  20  30  40    Amount  $10000  $11500  $14000  $20000  $29000  $41500  $87000  $183500    Find the best fitting curve of the given model.  "
},
{
  "id": "sec-7-1-RiemannSums",
  "level": "1",
  "url": "sec-7-1-RiemannSums.html",
  "type": "Section",
  "number": "7.1",
  "title": "Approximating Definite Integrals as Sums",
  "body": "Approximating Definite Integrals as Sums   Link to worksheets used in this section   The standard approach to accumulation is to reduce the problem to an area problem. If we let be a velocity function, then the area under the curve between a starting value of and a stopping value of is the distance traveled in that time period. In the easiest case, the velocity is constant and we use the simple formula .  Distance with Constant Speed   Find the distance traveled if I go 60 mph from 12:30 until 3:00.    This problem is easy to do without any calculus. If we graph the velocity function   we find the area of the rectangle by taking base times height and noting . Note that we do the same computation if I ask how much I earn over a period of 2.5 years if I make $60K a year, or how much oil is produced in 2 and a half hours form an oil well that produces 60 barrels of oil an hour.    In a similar manner, if the function I am accumulating is non-constant and linear, I can find area by using the area formula of a triangle, one half base time height.   Approximating Area under a Quadratic Functions   The question becomes more difficult when I want to find the area under a curve that is not linear. Suppose for example that we want to find the area under the curve between and .   We no longer have a nice formula from geometry for the area. Thus we start making approximations. The easiest approximation is to note that the area has to be less than the area of the 4 by 4 rectangle we can draw around the region.   We can improve our estimate by dividing the interval into 4 equal subintervals and then taking the combined area of the 4 rectangles we need to contain the region. This reduces our upper estimate from 16 to 14.   Similarly we could get a better estimate by looking at 8 subintervals and seeing that the area under the parabola is no more than 12.5.   If we continue the process with 100 subintervals, our estimate is down to 10.83. From the picture, it looks like a fairly good estimate.   We can change the number of subdivisions with the interactive below.   GeoGebra: Upper sum approximation    While this process would be very long and tedious by hand, the process of finding the area of each of 100 rectangles and adding the areas is rather easy in Excel. Before going to Excel, we want to make a small adjustment in our method. The method we used always gives an overestimate. It also requires that we know where the function reaches a maximum on each subinterval. It will be easier if we estimate area by always taking the height of the rectangle at the right end of the subinterval. With 4 subintervals this gives an estimate of 10 for our area.   When we increase the number of subintervals to 100, we once again get a fairly good estimate of the area. From the picture, it is hard to see difference between the area defined by the curve and the area defined by the rectangles.     Approximating an Area with a Riemann Sum with Excel    Riemann Sum with Excel Video    Find the area under the curve with between 0 and 4 with Excel    We will approximate the area with 100 rectangles. We set up a worksheet to find the area of the first rectangle.      Following our standard practice, we set up the question and answer in labeled areas at the top of the worksheet. The width of a subinterval is the width of the whole interval divided by the number of subintervals. The column is for the x value at the right side of the n-th subinterval. We calculate the value of by taking the starting point, , and adding times the width of a subinterval. We then evaluate the function at , which we label . The area of the n-th rectangle is the height, or , times the width of the subinterval. The last column is the total area for the first n rectangles. The area for 100 rectangles is our area estimate. Since we don't want to have to look all over for our answer, we bring the area up to cell D2 with the OFFSET command. The command OFFSET(E6,B3,0) starts in cell E6, goes down B3 (the number of subintervals) rows, and goes over 0 columns. In our case, it finds the value in cell E106 and puts it in cell E6.  To find the area we quick fill our worksheet.      For a more accurate estimate we divide into smaller rectangles.     While 100 subintervals will be close enough for most of the problems we are interested in, the \"area\", or definite integral, will be defined as the limit of this sum as the number of subintervals goes to infinity. In other words, the definite integral is the area under the curve as the rectangles get infinitely thinner. In math notation:    with and .   The sums of the form, with and , are called Riemann sums . The limit, written , is called a definite integral .  As a memory aid, it is worth noting that the symbol used for the sum is an upper case sigma, or S for sum in the Greek alphabet. When we take the limit we use an integral sign, which is a stylized S in the Latin alphabet.  It is worth noting that in this definition we are finding “signed area under a curve.” If the function is negative over the interval, the integral will also be negative, in the same we would have a negative change in our bank statement if we were steadily removing money. Similarly we can get a negative integral when the ends of the interval are reversed. If I am steadily adding money to an account, the net change is negative if I measure from 5 years in the future back to today.  We should note that, for functions nice enough to be considered in this class, we get to the same limit by using rectangles with the function evaluated on the right side of the rectangle or the left side of the rectangle, or any point in the rectangle we choose. Choosing the right hand side for evaluation makes our formulas a little simpler.   Present Value of a Revenue Stream    Video presentation of this example    The estimated current value of the revenue stream, in billions of dollars, of a company being bought out is . The present value of that revenue stream is the area of the region under the curve from to . Use 500 intervals to estimate the present value.    Although the data in the question for this example is quite different from the previous example, the setup for the worksheet to evaluate the Riemann sum is the same.   With 500 intervals we estimate the present value of the revenue stream to be worth $2.3222 Billion. If we had only used 100 intervals, the estimate would have been for $2.318 Billion, while 1000 intervals gives an estimate of $2.3232 Billion.     Reading Check  Reading check, Approximating Definite Integrals as Sums   This question checks your reading comprehension of the material is section 7.1, Approximating Definite Integrals as Sums, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We can approximate the area under a curve with a sum of rectangular areas.    One of the examples in the section looked at finding the present value of a revenue stream.    The text mentioned a memory aid that uses the Greek and Latin alphabets.    For functions in this class it does not matter is our sum uses right or left hand points to form the rectangle in a subinterval.    One of the examples in the section looked at finding the volume of a solid of revolution.    This sections gave a list of formulas of definite integrals of nice functions.    The limit of a Riemann Sum is a Definite Integral.    None of the above                Exercises: Approximating Definite Integrals as Sums Problems   Let . Estimate the area under on the interval using 100 rectangles and a right hand rule.   The Excel commands are:   The answer is given as follows. Note that in this screen grab the center part of the sidebyside was hidden so that the image is a reasonable size. The area is approximately 133.98.     Let . Estimate the area under on the interval using 200 rectangles and a right hand rule.    Let . Estimate the area on the interval under using 200 rectangles and a right hand rule.   The set-up is very similar to the one in problem 1.   The area underneath the curve is approximately 193.228 according to the Excel computation.     Let . Estimate the area below the curve and above the x-axis using 100 rectangles and a right hand rule.    Let . Estimate the area under on the interval using 50 rectangles and a right hand rule.   A set-up similar to the one in problems 1 and 3 gives us an approximation for the area of 42.69.     Let . Estimate the area on the interval under using 100 rectangles and a right hand rule.    Let . Estimate the area under on the interval using 100 rectangles and a right hand rule.   The area underneath the curve is approximately 12.92     Consider the area under the line on the interval .  Using only what you know about areas of rectangles and triangles, find the exact area.  Find the approximations to the area using Riemann sums with 50, 100, and 200 intervals.  Find the error for each of the three approximations you made.  For this case, make an estimate of the error in terms of the number of intervals used.      Consider the area under the line on the interval . In later sections we will show that the exact area is 9.  Find the approximations to the area using Riemann sums with 1, 10, 100, and 1000 intervals.  Find the error for each of the four approximations you made.  For this case, make an estimate of the error in terms of the number of intervals used.  How many intervals would we need for an error of less that ?          N  Riemann Sum  Error    1  27  18    10  10.395  1.395    100  9.135  0.135    1000  9.0135  0.0135     The errors are included in the sidebyside above. Subtract 9 from the approximation found in Excel. Note that there is a bit of a pattern.  The larger values of N seem to have an error of about   If error . Then . Then , and hence .       You have a natural gas well. You have been told that as gas is extracted and the pressure in the well lessens, the rate of extraction also decreases. The weekly production is cubic feet per week.    Estimate the production in the first year.  Estimate the production in the third year.      Sales of your new gadget are estimated at units per month.  Estimate the total sales in the first year.  Estimate the total sales in the fourth year.  Estimate the total sales over the first 5 years.        Estimate the total sales in the first year.  The total sales would be the sum of the sales each month. This is the same as a right hand sum of the function on the interval with 12 subdivisions. The Excel commands are as follows (quick fill down to complete the Excel table):   Results:   So the total sales is $8,762.22    Estimate the total sales in the fourth year.  We need to adjust the computation so that the sales added correspond to the sales of the fourth year only. This would be from month 36 to 48. We can just adjust the values in the Excel table above!   So the total sales in the fourth year are $64,503.12    Estimate the total sales over the first 5 years.  This will be a much larger range. We will add the sales for the first 5 years. In other words: the first 60 months. Note that this means we want to change to 60 (we want to do the computation for each month). The rows from 13 to 65 have been hidden from views to create a smaller size image for this solution manual:   The total sales for the first 5 years is $248,947.41       You run a low cost, high volume widget manufacturing plant. For reports, you write your reports in terms of millions of units. When measured in units of one million widgets and one million dollars, the marginal profit function is .    Find the profit from making 12 million widgets.  What quantities have 0 marginal profit?  What is the maximum profit to be made manufacturing widgets?      "
},
{
  "id": "sec-7-1-RiemannSums-4",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#sec-7-1-RiemannSums-4",
  "type": "Example",
  "number": "7.1.1",
  "title": "Distance with Constant Speed.",
  "body": "Distance with Constant Speed   Find the distance traveled if I go 60 mph from 12:30 until 3:00.    This problem is easy to do without any calculus. If we graph the velocity function   we find the area of the rectangle by taking base times height and noting . Note that we do the same computation if I ask how much I earn over a period of 2.5 years if I make $60K a year, or how much oil is produced in 2 and a half hours form an oil well that produces 60 barrels of oil an hour.   "
},
{
  "id": "area-parabola-down-GeoGebra",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#area-parabola-down-GeoGebra",
  "type": "Example",
  "number": "7.1.2",
  "title": "Approximating Area under a Quadratic Functions.",
  "body": " Approximating Area under a Quadratic Functions   The question becomes more difficult when I want to find the area under a curve that is not linear. Suppose for example that we want to find the area under the curve between and .   We no longer have a nice formula from geometry for the area. Thus we start making approximations. The easiest approximation is to note that the area has to be less than the area of the 4 by 4 rectangle we can draw around the region.   We can improve our estimate by dividing the interval into 4 equal subintervals and then taking the combined area of the 4 rectangles we need to contain the region. This reduces our upper estimate from 16 to 14.   Similarly we could get a better estimate by looking at 8 subintervals and seeing that the area under the parabola is no more than 12.5.   If we continue the process with 100 subintervals, our estimate is down to 10.83. From the picture, it looks like a fairly good estimate.   We can change the number of subdivisions with the interactive below.   GeoGebra: Upper sum approximation    While this process would be very long and tedious by hand, the process of finding the area of each of 100 rectangles and adding the areas is rather easy in Excel. Before going to Excel, we want to make a small adjustment in our method. The method we used always gives an overestimate. It also requires that we know where the function reaches a maximum on each subinterval. It will be easier if we estimate area by always taking the height of the rectangle at the right end of the subinterval. With 4 subintervals this gives an estimate of 10 for our area.   When we increase the number of subintervals to 100, we once again get a fairly good estimate of the area. From the picture, it is hard to see difference between the area defined by the curve and the area defined by the rectangles.    "
},
{
  "id": "area-parabola-down-Excel",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#area-parabola-down-Excel",
  "type": "Example",
  "number": "7.1.4",
  "title": "Approximating an Area with a Riemann Sum with Excel.",
  "body": "Approximating an Area with a Riemann Sum with Excel    Riemann Sum with Excel Video    Find the area under the curve with between 0 and 4 with Excel    We will approximate the area with 100 rectangles. We set up a worksheet to find the area of the first rectangle.      Following our standard practice, we set up the question and answer in labeled areas at the top of the worksheet. The width of a subinterval is the width of the whole interval divided by the number of subintervals. The column is for the x value at the right side of the n-th subinterval. We calculate the value of by taking the starting point, , and adding times the width of a subinterval. We then evaluate the function at , which we label . The area of the n-th rectangle is the height, or , times the width of the subinterval. The last column is the total area for the first n rectangles. The area for 100 rectangles is our area estimate. Since we don't want to have to look all over for our answer, we bring the area up to cell D2 with the OFFSET command. The command OFFSET(E6,B3,0) starts in cell E6, goes down B3 (the number of subintervals) rows, and goes over 0 columns. In our case, it finds the value in cell E106 and puts it in cell E6.  To find the area we quick fill our worksheet.      For a more accurate estimate we divide into smaller rectangles.    "
},
{
  "id": "sec-7-1-RiemannSums-10",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#sec-7-1-RiemannSums-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Riemann sums definite integral "
},
{
  "id": "sec-7-1-RiemannSums-14",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#sec-7-1-RiemannSums-14",
  "type": "Example",
  "number": "7.1.8",
  "title": "Present Value of a Revenue Stream.",
  "body": " Present Value of a Revenue Stream    Video presentation of this example    The estimated current value of the revenue stream, in billions of dollars, of a company being bought out is . The present value of that revenue stream is the area of the region under the curve from to . Use 500 intervals to estimate the present value.    Although the data in the question for this example is quite different from the previous example, the setup for the worksheet to evaluate the Riemann sum is the same.   With 500 intervals we estimate the present value of the revenue stream to be worth $2.3222 Billion. If we had only used 100 intervals, the estimate would have been for $2.318 Billion, while 1000 intervals gives an estimate of $2.3232 Billion.   "
},
{
  "id": "Reading_Check_Sec7.1",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#Reading_Check_Sec7.1",
  "type": "Reading Question",
  "number": "7.1.1",
  "title": "Reading check, Approximating Definite Integrals as Sums.",
  "body": "Reading check, Approximating Definite Integrals as Sums   This question checks your reading comprehension of the material is section 7.1, Approximating Definite Integrals as Sums, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    We can approximate the area under a curve with a sum of rectangular areas.    One of the examples in the section looked at finding the present value of a revenue stream.    The text mentioned a memory aid that uses the Greek and Latin alphabets.    For functions in this class it does not matter is our sum uses right or left hand points to form the rectangle in a subinterval.    One of the examples in the section looked at finding the volume of a solid of revolution.    This sections gave a list of formulas of definite integrals of nice functions.    The limit of a Riemann Sum is a Definite Integral.    None of the above             "
},
{
  "id": "exercises-set-sec-7-1-2",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-2",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": " Let . Estimate the area under on the interval using 100 rectangles and a right hand rule.   The Excel commands are:   The answer is given as follows. Note that in this screen grab the center part of the sidebyside was hidden so that the image is a reasonable size. The area is approximately 133.98.   "
},
{
  "id": "exercises-set-sec-7-1-3",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-3",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": " Let . Estimate the area under on the interval using 200 rectangles and a right hand rule.  "
},
{
  "id": "exercises-set-sec-7-1-4",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-4",
  "type": "Exercise",
  "number": "7.1.3",
  "title": "",
  "body": " Let . Estimate the area on the interval under using 200 rectangles and a right hand rule.   The set-up is very similar to the one in problem 1.   The area underneath the curve is approximately 193.228 according to the Excel computation.   "
},
{
  "id": "exercises-set-sec-7-1-5",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-5",
  "type": "Exercise",
  "number": "7.1.4",
  "title": "",
  "body": " Let . Estimate the area below the curve and above the x-axis using 100 rectangles and a right hand rule.  "
},
{
  "id": "exercises-set-sec-7-1-6",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-6",
  "type": "Exercise",
  "number": "7.1.5",
  "title": "",
  "body": " Let . Estimate the area under on the interval using 50 rectangles and a right hand rule.   A set-up similar to the one in problems 1 and 3 gives us an approximation for the area of 42.69.   "
},
{
  "id": "exercises-set-sec-7-1-7",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-7",
  "type": "Exercise",
  "number": "7.1.6",
  "title": "",
  "body": " Let . Estimate the area on the interval under using 100 rectangles and a right hand rule.  "
},
{
  "id": "exercises-set-sec-7-1-8",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-8",
  "type": "Exercise",
  "number": "7.1.7",
  "title": "",
  "body": " Let . Estimate the area under on the interval using 100 rectangles and a right hand rule.   The area underneath the curve is approximately 12.92   "
},
{
  "id": "exercises-set-sec-7-1-9",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-9",
  "type": "Exercise",
  "number": "7.1.8",
  "title": "",
  "body": " Consider the area under the line on the interval .  Using only what you know about areas of rectangles and triangles, find the exact area.  Find the approximations to the area using Riemann sums with 50, 100, and 200 intervals.  Find the error for each of the three approximations you made.  For this case, make an estimate of the error in terms of the number of intervals used.    "
},
{
  "id": "exercises-set-sec-7-1-10",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-10",
  "type": "Exercise",
  "number": "7.1.9",
  "title": "",
  "body": " Consider the area under the line on the interval . In later sections we will show that the exact area is 9.  Find the approximations to the area using Riemann sums with 1, 10, 100, and 1000 intervals.  Find the error for each of the four approximations you made.  For this case, make an estimate of the error in terms of the number of intervals used.  How many intervals would we need for an error of less that ?          N  Riemann Sum  Error    1  27  18    10  10.395  1.395    100  9.135  0.135    1000  9.0135  0.0135     The errors are included in the sidebyside above. Subtract 9 from the approximation found in Excel. Note that there is a bit of a pattern.  The larger values of N seem to have an error of about   If error . Then . Then , and hence .     "
},
{
  "id": "exercises-set-sec-7-1-11",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-11",
  "type": "Exercise",
  "number": "7.1.10",
  "title": "",
  "body": " You have a natural gas well. You have been told that as gas is extracted and the pressure in the well lessens, the rate of extraction also decreases. The weekly production is cubic feet per week.    Estimate the production in the first year.  Estimate the production in the third year.    "
},
{
  "id": "exercises-set-sec-7-1-12",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-12",
  "type": "Exercise",
  "number": "7.1.11",
  "title": "",
  "body": " Sales of your new gadget are estimated at units per month.  Estimate the total sales in the first year.  Estimate the total sales in the fourth year.  Estimate the total sales over the first 5 years.        Estimate the total sales in the first year.  The total sales would be the sum of the sales each month. This is the same as a right hand sum of the function on the interval with 12 subdivisions. The Excel commands are as follows (quick fill down to complete the Excel table):   Results:   So the total sales is $8,762.22    Estimate the total sales in the fourth year.  We need to adjust the computation so that the sales added correspond to the sales of the fourth year only. This would be from month 36 to 48. We can just adjust the values in the Excel table above!   So the total sales in the fourth year are $64,503.12    Estimate the total sales over the first 5 years.  This will be a much larger range. We will add the sales for the first 5 years. In other words: the first 60 months. Note that this means we want to change to 60 (we want to do the computation for each month). The rows from 13 to 65 have been hidden from views to create a smaller size image for this solution manual:   The total sales for the first 5 years is $248,947.41     "
},
{
  "id": "exercises-set-sec-7-1-13",
  "level": "2",
  "url": "sec-7-1-RiemannSums.html#exercises-set-sec-7-1-13",
  "type": "Exercise",
  "number": "7.1.12",
  "title": "",
  "body": " You run a low cost, high volume widget manufacturing plant. For reports, you write your reports in terms of millions of units. When measured in units of one million widgets and one million dollars, the marginal profit function is .    Find the profit from making 12 million widgets.  What quantities have 0 marginal profit?  What is the maximum profit to be made manufacturing widgets?    "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus",
  "level": "1",
  "url": "sec-7-2-FundamentalTheoremCalculus.html",
  "type": "Section",
  "number": "7.2",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus  Link to worksheets used in this section  In the last section we defined the definite integral, , the signed area under the curve from to , as the limit of the area found by approximating the region with thinner and thinner rectangles. We also saw that we can easily find a reasonable approximation to the area using Excel by finding such a sum with a fairly large number of rectangles.  In the trivial case where we have a constant function , we can find the area of the area with a simple formula, . If we define an area function, , as the area under the curve from to , then the area function in this case is . We would like to be able to evaluate more integrals with a process like this, where we have a simple area function.  Note on variables used  We shifted the independent variable from for the function to for the function because we have two independent variables in our discussion and we want to keep them separate to avoid confusion. We will consider as a function of , and want to find the area under the graph of . We will consider as a function of , and understand it as the area under the curve from some starting point to .   We start by exploring cases where we can justify an area function without using calculus. We will then look at some cases where we can experimentally verify the area function with Excel. Finally we will give the general rule for the area function, the Fundamental Theorem of Calculus, and will give some justification.  Area function for constant by geometry   Let . For a constant function, , the area under the curve will be the area of a rectangle of height and width . The obvious area function is . Then .  It is worth noting that this formula gives signed area. If or is negative, the area is negative.     Area function for linear function by geometry   Let . For a linear function, , the area under the curve from 0 to will be the area of a triangle of height and width .   The obvious area function is . If is also nonzero, the area is the difference of the areas of two triangles. .    A note on versions of Riemann sum used  As we consider finding area with Excel and Riemann sums, rather than use a right-hand rule for the rectangles, we are going to use a midpoint rule where we find the area of rectangles evaluated at the middle of each interval.   The right-hand rule uses an easier formula, so we used it first. For the th rectangle we evaluate at . For the midpoint formula, we evaluate at the midpoint of the interval, at . As the picture suggests, the midpoint formula gives a better approximation. The right-hand rule always overestimates an increasing function. The midpoint rule is exact for linear functions where the midpoint is the average value.   In both of the examples we have examined the area function has the original function as its derivative. We would like to use Excel to test a few more cases. In the worksheets we set up in the last section, SumArea is the area function we are looking for. We will plot the area function and use a best-fit curve to find the equation of the area function.  Best fitting area function for a linear function    Trendline to area function Video    Repeat the last example, finding the area under , with Excel.    With a linear function we have use the following to produce an area function.      Column C has our list of values in the center of each interval. Column D has the value of evaluated at those points. The area of the rectangle is the height times the width, Interval width . SumArea is our running area function. When we plot the area function, we have something that seems to be quadratic with leading coefficient and very small linear and constant coefficients. In fact, the linear and constant coefficients are zero up to a rounding factor for numbers of the size we are using.     This matches the result we had solving the problem with geometry. However, we can repeat the process with Excel and use functions of higher order.   Best fitting area function for a quadratic function    Video presentation of this example    Find the area function when .    For this problem we essentially repeat the work of the previous example with a quadratic function for .   When we plot the area function we get a very good fit with a cubic function. Once again, allowing for the way best-fit curves may return small random values for coefficients that should be zero, we see that if , then the related area function is .      Best fitting area function for a cubic function    Video presentation of this example    Find the area when .    Once again, we can use Excel to produce an area function. The area function seems to be .     In all the examples above, we note that the area function, , has , the curve we are finding the area under, as its derivative. Thus, in these cases, the area is an anti-derivative of . This observation generalizes to the Fundamental Theorem of Calculus, which has two versions:   Fundamental Theorem of Calculus (first version)   Let be a continuous function on the interval . On that interval define an area function by . Then .     Fundamental Theorem of Calculus (second version)   Let be a continuous function on the interval . Suppose is any continuous, differentiable function with . Then .    In practice, we use the second version of the fundamental theorem to evaluate definite integrals. Starting with a definite integral , we find a function whose derivative is , the integrand or function we are integrating, and then evaluate at the endpoints.  It is easier to prove or justify the first version of the fundamental theorem. The basic argument notes that is , then formally .   But if is small, is approximately the area of a rectangle of height and width , so then . We then note that any two anti-derivatives of a function differ by a constant.   Redoing an old area problem by the FTC   In in the previous section, we used Riemann sums with 100 and 1000 intervals to approximate the area under with between 0 and 4. Find the area using the fundamental theorem of calculus.    We rewrite the curve as and note that one anti-derivative of is . Then .    To get the same answer to 4 decimal places, we needed to use 1000 intervals with Riemann sums. Clearly, it is easier to solve this problem with the fundamental theorem of calculus than to make an approximation with that many intervals.   Verifying an antiderivative to find area   Let . We are told is an anti-derivative of . Verify the anti-derivative and find the area under the curve with between 0 and 2.    Using the product rule, .  The area is .    We also want to revisit our first three examples in light of the fundamental theorem if calculus. In all of those examples, we used Excel to find a best fitting curve for an area function. We can now check our work by taking the derivative, adjusting parameters as needed, to find an anti-derivative. For constant and linear functions we have already done the adjusting because we could find the area function from geometry.   Using the FTC to guess and check area under a quadratic   Find the area function when .    We have already used Excel to find a best fitting curve.   We are thus suspicious that the anti-derivative should be a cubic polynomial. We need .  Setting coefficients equal for each power, we see and . Thus our area function has the form . Since is the area of a region between and , we conclude and our area function is .     Verifying the best fitting function for area under a cubic function   Find the area when .    Using Excel we guessed the area function . We can now verify that the derivative of is , so we have found an anti-derivative.    It is worth noting that using the fundamental theorem to evaluate integrals requires us to be able to find an anti-derivative of a function. Finding an anti-derivative may be quite hard or even an impossible task. The method we have just used is often referred to as the guess and check method of finding anti-derivatives. We will look at methods of finding anti-derivatives in the next several sections.   Reading Check  Reading check, The Fundamental Theorem of Calculus   This question checks your reading comprehension of the material is section 7.2, The Fundamental Theorem of Calculus, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Let be a continuous function on the interval . Suppose is any continuous, differentiable function with . Then    Let be a continuous function on the interval . On that interval, define an area function by . Then .    The two versions of the fundamental theorem of calculus are interchangeable.    The fundamental theorem of calculus says we can use antiderivatives to find the area under a curve.    The fundamental theorem can be used to evaluate the area under any function,    We can use guess and check to verify antiderivatives.    None of the above                Exercises: The Fundamental Theorem of Calculus Problems   Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate , using Riemann sums and 100 intervals.          The midpoint sum gives us an approximation of 68.        Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate , using Riemann sums and 100 intervals.      Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate , using Riemann sums and 200 intervals.         or .     The midpoint sum with N = 200 gives an approximation of 14.978        Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate using Riemann sums and 100 intervals.      Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate , using Riemann sums and 100 intervals.         .     The midpoint sum with N = 100 gives an approximation of 38.06        Explain why, if is an anti-derivative of , then is also an anti-derivative of .    Using an area function from Riemann sums and best fitting curves we have guessed that a quadratic function will have a cubic anti-derivative.  Find an anti-derivative of    Use the fundamental theorem of calculus to evaluate             The anti-derivative should be a cubic, so something of the form , and the derivative should be .  We can guess and check : and sure enough, the derivative is .  If you are not comfortable with that method note that , so , , and .  Hence , , and .  There are no conditions on , so that coefficient can be anything. We picked 0 to keep things simple. But then .    Use the fundamental theorem of calculus to evaluate     .          Using an area function from Riemann sums and best fitting curves we have guessed that a cubic function will have a fourth degree anti-derivative.  Find an anti-derivative of .  Use the fundamental theorem of calculus to evaluate .      I am interested in finding an anti-derivative for .   Using Excel and 100 subintervals of , compute an approximate area function for . Find a best fitting curve that fits the data well. (It may help to use a secondary axis for the area data.)    Based on your best fitting curve, use guess and check to find the anti-derivative.         A quick computation gives the total area:   The area under the curve is approx. 26.8.  The area under the curve looks like an exponential curve.  A curve fitting using the Trendline gives us that .  Note that this is not a very good approximation. The curve does not follow the data very well on the right hand side of the graph.    Based on the curve we would say that the anti-derivative should be an exponential function. The derivative of is , so it seems reasonable to start with the anti-derivative being .  Then the derivative has to be . .  Hence A=0.5 and we may choose B to be any constant we want. Then .  That shows us where the problem is in our estimate. Excel’s best fitting routine does not allow for constants in exponential functions. Since , and , we need to add .5 to the area to get a good best fit curve. Then the best fit line works.        I am interested in finding an anti-derivative for .  Using Excel and 100 subintervals of , compute an approximate area function for . Find a best fitting curve that fits the data well. (It may help to use a secondary axis for the area data.)  Based on your best fitting curve, use guess and check to find the anti-derivative.      I am interested in finding an anti-derivative for .   Using Excel and 100 subintervals of , compute an approximate area function for . Find a best fitting curve that fits the data well. (It may help to use a secondary axis for the area data.)    Based on your best fitting curve, use guess and check to find the anti-derivative.          The cumulative function looks like a logarithmic function.  The Trendline approximation gives the equation .  We can make the fit better when we realize that we are evaluating at the midpoint of each interval but taking the are to the end of the interval. We want to look at an adjusted x at the right side of each interval.    .    We would say that the anti-derivative is .  And we have seen before that .       "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-5",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-5",
  "type": "Remark",
  "number": "7.2.1",
  "title": "Note on variables used.",
  "body": "Note on variables used  We shifted the independent variable from for the function to for the function because we have two independent variables in our discussion and we want to keep them separate to avoid confusion. We will consider as a function of , and want to find the area under the graph of . We will consider as a function of , and understand it as the area under the curve from some starting point to .  "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-7",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-7",
  "type": "Example",
  "number": "7.2.2",
  "title": "Area function for constant by geometry.",
  "body": "Area function for constant by geometry   Let . For a constant function, , the area under the curve will be the area of a rectangle of height and width . The obvious area function is . Then .  It is worth noting that this formula gives signed area. If or is negative, the area is negative.    "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-8",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-8",
  "type": "Example",
  "number": "7.2.3",
  "title": "Area function for linear function by geometry.",
  "body": "Area function for linear function by geometry   Let . For a linear function, , the area under the curve from 0 to will be the area of a triangle of height and width .   The obvious area function is . If is also nonzero, the area is the difference of the areas of two triangles. .   "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-9",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-9",
  "type": "Remark",
  "number": "7.2.4",
  "title": "A note on versions of Riemann sum used.",
  "body": "A note on versions of Riemann sum used  As we consider finding area with Excel and Riemann sums, rather than use a right-hand rule for the rectangles, we are going to use a midpoint rule where we find the area of rectangles evaluated at the middle of each interval.   The right-hand rule uses an easier formula, so we used it first. For the th rectangle we evaluate at . For the midpoint formula, we evaluate at the midpoint of the interval, at . As the picture suggests, the midpoint formula gives a better approximation. The right-hand rule always overestimates an increasing function. The midpoint rule is exact for linear functions where the midpoint is the average value.  "
},
{
  "id": "FitMidpointRuleExample",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#FitMidpointRuleExample",
  "type": "Example",
  "number": "7.2.5",
  "title": "Best fitting area function for a linear function.",
  "body": "Best fitting area function for a linear function    Trendline to area function Video    Repeat the last example, finding the area under , with Excel.    With a linear function we have use the following to produce an area function.      Column C has our list of values in the center of each interval. Column D has the value of evaluated at those points. The area of the rectangle is the height times the width, Interval width . SumArea is our running area function. When we plot the area function, we have something that seems to be quadratic with leading coefficient and very small linear and constant coefficients. In fact, the linear and constant coefficients are zero up to a rounding factor for numbers of the size we are using.    "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-13",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-13",
  "type": "Example",
  "number": "7.2.8",
  "title": "Best fitting area function for a quadratic function.",
  "body": " Best fitting area function for a quadratic function    Video presentation of this example    Find the area function when .    For this problem we essentially repeat the work of the previous example with a quadratic function for .   When we plot the area function we get a very good fit with a cubic function. Once again, allowing for the way best-fit curves may return small random values for coefficients that should be zero, we see that if , then the related area function is .    "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-14",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-14",
  "type": "Example",
  "number": "7.2.10",
  "title": "Best fitting area function for a cubic function.",
  "body": " Best fitting area function for a cubic function    Video presentation of this example    Find the area when .    Once again, we can use Excel to produce an area function. The area function seems to be .    "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-16",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-16",
  "type": "Theorem",
  "number": "7.2.12",
  "title": "Fundamental Theorem of Calculus (first version).",
  "body": " Fundamental Theorem of Calculus (first version)   Let be a continuous function on the interval . On that interval define an area function by . Then .   "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-17",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-17",
  "type": "Theorem",
  "number": "7.2.13",
  "title": "Fundamental Theorem of Calculus (second version).",
  "body": " Fundamental Theorem of Calculus (second version)   Let be a continuous function on the interval . Suppose is any continuous, differentiable function with . Then .   "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-22",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-22",
  "type": "Example",
  "number": "7.2.14",
  "title": "Redoing an old area problem by the  FTC.",
  "body": " Redoing an old area problem by the FTC   In in the previous section, we used Riemann sums with 100 and 1000 intervals to approximate the area under with between 0 and 4. Find the area using the fundamental theorem of calculus.    We rewrite the curve as and note that one anti-derivative of is . Then .   "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-24",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-24",
  "type": "Example",
  "number": "7.2.15",
  "title": "Verifying an antiderivative to find area.",
  "body": " Verifying an antiderivative to find area   Let . We are told is an anti-derivative of . Verify the anti-derivative and find the area under the curve with between 0 and 2.    Using the product rule, .  The area is .   "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-26",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-26",
  "type": "Example",
  "number": "7.2.16",
  "title": "Using the FTC to guess and check area under a quadratic.",
  "body": " Using the FTC to guess and check area under a quadratic   Find the area function when .    We have already used Excel to find a best fitting curve.   We are thus suspicious that the anti-derivative should be a cubic polynomial. We need .  Setting coefficients equal for each power, we see and . Thus our area function has the form . Since is the area of a region between and , we conclude and our area function is .   "
},
{
  "id": "sec-7-2-FundamentalTheoremCalculus-27",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#sec-7-2-FundamentalTheoremCalculus-27",
  "type": "Example",
  "number": "7.2.17",
  "title": "Verifying the best fitting function for area under a cubic function.",
  "body": " Verifying the best fitting function for area under a cubic function   Find the area when .    Using Excel we guessed the area function . We can now verify that the derivative of is , so we have found an anti-derivative.   "
},
{
  "id": "Reading_Check_Sec7.2",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#Reading_Check_Sec7.2",
  "type": "Reading Question",
  "number": "7.2.1",
  "title": "Reading check, The Fundamental Theorem of Calculus.",
  "body": "Reading check, The Fundamental Theorem of Calculus   This question checks your reading comprehension of the material is section 7.2, The Fundamental Theorem of Calculus, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    Let be a continuous function on the interval . Suppose is any continuous, differentiable function with . Then    Let be a continuous function on the interval . On that interval, define an area function by . Then .    The two versions of the fundamental theorem of calculus are interchangeable.    The fundamental theorem of calculus says we can use antiderivatives to find the area under a curve.    The fundamental theorem can be used to evaluate the area under any function,    We can use guess and check to verify antiderivatives.    None of the above             "
},
{
  "id": "exercises-set-sec-7-2-2",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-2",
  "type": "Exercise",
  "number": "7.2.1",
  "title": "",
  "body": " Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate , using Riemann sums and 100 intervals.          The midpoint sum gives us an approximation of 68.      "
},
{
  "id": "exercises-set-sec-7-2-3",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-3",
  "type": "Exercise",
  "number": "7.2.2",
  "title": "",
  "body": " Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate , using Riemann sums and 100 intervals.    "
},
{
  "id": "exercises-set-sec-7-2-4",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-4",
  "type": "Exercise",
  "number": "7.2.3",
  "title": "",
  "body": " Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate , using Riemann sums and 200 intervals.         or .     The midpoint sum with N = 200 gives an approximation of 14.978      "
},
{
  "id": "exercises-set-sec-7-2-5",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-5",
  "type": "Exercise",
  "number": "7.2.4",
  "title": "",
  "body": " Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate using Riemann sums and 100 intervals.    "
},
{
  "id": "exercises-set-sec-7-2-6",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-6",
  "type": "Exercise",
  "number": "7.2.5",
  "title": "",
  "body": " Let . We are told that is an anti-derivative.  Verify that is a derivative of .  Use the fundamental theorem of calculus to evaluate .  Approximate , using Riemann sums and 100 intervals.         .     The midpoint sum with N = 100 gives an approximation of 38.06      "
},
{
  "id": "exercises-set-sec-7-2-7",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-7",
  "type": "Exercise",
  "number": "7.2.6",
  "title": "",
  "body": " Explain why, if is an anti-derivative of , then is also an anti-derivative of .  "
},
{
  "id": "exercises-set-sec-7-2-8",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-8",
  "type": "Exercise",
  "number": "7.2.7",
  "title": "",
  "body": " Using an area function from Riemann sums and best fitting curves we have guessed that a quadratic function will have a cubic anti-derivative.  Find an anti-derivative of    Use the fundamental theorem of calculus to evaluate             The anti-derivative should be a cubic, so something of the form , and the derivative should be .  We can guess and check : and sure enough, the derivative is .  If you are not comfortable with that method note that , so , , and .  Hence , , and .  There are no conditions on , so that coefficient can be anything. We picked 0 to keep things simple. But then .    Use the fundamental theorem of calculus to evaluate     .        "
},
{
  "id": "exercises-set-sec-7-2-9",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-9",
  "type": "Exercise",
  "number": "7.2.8",
  "title": "",
  "body": " Using an area function from Riemann sums and best fitting curves we have guessed that a cubic function will have a fourth degree anti-derivative.  Find an anti-derivative of .  Use the fundamental theorem of calculus to evaluate .    "
},
{
  "id": "exercises-set-sec-7-2-10",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-10",
  "type": "Exercise",
  "number": "7.2.9",
  "title": "",
  "body": " I am interested in finding an anti-derivative for .   Using Excel and 100 subintervals of , compute an approximate area function for . Find a best fitting curve that fits the data well. (It may help to use a secondary axis for the area data.)    Based on your best fitting curve, use guess and check to find the anti-derivative.         A quick computation gives the total area:   The area under the curve is approx. 26.8.  The area under the curve looks like an exponential curve.  A curve fitting using the Trendline gives us that .  Note that this is not a very good approximation. The curve does not follow the data very well on the right hand side of the graph.    Based on the curve we would say that the anti-derivative should be an exponential function. The derivative of is , so it seems reasonable to start with the anti-derivative being .  Then the derivative has to be . .  Hence A=0.5 and we may choose B to be any constant we want. Then .  That shows us where the problem is in our estimate. Excel’s best fitting routine does not allow for constants in exponential functions. Since , and , we need to add .5 to the area to get a good best fit curve. Then the best fit line works.      "
},
{
  "id": "exercises-set-sec-7-2-11",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-11",
  "type": "Exercise",
  "number": "7.2.10",
  "title": "",
  "body": " I am interested in finding an anti-derivative for .  Using Excel and 100 subintervals of , compute an approximate area function for . Find a best fitting curve that fits the data well. (It may help to use a secondary axis for the area data.)  Based on your best fitting curve, use guess and check to find the anti-derivative.    "
},
{
  "id": "exercises-set-sec-7-2-12",
  "level": "2",
  "url": "sec-7-2-FundamentalTheoremCalculus.html#exercises-set-sec-7-2-12",
  "type": "Exercise",
  "number": "7.2.11",
  "title": "",
  "body": " I am interested in finding an anti-derivative for .   Using Excel and 100 subintervals of , compute an approximate area function for . Find a best fitting curve that fits the data well. (It may help to use a secondary axis for the area data.)    Based on your best fitting curve, use guess and check to find the anti-derivative.          The cumulative function looks like a logarithmic function.  The Trendline approximation gives the equation .  We can make the fit better when we realize that we are evaluating at the midpoint of each interval but taking the are to the end of the interval. We want to look at an adjusted x at the right side of each interval.    .    We would say that the anti-derivative is .  And we have seen before that .     "
},
{
  "id": "sec-7-3-BasicAntidifferentiation",
  "level": "1",
  "url": "sec-7-3-BasicAntidifferentiation.html",
  "type": "Section",
  "number": "7.3",
  "title": "Basic Antidifferentiation",
  "body": " Basic Antidifferentiation  In the last section we looked at the fundamental theorem of calculus and saw that it could be used to find definite integrals. We saw:   Fundamental Theorem of Calculus (second version)  Let be a continuous function on the interval . Suppose is any continuous, differentiable function with . Then .   We thus find it very useful to be able to systematically find an anti-derivative of a function. The standard notation is to use an integral sign without the limits of integration to denote the general anti-derivative. Thus, is referred to as the definite integral of from to , and it is a number. In contrast, is the indefinite integral of , and it is a function. We use indefinite integrals or anti-derivatives to evaluate definite integrals or areas.  We find anti-derivatives by starting with the differentiation formulas of basic functions and manipulating them so the derivative is a nice function.   Elementary Anti-derivative 1  Find a formula for .  We start with the closest differentiation formula , and manipulate it so is on the right hand side. We first replace with to get . We then divide both sides by to obtain . Finally, we note that adding a constant does not change the derivative, so . Since we have divided by , we need to insist that . Using the notation of indefinite integrals we obtain our power rule formula:  .  Note that this matches the pattern we found in the last section.   Elementary Anti-derivative 2  Find a formula for .  We start with the closest differentiation formula . In this case, we need to note that natural logarithms are only defined positive numbers and we would like a formula that is true for positive and negative numbers. We can do this with an appropriate use of absolute value bars. Thus, , and we have our second formula:  .   Elementary Anti-derivative 3  Find a formula for .  Once again, we start with the closest differentiation formula . In this case we don't have to do any manipulation, and we have our formula:  .   Elementary Anti-derivative 4  Find a formula for for a positive number .  This formula requires a bit more work. We start with the formula . Dividing both sides by the constant gives . Thus our integral is:  .   Sum, Difference, and Constant Multiple rules  The rules we had for taking derivatives of sums, differences, and constant multiples of functions translate into similar rules for integrals.  The derivatives of a sum rule, , becomes the   Integral of a Sum Rule    The derivatives of a difference rule, , becomes the   Integral of a Difference Rule     Integral of a Constant Multiple Rule    We can use these rules to find the indefinite integrals on a lot of functions. They cover all polynomials.   Antiderivative of integral powers   Find the integral .     .  One might argue that the last line should have been since each indefinite integral gets a constant C. However all of the constants used here are arbitrary constants and they can be collapsed together into a single constant .    We can also use these rules to find indefinite integrals for roots.   Antiderivative of fractional powers   Find the integral .     .    We can also find anti-derivatives of exponential and power functions.   Antiderivative of power and exponential functions   Find the integral .     .    As we mentioned earlier in the section, the normal reason for wanting to find indefinite integrals is to be able to use them with the fundamental theorem of calculus to find definite integrals.   Area under a polynomial function   Evaluate the definite integral .    We first evaluate the indefinite integral to find an anti-derivative. .  Since we can use any anti-derivative, we simplify by setting and choosing the anti-derivative . . If we choose a different value for , it cancels out when we subract the values at the endpoints.,     Area under   Evaluate the definite integral .    We first evaluate the indefinite integral to find an antiderivative. .  Since we can use any antiderivative, we simplify by setting and choosing that anti-derivative . .     Using the FTC when the function is fit from data   From experience, I know that the output of an oil well follows a model of exponential decay. I have the following data for the production, in barrels, for the first 5 months.    Month  Jan  Feb  Mar  Apr  May    Production  1000  971  925  887  859    Find the production over the first 5 years.    The total production for 5 years will be the definite integral of the production function for the first 60 months. We first use Excel to find a best fitting exponential function.   The production function ( ) in terms of the number of months ( ) is given by .  We would like to take an anti-derivative, but we don’t have a formula for this anti-derivative yet. However, we note and we know that . We can now use our exponential rule, and .  Since we can use any anti-derivative, we simplify by setting . We can do this without creating any problems because we are using the equation where two values of the anti-derivative will be subtracted from one another, and hence the values would cancel anyways. We now evaluate our integral. .  Thus over 5 years the well will produce 23,962 barrels.    Another application for anti-derivatives is solving an initial value problem. In that case we want to a particular anti-derivative that has a particular value for a specified . In this situation we may not set to zero. In fact, part of the problem will be to find the appropriate value of .   Finding a value of to match initial conditions   The marginal cost (MC) of producing a certain quantity ( ) of widgets is given by .  The cost of producing 1000 widgets is $6,000. Assume that the derivative of the cost function is approximated closely enough by the marginal cost to be used interchangeably. Find a cost function for producing widgets.    Since Cost is an anti-derivative of the Marginal Cost we have . We also know . Plugging that in gives .  Solving for gives . Thus our cost function is .     Building a profit function form data   Experience tells me that the marginal profit of producing gadgets is a linear function. My start-up costs are $2 million. I have the following data with my units being thousands of dollars per millions of units.    Production 0 1 2  3 4    Marginal Profit $3,3967 $3,603  $3,236 $2,795  $2,384    Produce a profit function, find the number of units that maximizes profit, and find the maximum profit.    I start by finding a best fitting line to the data.   Excel tells me the marginal profit function is . We have maximum profit when the marginal profit is zero. Using Goal Seek, the Marginal Profit is zero with a production of 10.0448 millions of units. The anti-derivative of this function is .  Plugging in the initial costs into the production model, recalling that our function is written in thousands of dollars per millions of widgets, gives . So our profit function is .  We saw that , when . The maximum profit is the computed by evaluating at . A quick computation shows that the maximum profit is $18,049 thousands of dollars, or a bit more than $18 million.     It is worthwhile summarizing our list of integration formulas.                                    A word of warning The anti-differentiation formulas we have produced only work for the functions given, allowing for changes in variables. At this point the only way we have for finding is expand the integrand getting before applying our rules. In general, the process of finding anti-derivatives symbolically is an art form that we only begin to work with in this course.   Reading Check  Reading check, Basic Antidifferentiation   This question checks your reading comprehension of the material is section 7.3, Basic Antidifferentiation, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    .    , assuming .    .    , assuming .    , assuming .    .    , assuming .    .    .    .    None of the above                Exercises: Basic Antidifferentiation Problems    Find antiderivatives for the given functions.     .    .     .     .    .     .     .    .     .      Evaluate the definite integrals by first finding an antiderivative.     .   The anti-derivative is: (with these definite integrals we may choose the constant to be 0.)   .     .     .   The anti-derivative is: .   .     .     .   The anti-derivative is: .   .     .      Solve the Initial value problem.    Let . The function is an antiderivative, and .   The anti-derivative is: .  implies that , so  Then .    Let . The function is an antiderivative, and .    Let . The function is an antiderivative, and .   The anti-derivative is: .   implies that . Then .    Let . The function is an antiderivative, and .     An investment provides an income stream of dollars per year. How much is received in the first 10 years?    .    A firm has a marginal profit function of in thousands of dollars per thousands of units. How much is profit increased if production is shifted from 10 to 15 thousand units?    After the first year, the rate of sales of a fad product are with time in years. How many units are sold from the end of the first year to the end of the tenth year?    .    A software company allows your company to expand the number of licenses your company owns by charging a marginal rate of . How much does it cost to increase your license from 1000 to 2000 licenses?    The production function for a given oil well is with time measured in years and production measured in millions of barrels of oil.  How much oil is produced in the first year?  How much oil is produced in the tenth year?  If I need to produce 75 thousand barrels of oil per year for the well to be financially viable, what is the life of the well?  How much oil will the well produce before being shut down?         .     .     .    Use Goal seek: .       The expected value received from a particular revenue stream should be an exponential function. I have the following data for income received over the past 5-year period.    Year 1 2  3 4 5    Income $1,030 $1,078  $1,110 $1,169  $1,225    How much do I expect to receive over the next 10 years?    From experience, I expect the marginal revenue for my firm to be a quadratic function. I have the following data on revenue at a variety of levels, with production in thousands of units and marginal profit in millions of dollars.    Production $4.90 $7.04  9.00 11.03 14.00    MProfit 7.40 9.12  9.90 9.89  8.40    What is the expected change in revenue as I increase production from 15 to 20 thousand units?   Using trend line, my function for is . Integrating from 15 to 20, . The profit is approximately $160.133 million.    "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-6",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elementary Anti-derivative 1 "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-10",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elementary Anti-derivative 2 "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-13",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elementary Anti-derivative 3 "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-16",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elementary Anti-derivative 4 "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-19",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sum, Difference, and Constant Multiple rules "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-26",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-26",
  "type": "Example",
  "number": "7.3.1",
  "title": "Antiderivative of integral powers.",
  "body": " Antiderivative of integral powers   Find the integral .     .  One might argue that the last line should have been since each indefinite integral gets a constant C. However all of the constants used here are arbitrary constants and they can be collapsed together into a single constant .   "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-28",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-28",
  "type": "Example",
  "number": "7.3.2",
  "title": "Antiderivative of fractional powers.",
  "body": " Antiderivative of fractional powers   Find the integral .     .   "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-30",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-30",
  "type": "Example",
  "number": "7.3.3",
  "title": "Antiderivative of power and exponential functions.",
  "body": " Antiderivative of power and exponential functions   Find the integral .     .   "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-32",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-32",
  "type": "Example",
  "number": "7.3.4",
  "title": "Area under a polynomial function.",
  "body": " Area under a polynomial function   Evaluate the definite integral .    We first evaluate the indefinite integral to find an anti-derivative. .  Since we can use any anti-derivative, we simplify by setting and choosing the anti-derivative . . If we choose a different value for , it cancels out when we subract the values at the endpoints.,   "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-33",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-33",
  "type": "Example",
  "number": "7.3.5",
  "title": "Area under <span class=\"process-math\">\\(\\frac{1}{x}\\)<\/span>.",
  "body": " Area under   Evaluate the definite integral .    We first evaluate the indefinite integral to find an antiderivative. .  Since we can use any antiderivative, we simplify by setting and choosing that anti-derivative . .   "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-34",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-34",
  "type": "Example",
  "number": "7.3.6",
  "title": "Using the FTC when the function is fit from data.",
  "body": " Using the FTC when the function is fit from data   From experience, I know that the output of an oil well follows a model of exponential decay. I have the following data for the production, in barrels, for the first 5 months.    Month  Jan  Feb  Mar  Apr  May    Production  1000  971  925  887  859    Find the production over the first 5 years.    The total production for 5 years will be the definite integral of the production function for the first 60 months. We first use Excel to find a best fitting exponential function.   The production function ( ) in terms of the number of months ( ) is given by .  We would like to take an anti-derivative, but we don’t have a formula for this anti-derivative yet. However, we note and we know that . We can now use our exponential rule, and .  Since we can use any anti-derivative, we simplify by setting . We can do this without creating any problems because we are using the equation where two values of the anti-derivative will be subtracted from one another, and hence the values would cancel anyways. We now evaluate our integral. .  Thus over 5 years the well will produce 23,962 barrels.   "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-36",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-36",
  "type": "Example",
  "number": "7.3.7",
  "title": "Finding a value of <span class=\"process-math\">\\(C\\)<\/span> to match initial conditions.",
  "body": " Finding a value of to match initial conditions   The marginal cost (MC) of producing a certain quantity ( ) of widgets is given by .  The cost of producing 1000 widgets is $6,000. Assume that the derivative of the cost function is approximated closely enough by the marginal cost to be used interchangeably. Find a cost function for producing widgets.    Since Cost is an anti-derivative of the Marginal Cost we have . We also know . Plugging that in gives .  Solving for gives . Thus our cost function is .   "
},
{
  "id": "sec-7-3-BasicAntidifferentiation-37",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#sec-7-3-BasicAntidifferentiation-37",
  "type": "Example",
  "number": "7.3.8",
  "title": "Building a profit function form data.",
  "body": " Building a profit function form data   Experience tells me that the marginal profit of producing gadgets is a linear function. My start-up costs are $2 million. I have the following data with my units being thousands of dollars per millions of units.    Production 0 1 2  3 4    Marginal Profit $3,3967 $3,603  $3,236 $2,795  $2,384    Produce a profit function, find the number of units that maximizes profit, and find the maximum profit.    I start by finding a best fitting line to the data.   Excel tells me the marginal profit function is . We have maximum profit when the marginal profit is zero. Using Goal Seek, the Marginal Profit is zero with a production of 10.0448 millions of units. The anti-derivative of this function is .  Plugging in the initial costs into the production model, recalling that our function is written in thousands of dollars per millions of widgets, gives . So our profit function is .  We saw that , when . The maximum profit is the computed by evaluating at . A quick computation shows that the maximum profit is $18,049 thousands of dollars, or a bit more than $18 million.   "
},
{
  "id": "Reading_Check_Sec7.3",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#Reading_Check_Sec7.3",
  "type": "Reading Question",
  "number": "7.3.1",
  "title": "Reading check, Basic Antidifferentiation.",
  "body": "Reading check, Basic Antidifferentiation   This question checks your reading comprehension of the material is section 7.3, Basic Antidifferentiation, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    .    , assuming .    .    , assuming .    , assuming .    .    , assuming .    .    .    .    None of the above             "
},
{
  "id": "exercises-set-sec-7-3-2-2",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-2-2",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-3-2-3",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-2-3",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-3-2-4",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-2-4",
  "type": "Exercise",
  "number": "7.3.3",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-3-2-5",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-2-5",
  "type": "Exercise",
  "number": "7.3.4",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-3-2-6",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-2-6",
  "type": "Exercise",
  "number": "7.3.5",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-3-2-7",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-2-7",
  "type": "Exercise",
  "number": "7.3.6",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-3-3-2",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-3-2",
  "type": "Exercise",
  "number": "7.3.7",
  "title": "",
  "body": "  .   The anti-derivative is: (with these definite integrals we may choose the constant to be 0.)   .  "
},
{
  "id": "exercises-set-sec-7-3-3-3",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-3-3",
  "type": "Exercise",
  "number": "7.3.8",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-3-3-4",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-3-4",
  "type": "Exercise",
  "number": "7.3.9",
  "title": "",
  "body": "  .   The anti-derivative is: .   .  "
},
{
  "id": "exercises-set-sec-7-3-3-5",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-3-5",
  "type": "Exercise",
  "number": "7.3.10",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-3-3-6",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-3-6",
  "type": "Exercise",
  "number": "7.3.11",
  "title": "",
  "body": "  .   The anti-derivative is: .   .  "
},
{
  "id": "exercises-set-sec-7-3-3-7",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-3-7",
  "type": "Exercise",
  "number": "7.3.12",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-3-4-2",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-4-2",
  "type": "Exercise",
  "number": "7.3.13",
  "title": "",
  "body": " Let . The function is an antiderivative, and .   The anti-derivative is: .  implies that , so  Then .  "
},
{
  "id": "exercises-set-sec-7-3-4-3",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-4-3",
  "type": "Exercise",
  "number": "7.3.14",
  "title": "",
  "body": " Let . The function is an antiderivative, and .  "
},
{
  "id": "exercises-set-sec-7-3-4-4",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-4-4",
  "type": "Exercise",
  "number": "7.3.15",
  "title": "",
  "body": " Let . The function is an antiderivative, and .   The anti-derivative is: .   implies that . Then .  "
},
{
  "id": "exercises-set-sec-7-3-4-5",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-4-5",
  "type": "Exercise",
  "number": "7.3.16",
  "title": "",
  "body": " Let . The function is an antiderivative, and .  "
},
{
  "id": "exercises-set-sec-7-3-5",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-5",
  "type": "Exercise",
  "number": "7.3.17",
  "title": "",
  "body": " An investment provides an income stream of dollars per year. How much is received in the first 10 years?    .  "
},
{
  "id": "exercises-set-sec-7-3-6",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-6",
  "type": "Exercise",
  "number": "7.3.18",
  "title": "",
  "body": " A firm has a marginal profit function of in thousands of dollars per thousands of units. How much is profit increased if production is shifted from 10 to 15 thousand units?  "
},
{
  "id": "exercises-set-sec-7-3-7",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-7",
  "type": "Exercise",
  "number": "7.3.19",
  "title": "",
  "body": " After the first year, the rate of sales of a fad product are with time in years. How many units are sold from the end of the first year to the end of the tenth year?    .  "
},
{
  "id": "exercises-set-sec-7-3-8",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-8",
  "type": "Exercise",
  "number": "7.3.20",
  "title": "",
  "body": " A software company allows your company to expand the number of licenses your company owns by charging a marginal rate of . How much does it cost to increase your license from 1000 to 2000 licenses?  "
},
{
  "id": "exercises-set-sec-7-3-9",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-9",
  "type": "Exercise",
  "number": "7.3.21",
  "title": "",
  "body": " The production function for a given oil well is with time measured in years and production measured in millions of barrels of oil.  How much oil is produced in the first year?  How much oil is produced in the tenth year?  If I need to produce 75 thousand barrels of oil per year for the well to be financially viable, what is the life of the well?  How much oil will the well produce before being shut down?         .     .     .    Use Goal seek: .     "
},
{
  "id": "exercises-set-sec-7-3-10",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-10",
  "type": "Exercise",
  "number": "7.3.22",
  "title": "",
  "body": " The expected value received from a particular revenue stream should be an exponential function. I have the following data for income received over the past 5-year period.    Year 1 2  3 4 5    Income $1,030 $1,078  $1,110 $1,169  $1,225    How much do I expect to receive over the next 10 years?  "
},
{
  "id": "exercises-set-sec-7-3-11",
  "level": "2",
  "url": "sec-7-3-BasicAntidifferentiation.html#exercises-set-sec-7-3-11",
  "type": "Exercise",
  "number": "7.3.23",
  "title": "",
  "body": " From experience, I expect the marginal revenue for my firm to be a quadratic function. I have the following data on revenue at a variety of levels, with production in thousands of units and marginal profit in millions of dollars.    Production $4.90 $7.04  9.00 11.03 14.00    MProfit 7.40 9.12  9.90 9.89  8.40    What is the expected change in revenue as I increase production from 15 to 20 thousand units?   Using trend line, my function for is . Integrating from 15 to 20, . The profit is approximately $160.133 million.  "
},
{
  "id": "sec-7-4-ChangeVariables",
  "level": "1",
  "url": "sec-7-4-ChangeVariables.html",
  "type": "Section",
  "number": "7.4",
  "title": "Integration by Change of Variables or Substitution",
  "body": " Integration by Change of Variables or Substitution   At the end of the last section, we warned that the symbolic integration techniques we have developed only work for problems that exactly fit our formulas. When we tried integrating an exponential function where the exponent was a constant times , we had to change the base to get a function with only in the exponent. We want to develop one more technique of integration, called change of variables or substitution, to handle integrals that are pretty close to our stated rules. This technique is often called -substitution and is related to the chain rule for differentiation.    Change of variables for indefinite integrals  We start by exploring some examples where we can get the desired result by the guess and check technique.   Power of a linear by guess and check   Find .    We could do this problem by rewriting the integrand as an explicit seventh degree polynomial and then using the power and sum rules, but that is too much work. Instead, I will notice the integrand looks almost like a power, and thus guess an answer of . I then check by differentiating. Using the chain rule, .  Thus our guess was off by a factor of 3 and the correct antiderivative is .    We can easily use the same trick to produce a rule for powers of a linear polynomial.   Power of a generic linear by guess and check   Find .    As we did in the previous example, we first guess the antiderivative to be . We then take the derivative of that expression and obtain . This misses our integrand by a factor of . We adjust by that factor and find the antiderivative is .    We can use the same trick to produce a rule for functions that are the exponential of a linear function.   Antidifferentiation of an exponential function by guess and check   Find .    As we did in the last example, our first guess uses the basic rule without worrying about the linear term, so we guess . We then take the derivative of that expression and obtain . This misses our integrand by a factor of . We adjust by that factor and find the antiderivative is .    We run into a problem if we try to extend this method with quadratic terms. If we start with and guess an antiderivative of , when we differentiate we get and are off by a factor of . However, when we divide by that factor to get as a proposed antiderivative, and then differentiate again, we get , which is not what we want. The key is to start by recalling the chain rule: .  We want to use the same rule with a different notation, using implicit differentiation and a new variable : . By the fundamental theorem of calculus, we can convert this to an integration formula: .  We will generally simplify to , so our substitution rule is .  Let us rework some earlier examples with this method and then illustrate the method with a more difficult problem.   Power of linear example redone with change of variables   Find .    The obvious candidate for is . Then . Thus .    This is easy to generalize for a power of a linear term.   Power of generic linear example redone with change of variables   Find .    The obvious candidate for is . Then . Hence .    To use this method with replacing something more complicated than a linear term, we need to have available, with the possible addition of multiplying by a scalar constant.   Power of cubic function with change of variables   Find .    The obvious candidate for is , since it is an expression taken to a large power. Then . Thus .    By convention, is often used the new variable used with this change of variables technique, so the technique is often called -substitution.    Change of variables for definite integrals  In the definite integral, we understand that and are the -values of the ends of the integral. We could be more explicit and write and . The last step in solving a definite integral is to substitute the endpoints back into the antiderivative we have found. We can either change the variables for the endpoints as well, or we can convert the antiderivative back to the original variables before substituting. Consider the following example.   A definite integral with change of variables   Evaluate .    Solution 1: Convert everything to . The obvious candidate for is . Then . For the lower endpoint, becomes . For the upper endpoint becomes . Substituting, .    Solution 2: Keeping, but labeling, the endpoints. We have the same and , but do not convert the endpoints. To reduce confusion we make sure to label the variable when we are using both and . Thus, .    It should be noted that when we change variables we may find ourselves looking at an integral from to where the . We do not change the order of the endpoints.   A second definite integral with change of variables   Evaluate    (Convert everything to .) The obvious candidate for is . Then . For the lower endpoint, becomes . For the upper endpoint becomes . Substituting, .      Reading Check  Reading check, Integration by Change of Variable or Substitution   This question checks your reading comprehension of the material is section 7.4, Integration by Change of Variable or Substitution, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    For the method of substitution, we want to make both and explicit.    Substitution for integration is related to the chain rule for integration.    We can pick any expression for when doing substitution.    We can also do change of variables with definite integrals.    One of the methods in this section is called Guess and Check.    None of the above                Exercises: Integration by Change of Variables or Substitution Problems    Evaluate the following integrals. In each case identify the term that will be treated as .     .   Let . Then . .     .     .   Let . Then . .     .     .   Let . Then . .     .     .   Let . Then . .     .     .   Let . Then . .     .     .   Let . Then . .     .     .   Let . Then . .     .     .   Let . Then . .     .     .   Let . Then . .     .     Find an antiderivative for such that .   Let . Then . .    Find an antiderivative for such that .    An investment stream pays out at a rate of $10,000 per year. In computing present value, I assume an investment return rate of 5% compounded continuously. What is the present value of the first 10 years of the payout?    .    My gas well is returning a payout of $10,000. The well output is expected to decay exponentially with half as much output in 7 years. How much do I make over the next 10 years?    The sales rate on a book is , with time in years.  What are the total sales over 10 years?  When does the sales rate drop to 10?  What is the maximum sales rate?        Let . Then . .     .   At , sales are approximately 857.4      The marginal profit on an item is , measured in thousands of dollars per thousands of units.  How much should I produce to maximize profits?  What is my profit function if my start up cost is $60,000?  What is the maximum profit?      "
},
{
  "id": "power-of-linear",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#power-of-linear",
  "type": "Example",
  "number": "7.4.1",
  "title": "Power of a linear by guess and check.",
  "body": " Power of a linear by guess and check   Find .    We could do this problem by rewriting the integrand as an explicit seventh degree polynomial and then using the power and sum rules, but that is too much work. Instead, I will notice the integrand looks almost like a power, and thus guess an answer of . I then check by differentiating. Using the chain rule, .  Thus our guess was off by a factor of 3 and the correct antiderivative is .   "
},
{
  "id": "sec-7-4-ChangeVariables-3-5",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#sec-7-4-ChangeVariables-3-5",
  "type": "Example",
  "number": "7.4.2",
  "title": "Power of a generic linear by guess and check.",
  "body": " Power of a generic linear by guess and check   Find .    As we did in the previous example, we first guess the antiderivative to be . We then take the derivative of that expression and obtain . This misses our integrand by a factor of . We adjust by that factor and find the antiderivative is .   "
},
{
  "id": "sec-7-4-ChangeVariables-3-7",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#sec-7-4-ChangeVariables-3-7",
  "type": "Example",
  "number": "7.4.3",
  "title": "Antidifferentiation of an exponential function by guess and check.",
  "body": " Antidifferentiation of an exponential function by guess and check   Find .    As we did in the last example, our first guess uses the basic rule without worrying about the linear term, so we guess . We then take the derivative of that expression and obtain . This misses our integrand by a factor of . We adjust by that factor and find the antiderivative is .   "
},
{
  "id": "sec-7-4-ChangeVariables-3-12",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#sec-7-4-ChangeVariables-3-12",
  "type": "Example",
  "number": "7.4.4",
  "title": "Power of linear example redone with change of variables.",
  "body": " Power of linear example redone with change of variables   Find .    The obvious candidate for is . Then . Thus .   "
},
{
  "id": "sec-7-4-ChangeVariables-3-14",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#sec-7-4-ChangeVariables-3-14",
  "type": "Example",
  "number": "7.4.5",
  "title": "Power of generic linear example redone with change of variables.",
  "body": " Power of generic linear example redone with change of variables   Find .    The obvious candidate for is . Then . Hence .   "
},
{
  "id": "sec-7-4-ChangeVariables-3-16",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#sec-7-4-ChangeVariables-3-16",
  "type": "Example",
  "number": "7.4.6",
  "title": "Power of cubic function with change of variables.",
  "body": " Power of cubic function with change of variables   Find .    The obvious candidate for is , since it is an expression taken to a large power. Then . Thus .   "
},
{
  "id": "sec-7-4-ChangeVariables-4-3",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#sec-7-4-ChangeVariables-4-3",
  "type": "Example",
  "number": "7.4.7",
  "title": "A definite integral with change of variables.",
  "body": " A definite integral with change of variables   Evaluate .    Solution 1: Convert everything to . The obvious candidate for is . Then . For the lower endpoint, becomes . For the upper endpoint becomes . Substituting, .    Solution 2: Keeping, but labeling, the endpoints. We have the same and , but do not convert the endpoints. To reduce confusion we make sure to label the variable when we are using both and . Thus, .   "
},
{
  "id": "sec-7-4-ChangeVariables-4-5",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#sec-7-4-ChangeVariables-4-5",
  "type": "Example",
  "number": "7.4.8",
  "title": "A second definite integral with change of variables.",
  "body": " A second definite integral with change of variables   Evaluate    (Convert everything to .) The obvious candidate for is . Then . For the lower endpoint, becomes . For the upper endpoint becomes . Substituting, .   "
},
{
  "id": "Reading_Check_Sec7.4",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#Reading_Check_Sec7.4",
  "type": "Reading Question",
  "number": "7.4.3.1",
  "title": "Reading check, Integration by Change of Variable or Substitution.",
  "body": "Reading check, Integration by Change of Variable or Substitution   This question checks your reading comprehension of the material is section 7.4, Integration by Change of Variable or Substitution, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    For the method of substitution, we want to make both and explicit.    Substitution for integration is related to the chain rule for integration.    We can pick any expression for when doing substitution.    We can also do change of variables with definite integrals.    One of the methods in this section is called Guess and Check.    None of the above             "
},
{
  "id": "exercises-set-sec-7-4-2-2",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-2",
  "type": "Exercise",
  "number": "7.4.4.1",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-3",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-3",
  "type": "Exercise",
  "number": "7.4.4.2",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-2-4",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-4",
  "type": "Exercise",
  "number": "7.4.4.3",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-5",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-5",
  "type": "Exercise",
  "number": "7.4.4.4",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-2-6",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-6",
  "type": "Exercise",
  "number": "7.4.4.5",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-7",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-7",
  "type": "Exercise",
  "number": "7.4.4.6",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-2-8",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-8",
  "type": "Exercise",
  "number": "7.4.4.7",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-9",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-9",
  "type": "Exercise",
  "number": "7.4.4.8",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-2-10",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-10",
  "type": "Exercise",
  "number": "7.4.4.9",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-11",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-11",
  "type": "Exercise",
  "number": "7.4.4.10",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-2-12",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-12",
  "type": "Exercise",
  "number": "7.4.4.11",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-13",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-13",
  "type": "Exercise",
  "number": "7.4.4.12",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-2-14",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-14",
  "type": "Exercise",
  "number": "7.4.4.13",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-15",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-15",
  "type": "Exercise",
  "number": "7.4.4.14",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-2-16",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-16",
  "type": "Exercise",
  "number": "7.4.4.15",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-17",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-17",
  "type": "Exercise",
  "number": "7.4.4.16",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-2-18",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-18",
  "type": "Exercise",
  "number": "7.4.4.17",
  "title": "",
  "body": "  .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-2-19",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-2-19",
  "type": "Exercise",
  "number": "7.4.4.18",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-4-3",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-3",
  "type": "Exercise",
  "number": "7.4.4.19",
  "title": "",
  "body": " Find an antiderivative for such that .   Let . Then . .  "
},
{
  "id": "exercises-set-sec-7-4-4",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-4",
  "type": "Exercise",
  "number": "7.4.4.20",
  "title": "",
  "body": " Find an antiderivative for such that .  "
},
{
  "id": "exercises-set-sec-7-4-5",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-5",
  "type": "Exercise",
  "number": "7.4.4.21",
  "title": "",
  "body": " An investment stream pays out at a rate of $10,000 per year. In computing present value, I assume an investment return rate of 5% compounded continuously. What is the present value of the first 10 years of the payout?    .  "
},
{
  "id": "exercises-set-sec-7-4-6",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-6",
  "type": "Exercise",
  "number": "7.4.4.22",
  "title": "",
  "body": " My gas well is returning a payout of $10,000. The well output is expected to decay exponentially with half as much output in 7 years. How much do I make over the next 10 years?  "
},
{
  "id": "exercises-set-sec-7-4-7",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-7",
  "type": "Exercise",
  "number": "7.4.4.23",
  "title": "",
  "body": " The sales rate on a book is , with time in years.  What are the total sales over 10 years?  When does the sales rate drop to 10?  What is the maximum sales rate?        Let . Then . .     .   At , sales are approximately 857.4    "
},
{
  "id": "exercises-set-sec-7-4-8",
  "level": "2",
  "url": "sec-7-4-ChangeVariables.html#exercises-set-sec-7-4-8",
  "type": "Exercise",
  "number": "7.4.4.24",
  "title": "",
  "body": " The marginal profit on an item is , measured in thousands of dollars per thousands of units.  How much should I produce to maximize profits?  What is my profit function if my start up cost is $60,000?  What is the maximum profit?    "
},
{
  "id": "sec-7-5-IntroductionComputerAlgebra",
  "level": "1",
  "url": "sec-7-5-IntroductionComputerAlgebra.html",
  "type": "Section",
  "number": "7.5",
  "title": "Integration using Computer Algebra",
  "body": " Integration using Computer Algebra   Recall that the fundamental theorem of calculus states that if is a function with its derivative equal to on the region , then . We say is the definite integral of from to . If is a derivative of , then is an anti-derivative of , and any anti-derivative of has the form , for some constant . We use the symbol , without limits of integration, for the indefinite integral.  In we looked at approximating definite integrals with a Riemann sum that added up the area of a bunch of rectangles. In we saw that the fundamental theorem of calculus lets us use an antiderivative or indefinite integral to evaluate a definite integral. In we saw how to compute indefinite integrals by hand for a limited number of functions. In this section, we will look at how to use computer software at a web site to find antiderivatives.  We start with Wolfram|Alpha, available at . We can give Wolfram|Alpha the question we want solved in plain English. In our case we would like to find the antiderivative of with respect to .   The Alpha provides an answer.   Note that the response tells us the question the Wolfram|Alpha is answering. That helps us check that we have been properly understood. We may find it useful to give a formula without the extra words.   The interface is fairly robust. It understands the convention that the variable for math problems is typically , so it will generally guess that is our variable if we don't specify the variable with respect to which we are integrating.   It is worth noting that Wolfram|Alpha is connected with Mathematica, so it will understand questions in Mathematica syntax. On the right side to the screen there is a link for related links. In particular, there will be a link for the related command in Mathematica.   Following that link gives more information on the syntax of the Mathematica command. We generally don't need to know the syntax, but it is useful if we want to use specific options.   We should note that Wolfram|Alpha will easily find antiderivatives that we would find very hard to do or beyond the scope of this class.   The output also has a link for showing steps on complicated problems.   The show steps link only works on the paid version of Alpha. However we can find other tools by searching for integral calculator. Such a search reveals Symbolab , , which we also used in .   In , we found a derivative calculator. Similarly we can find an integral calculator ( ) that will show steps. For problems of at the level of difficulty we have been doing, Wolfram|Alpha also produces plots of the integral.     Definite integrals  One of the reasons we wanted to find antiderivatives was to be able to use them to evaluate definite integrals. We can ask Wolfram|Alpha for the definite integral directly. In that case, Wolfram|Alpha will give the numeric answer and will also produce the relevant graph. (Symbolab will also do definite integrals.)   This is particularly useful when finding the antiderivative is beyond the scope of this course. Consider for example if we want to find the area under a portion of a curve that has the shape of a normal curve.   Another example when we can easily set up integrals we cannot solve by hand occurs when we are trying to find the current value of a revenue stream. A value, , that we get years in the future, has a present value of where is an investment return rate. Thus the current value of a revenue stream, , from time to time , is . However we only have a rule for finding the antiderivative when is either a constant or exponential function. With a CAS program it is straightforward to compute such integrals for a broad range of value stream functions.   If you are going to use Wolfram|Alpha in doing work, you should realize that the terms of use of the site require you to appropriately cite Wolfram|Alpha. (This is standard academic procedure.) Your citation should include that date that you got your answer from the site. The results above were obtained on Feb 29, 2012.  In business situations, we are rarely asked to simply find an integral. Instead, finding an integral is generally part of a larger problem. Thus we often use CAS for part of a problem.    Initial value problems  We often want to choose a particular antiderivative of a function. We typically do this when we have the value of the antiderivative for some value. We simply plug that value into the general antiderivative and solve for .   Finding the antiderivative, then the constant   The rate of change profit with respect to quantity is given by and the break-even point occurs when . Find the formula for profit as a function of . Find the maximum profit.    We can do this by putting together things we have already done. First we use Wolfram|Alpha to find an antiderivative.   Thus we know for some constant . We also know .  Thus, , or .  Using Excel, we now plug the function, without the , into Excel and evaluate at .   We make the negative of our answer and modify our function accordingly. We now use solver to maximize the function.   Thus the maximum profit is $145.83, and it occurs when .     The previous example in one step   The rate of change profit with respect to quantity is given by and the break-even point occurs when . Find the formula for profit as a function of . Find the maximum profit.    We can also do this with Wolfram|Alpha bysetting up the boundary value problem. We give the alpha bot the derivative we want integrated and the fixed value of the original function. (Notice that the answer does not include a , since we have computed a particular constant.)    We then ask Alpha to maximize the function.   This gives the same answer of $145.83.    This first example could easily have been done by hand. We can repeat the process with an example that could not be easily been by hand.   A more complicated initial value problem   The rate of change of profit with respect to quantity is given by and a break-even point occurs when . Find the formula for profit as a function of . Find the maximum profit.    In structure, this example is very similar to the first example. However, where in the first example, the function would have been easy to do by hand, in this case, the problem is very hard to do by hand. We use Wolfram\/Alpha to find the antiderivative.    .  We then use Excel to find , noting that if we use without the , then is the value of .   We plug in 5 and note , thus . We use solver to maximize and find the maximum profit of $1675.17 occurs at .       Riemann Sums  We can also use Alpha to do Riemann sums. We need to give a starting and ending point and the number of intervals.   Riemann sums with Wolfram|Alpha   Find the current value of a revenue stream for 10 years with an investment rate of , assuming payments are made daily.    We approximate the current value with the integral .  What we really want is the Riemann sum with one interval per day. Over 10 years we have 3652 days.    If we assume payments start at the beginning of the first day, we would use the left endpoint method.      Reading Check  Reading check, Integration Using Computer Algebra   This question checks your reading comprehension of the material is section 7.5, Integration Using Computer Algebra, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In initial value problems, we have to solve for the value of the integration constant .    The computer algebra systems used in this section cannot do Riemann sums.    The section uses Wolfram|Alpha as a computer algebra system that will do integration.    The section uses Symbolab as a computer algebra system that will do integration.    Wolfram|Alpha will also do definite integrals.    The section uses GeoGebra as a computer algebra system that will do integration.    None of the above                Exercises: Integration using Computer Algebra Problems    Find the antiderivative of the given function.     .    .     .     .    .     .     .    .     .     .    .     .     .    .     .      Evaluate the definite integral.     .    .     .     .    .     .     .    .     .      Do the initial value problem.     .    .     .     .    .     .     I have an investment that produces income at a rate of . I assume the present value of an asset decreases continuously at a rate of 2% per year for the length of time I have to wait for the asset. What is the present value of the first 7 years of return from my investment?    .    My oil well is producing revenue at a rate of . I assume the present value of an asset decreases continuously at a rate of 3% per year for the length of time I have to wait for the asset. What is the present value of the first 10 years of return from my investment?    The rate of marginal profit is and a break-even point occurs at . Find the quantity that produces the most profit and the amount of profit generated at that point.   We have maximal profit when , or when . Using WolframAlpha to solve the initial value problem we get .    Our marginal cost function is and the startup costs are $23,000. Produce a cost function.    "
},
{
  "id": "sec-7-5-IntroductionComputerAlgebra-2-19",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#sec-7-5-IntroductionComputerAlgebra-2-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Symbolab "
},
{
  "id": "sec-7-5-IntroductionComputerAlgebra-4-3",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#sec-7-5-IntroductionComputerAlgebra-4-3",
  "type": "Example",
  "number": "7.5.1",
  "title": "Finding the antiderivative, then the constant.",
  "body": " Finding the antiderivative, then the constant   The rate of change profit with respect to quantity is given by and the break-even point occurs when . Find the formula for profit as a function of . Find the maximum profit.    We can do this by putting together things we have already done. First we use Wolfram|Alpha to find an antiderivative.   Thus we know for some constant . We also know .  Thus, , or .  Using Excel, we now plug the function, without the , into Excel and evaluate at .   We make the negative of our answer and modify our function accordingly. We now use solver to maximize the function.   Thus the maximum profit is $145.83, and it occurs when .   "
},
{
  "id": "sec-7-5-IntroductionComputerAlgebra-4-4",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#sec-7-5-IntroductionComputerAlgebra-4-4",
  "type": "Example",
  "number": "7.5.2",
  "title": "The previous example in one step.",
  "body": " The previous example in one step   The rate of change profit with respect to quantity is given by and the break-even point occurs when . Find the formula for profit as a function of . Find the maximum profit.    We can also do this with Wolfram|Alpha bysetting up the boundary value problem. We give the alpha bot the derivative we want integrated and the fixed value of the original function. (Notice that the answer does not include a , since we have computed a particular constant.)    We then ask Alpha to maximize the function.   This gives the same answer of $145.83.   "
},
{
  "id": "sec-7-5-IntroductionComputerAlgebra-4-6",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#sec-7-5-IntroductionComputerAlgebra-4-6",
  "type": "Example",
  "number": "7.5.3",
  "title": "A more complicated initial value problem.",
  "body": " A more complicated initial value problem   The rate of change of profit with respect to quantity is given by and a break-even point occurs when . Find the formula for profit as a function of . Find the maximum profit.    In structure, this example is very similar to the first example. However, where in the first example, the function would have been easy to do by hand, in this case, the problem is very hard to do by hand. We use Wolfram\/Alpha to find the antiderivative.    .  We then use Excel to find , noting that if we use without the , then is the value of .   We plug in 5 and note , thus . We use solver to maximize and find the maximum profit of $1675.17 occurs at .    "
},
{
  "id": "sec-7-5-IntroductionComputerAlgebra-5-3",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#sec-7-5-IntroductionComputerAlgebra-5-3",
  "type": "Example",
  "number": "7.5.4",
  "title": "Riemann sums with Wolfram|Alpha.",
  "body": " Riemann sums with Wolfram|Alpha   Find the current value of a revenue stream for 10 years with an investment rate of , assuming payments are made daily.    We approximate the current value with the integral .  What we really want is the Riemann sum with one interval per day. Over 10 years we have 3652 days.    If we assume payments start at the beginning of the first day, we would use the left endpoint method.   "
},
{
  "id": "Reading_Check_Sec7.5",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#Reading_Check_Sec7.5",
  "type": "Reading Question",
  "number": "7.5.4.1",
  "title": "Reading check, Integration Using Computer Algebra.",
  "body": "Reading check, Integration Using Computer Algebra   This question checks your reading comprehension of the material is section 7.5, Integration Using Computer Algebra, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    In initial value problems, we have to solve for the value of the integration constant .    The computer algebra systems used in this section cannot do Riemann sums.    The section uses Wolfram|Alpha as a computer algebra system that will do integration.    The section uses Symbolab as a computer algebra system that will do integration.    Wolfram|Alpha will also do definite integrals.    The section uses GeoGebra as a computer algebra system that will do integration.    None of the above             "
},
{
  "id": "exercises-set-sec-7-5-2-2",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-2",
  "type": "Exercise",
  "number": "7.5.5.1",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-2-3",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-3",
  "type": "Exercise",
  "number": "7.5.5.2",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-2-4",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-4",
  "type": "Exercise",
  "number": "7.5.5.3",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-2-5",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-5",
  "type": "Exercise",
  "number": "7.5.5.4",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-2-6",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-6",
  "type": "Exercise",
  "number": "7.5.5.5",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-2-7",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-7",
  "type": "Exercise",
  "number": "7.5.5.6",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-2-8",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-8",
  "type": "Exercise",
  "number": "7.5.5.7",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-2-9",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-9",
  "type": "Exercise",
  "number": "7.5.5.8",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-2-10",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-10",
  "type": "Exercise",
  "number": "7.5.5.9",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-2-11",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-2-11",
  "type": "Exercise",
  "number": "7.5.5.10",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-3-2",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-3-2",
  "type": "Exercise",
  "number": "7.5.5.11",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-3-3",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-3-3",
  "type": "Exercise",
  "number": "7.5.5.12",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-3-4",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-3-4",
  "type": "Exercise",
  "number": "7.5.5.13",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-3-5",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-3-5",
  "type": "Exercise",
  "number": "7.5.5.14",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-3-6",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-3-6",
  "type": "Exercise",
  "number": "7.5.5.15",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-3-7",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-3-7",
  "type": "Exercise",
  "number": "7.5.5.16",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-4-2",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-4-2",
  "type": "Exercise",
  "number": "7.5.5.17",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-4-3",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-4-3",
  "type": "Exercise",
  "number": "7.5.5.18",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-4-4",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-4-4",
  "type": "Exercise",
  "number": "7.5.5.19",
  "title": "",
  "body": "  .    .  "
},
{
  "id": "exercises-set-sec-7-5-4-5",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-4-5",
  "type": "Exercise",
  "number": "7.5.5.20",
  "title": "",
  "body": "  .  "
},
{
  "id": "exercises-set-sec-7-5-5",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-5",
  "type": "Exercise",
  "number": "7.5.5.21",
  "title": "",
  "body": " I have an investment that produces income at a rate of . I assume the present value of an asset decreases continuously at a rate of 2% per year for the length of time I have to wait for the asset. What is the present value of the first 7 years of return from my investment?    .  "
},
{
  "id": "exercises-set-sec-7-5-6",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-6",
  "type": "Exercise",
  "number": "7.5.5.22",
  "title": "",
  "body": " My oil well is producing revenue at a rate of . I assume the present value of an asset decreases continuously at a rate of 3% per year for the length of time I have to wait for the asset. What is the present value of the first 10 years of return from my investment?  "
},
{
  "id": "exercises-set-sec-7-5-7",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-7",
  "type": "Exercise",
  "number": "7.5.5.23",
  "title": "",
  "body": " The rate of marginal profit is and a break-even point occurs at . Find the quantity that produces the most profit and the amount of profit generated at that point.   We have maximal profit when , or when . Using WolframAlpha to solve the initial value problem we get .  "
},
{
  "id": "exercises-set-sec-7-5-8",
  "level": "2",
  "url": "sec-7-5-IntroductionComputerAlgebra.html#exercises-set-sec-7-5-8",
  "type": "Exercise",
  "number": "7.5.5.24",
  "title": "",
  "body": " Our marginal cost function is and the startup costs are $23,000. Produce a cost function.  "
},
{
  "id": "sec-7-6-NormalDistribution",
  "level": "1",
  "url": "sec-7-6-NormalDistribution.html",
  "type": "Section",
  "number": "7.6",
  "title": "The Normal Distribution: An extended numeric example",
  "body": " The Normal Distribution: An extended numeric example   Link to worksheets used in this section  We want to look at an extended example where we realistically want to find a definite integral, but need to use numerical methods rather than solving for the antiderivative and using the fundamental theorem of calculus. Most students are familiar with the concept of a course that is graded on a curve. Formally, that means that there is a preset distribution of grades available in the class, with a certain percentage of the students getting an A, a certain percentage getting a B, and so forth. Most college students are also familiar with the ACT, SAT, or other standardized tests, where the score typically follow a normal or \"bell\" curve. The result we pull from more advanced mathematics is that many phenomena such as height, weight, and hat size, also follow a bell curve. In a business setting, we are often concerned whether or not a portion of a market will be big enough to support a specialty store. We also want to know how much of my production should be allocated to a range of sizes of a product. This question often boils down to finding the area under a specified portion of the normal curve.    Background from probability  We want to pull some definitions and results from the theory of probability. In particular we want a description of the function we are finding the area under and also of the related area function.    A Probability Density Function is a function that spreads the area 1 over the entire real line, with the obvious understanding that no value can have a negative probability.  In calculus terms, a Probability Density Function is a function defined for such that and .    A probability density function is also called a continuous distribution function. The probability density function that is of most interest to us is the normal distribution. The normal density function is given by where (sigma), and (mu), are respectively the standard deviation and mean of the distribution. For this course the mean is the center of the distribution and the standard deviation is a measure of how tightly packed the distribution is. If we set the mean to 0 and the standard deviation to 1 we have the standardized normal distribution, or the familiar bell curve.  Thus, when I note that the adult men in the United States have a height distribution that is normal with a mean of 70 inches and a standard deviation of 3 inches, the distribution is .   Thus finding the percentage of men less than 5 feet tall, reduces to evaluating the appropriate integral. Since finding the percentage of the population that fits in our market reduces to finding the area under a specified portion of this curve, we are also interested in the anti-derivative of the distribution.    Given a probability density function, , the related Cumulative Distribution Function , , is a function that measures how much area is over the interval .  In calculus terms, , the Cumulative Distribution Function of , is .    You will notice the techniques we have for anti-differentiation will not work with the normal distribution. In fact, the normal distribution has no closed form anti-derivative using the functions we are familiar with. Thus we need to use numeric methods.    Examples   Tall men in an area    Video presentation of this example    In the United States, the height of men follows a normal distribution with a mean of 70 inches (5' 10\") and a standard deviation of 3 inches. I want to set up a specialty shop for men who are at least 6' tall, but no more than 7' tall. In an area with 100,000 adult men, how big is my potential market?       Set up  My distribution function is . Since I have a population of 100,000 and am interested in the men who are between 72 and 84 inches tall, my potential market is .  As an alternative, I can convert the problem so it is expressed in terms of standard deviations. Then I use the standardized normal distribution and my limits of integration are .  Then my potential market is .    Using Excel and Riemann Sums  I want to set up a spreadsheet to find the area under the curve. Since I think I may do this for several problems, I want to set up the worksheet as a template that I can simply fill in. It will make my life easier if I recast the problem in terms of standard deviations. My potential market is . I am ready to set up a Riemann sum worksheet as we did in .   In cells F3 through F5 we convert the lower bound, upper bound, and del x to standard deviations. We recall that we get better accuracy by evaluating the rectangles with a midpoint. The midpoint of the nth rectangle is (n-0.5)*del x above the lower bound. As we did in previous sections, we use the offset command to bring our answer into the top region. When we look at the numbers we see that the potential market is 25,249.     Using Excel Statistics Commands  By this point in the course you should expect that if we claim a computation is important and done by business many times, that there is an Excel command to do the computation.  The function we are interested in is NORM.DIST(x, mean, standard deviation, cumulative). .  Where , mean, and standard deviation have the obvious meanings. The cumulative parameter is either true or false. If it is true we get the cumulative distribution function. If it is false we get the probability density function. If we are working with the standardized normal distribution, where the mean is 0 and the standard deviation is 1, the command is NORM.S.DIST(x, cumulative).   (If you are using older versions of Excel, the syntax of the command is a little different. Check the appropriate help page if you are using an older version of Excel.) With these commands, our spreadsheet is noticeably simpler.   When we look at the values, we get a target population of 25,249. This agrees with our estimate to 5 significant figures.     Using Wolfram alpha  Once I have reduced the problem to evaluating a definite integral, I can find a numeric solution with a CAS package like Wolfram|Alpha. becomes 100000*integrate(exp(-(x-70)^2\/(2*3^2))\/(3*sqrt(2*pi))) from 72 to 84.   We get our familiar answer of 25,249.   When we compute a target population, we sometimes want to include the tail of the distribution. We might, for example be concerned with all women who are 5 feet tall or less. This sets up an integral over an infinite interval, which we can’t do as a Riemann sum. The first workaround notes that the tails are very small. If all humans who have ever lived are normally distributed, less than 1 is more than 7 standard deviations from the mean. Taking the integral down to will practically be the same as integrating down to . The second workaround uses the symmetry of the normal distribution. .        Finding short women    Video presentation of this example    In the United States, the height of women follows a normal distribution with a mean of 64 inches (5' 4\") and a standard deviation of 2.75 inches. I want to set up a specialty shop for women who are no more than 5' tall. In an area with 500,000 adult women, how big is my potential market?       Set up  Using the reasoning as above, I want to estimate my market if it is 50% of the population plus the percentage between 0 and ( ) standard deviations below the mean.    Using Excel and Riemann Sums  One advantage of having set up the first exercise well, is the Riemann sum problem is now a matter of changing the parameters and subtracting from 0.5 before multiplying by the market size.   We notice that since we are finding the area under the standardized normal distribution from 0 to a negative number, we get a negative area. Our potential market is composed of 3,645 women.    Using Excel Statistics Commands  When using the statistics commands, the area function is zero at . Thus we simply have to evaluate NORM.S.DIST(right hand limit, cumulative) .   Once again, we get a potential market of 3,645 women.       While the normal distribution spreads a population over the real numbers, most objects come in discrete sizes. Depending on the kind of shoes, the sizes are either whole or half numbers. You can’t buy a shoe of size 8.764. The normal procedure is to divide the population at the middle between the sizes.   Women's shoes    Video presentation of this example    In the United States, the shoe sizes of women follows a normal distribution with a mean of 8 and a standard deviation of 1.5. I want to order 1000 pairs of shoes. If the shoes are only available in full sizes, how many pairs should I order of size 7?    I want the portion of the population between size 6.5 and 7.5. I fit it into my worksheet for Riemann sums.   Of the 1000 pairs of shoes, 211 should be size 7.    We have looked at three methods for finding a portion of a normally distributed population, which we describe as Excel with Riemann sums, Excel with statistics commands, and CAS. It is worthwhile to consider the advantages and disadvantages of the methods. The Riemann sums method takes the most work to set up. It is also conceptually the most straightforward and the most flexible. It is the easiest to adapt if we are doing some nonstandard distribution of a population. It also shows intermediate values if we have a less sharp question and are trying to see what is going on and are still deciding on the business question we want to ask. The Excel with statistics command approach requires us to learn special commands. It is also less work. It would probably be the favored method if we were doing a lot of these computations. It should be noted that Excel has corresponding commands for the other standard probability distributions. The CAS method does not require special commands, but it takes us out of our Excel environment. It does not let us leave a worksheet that is well documented and that can be easily modified by someone else asking similar questions.    Reading Check  Reading check, The Normal Distribution: An Extended Numeric Example   This question checks your reading comprehension of the material is section 7.6, The Normal Distribution: An Extended Numeric Example, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    One method in the sections was described as Statistical Averaging.    One method in the sections was described as Integration by parts.    The section uses Symbolab as a computer algebra system that will do integration.    One method in the sections was described as Excel with Riemann sums.    Each method described has advantages and disadvantages. .    One method in the sections was described as CAS.    One method in the sections was described as Excel with formulas.    The method of using CAS is always the best method.    The method of using Excel with Riemann sums is always the best method.    None of the above                Exercises: Normal Distribution Problems   Assume that women’s shoe sizes are normally distributed with a mean of 8 and a standard deviation of 1.5. A particular style of shoes in available in full and half sizes. I plan to make 10,000 pairs of this style.    Express, as an integral, the number of pairs I should make of size 9.  How many pairs of size 9 shoes should I make?  How do your answers change if the shoes are only to be made in full sizes?          If we only have full sizes the limits of integration go from 8.5 to 9.5. I then need 2108 pairs of size 9.       Men's shoes in Europe are made if full sizes with a different measuring system than we use in the United States. They are normally distributed with a mean of 43 and a standard deviation of 2\/3. I plan to buy 1,000 pairs of shoes for my store.    Express, as an integral, the number of pairs I should order of size 45.  Express, as an Excel command, the number of pairs I should order of size 45.  How many pairs should I order of size 44? (Give a number, not an equation.)      Assume that women’s dress sizes are normally distributed with a mean of 14 and a standard deviation of 3. For a particular style, 5000 dresses will be made, and they are available in even integer sizes. (2, 4, ).    Express, as an integral, the number of dresses I should make of size 10.  How many size 6 dresses should I make?  How many size 10 dresses should I make?              Assume that men’s suit coat sizes are normally distributed with a mean of 44 and a standard deviation of 4. For a particular style, 2000 suit coats will be made, and they are available in even integer sizes. (2, 4 ).    Express, as an integral, the number of suit coats I should make of size 44.  How many size 44 suit coats should I make?      A study of the size of male soldiers found the headband lengths were normally distributed with a mean of 22.1 inches and a standard deviation of 0.85 inches. Standard sized caps will fit headbands lengths of 20-25 inches.    Express, as an integral, the percentage of soldiers for who will fit the standard sized caps.  Cap sizes come in quarter sizes with a full size corresponding to a change in headband size of 3 inches, with a size 8 corresponding to 25 inches. Out of 1,000 soldiers, how many need a size 8 cap?             A study of the size of male soldiers found the hip breadths were normally distributed with a mean of 13.45 inches and a standard deviation of 0.64 inches. Seats on one airline measure 17 inches between the armrests. Express, as an integral, the percentage of soldiers who hips are too wide for the seats.    Assume that women’s shoe sizes are normally distributed with a mean of 8 and a standard deviation of 1.5. A particular style of shoes is available in full and half sizes. I plan to make 1,000 pairs of this style. Using the Excel statistics commands, make a chart telling me many pairs I should make of each size.   Since the shoes come in half sizes, we want the area under the normal distribution function from 0.25 before the given size to 0.25 after the given size.  The desired syntax is Population size * (NORM.DIST(Size+0.25, Mean, Standard Deviation, TRUE) - NORM.DIST(Size+0.25, Mean, Standard Deviation, TRUE) )       Assume that men’s suit coat sizes are normally distributed with a mean of 44 and a standard deviation of 4. For a particular style, 2,000 suit coats will be made, and they are available in even integer sizes. (2, 4, ). Using the Excel statistics commands, make a chart telling me many suits I should make of each size.    Assume that results on an intelligence test are normally distributed with a mean of 100 and a standard deviation of 15. Using the Excel statistics commands, make a chart distributing 1,000,000 people between intervals of size 10 (90-100, 100-110, ). What is the highest IQ score I should expect to find in my population of 1 million?   We set the ranges with a high value and a low value.  The desired syntax is Population size * (NORM.DIST(High value, Mean, Standard Deviation, TRUE) - NORM.DIST(Low value, Mean, Standard Deviation, TRUE) )     With a million people, the high IQ should be between 170 and 180.    I have been informed that the distance from the back of a chair to the front of the knee of a man sitting is normally distributed with a mean of 24 inches and a standard deviation of 1.3 inches. I want to design airline chairs to fit 99% of the male passengers with 1 inch between the knee and the back of the next chair. How much distance do I need between the front of one chair seat and the back of the next?    I have been informed that the breadth at the shoulders of an adult male is normally distributed with a mean of 17.9 inches and a standard deviation of 1 inch. The standard coach seat on a plane is 17.2 inches wide. What percentage of adult males fit in such a seat without overflow?        The techniques used in this section can easily be adapted to other distributions. For example, the mean time to failure of a brand of hard drives, measured in units of 10,000 hours, has been found to follow a Weibull distribution with shape variable 3 and scale variable 5. The probability density function of failure is .     Our warranty is for 10,000 hours of use. (This is approximately 1 year.) What percentage of drives get replaced under warrantee?    We offer an extended warrantee that replaces the hard drive if it fails in under 30,000 hours of use. What percentage of users who buy the extended warranty will have their hard drive fail in the period of time between the expiration of the original warrantee and the end of the extended warranty?    Some credit cards double the manufacturer’s warranty. What percentage of the people who use this plan will have their hard drive replaced by the credit card company?    What percentage of customers see their hard drives last for 100,000 hours of use?        Project  Pick a product and find evidence on the kind of function that describes its failure rate. Based on that data, determine how long we expect it to take until 10% , 50% , and 90% of the products fail.    "
},
{
  "id": "sec-7-6-NormalDistribution-3-3",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#sec-7-6-NormalDistribution-3-3",
  "type": "Definition",
  "number": "7.6.1",
  "title": "",
  "body": "  A Probability Density Function is a function that spreads the area 1 over the entire real line, with the obvious understanding that no value can have a negative probability.  In calculus terms, a Probability Density Function is a function defined for such that and .   "
},
{
  "id": "sec-7-6-NormalDistribution-3-8",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#sec-7-6-NormalDistribution-3-8",
  "type": "Definition",
  "number": "7.6.2",
  "title": "",
  "body": "  Given a probability density function, , the related Cumulative Distribution Function , , is a function that measures how much area is over the interval .  In calculus terms, , the Cumulative Distribution Function of , is .   "
},
{
  "id": "sec-7-6-NormalDistribution-4-2",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#sec-7-6-NormalDistribution-4-2",
  "type": "Example",
  "number": "7.6.3",
  "title": "Tall men in an area.",
  "body": " Tall men in an area    Video presentation of this example    In the United States, the height of men follows a normal distribution with a mean of 70 inches (5' 10\") and a standard deviation of 3 inches. I want to set up a specialty shop for men who are at least 6' tall, but no more than 7' tall. In an area with 100,000 adult men, how big is my potential market?       Set up  My distribution function is . Since I have a population of 100,000 and am interested in the men who are between 72 and 84 inches tall, my potential market is .  As an alternative, I can convert the problem so it is expressed in terms of standard deviations. Then I use the standardized normal distribution and my limits of integration are .  Then my potential market is .    Using Excel and Riemann Sums  I want to set up a spreadsheet to find the area under the curve. Since I think I may do this for several problems, I want to set up the worksheet as a template that I can simply fill in. It will make my life easier if I recast the problem in terms of standard deviations. My potential market is . I am ready to set up a Riemann sum worksheet as we did in .   In cells F3 through F5 we convert the lower bound, upper bound, and del x to standard deviations. We recall that we get better accuracy by evaluating the rectangles with a midpoint. The midpoint of the nth rectangle is (n-0.5)*del x above the lower bound. As we did in previous sections, we use the offset command to bring our answer into the top region. When we look at the numbers we see that the potential market is 25,249.     Using Excel Statistics Commands  By this point in the course you should expect that if we claim a computation is important and done by business many times, that there is an Excel command to do the computation.  The function we are interested in is NORM.DIST(x, mean, standard deviation, cumulative). .  Where , mean, and standard deviation have the obvious meanings. The cumulative parameter is either true or false. If it is true we get the cumulative distribution function. If it is false we get the probability density function. If we are working with the standardized normal distribution, where the mean is 0 and the standard deviation is 1, the command is NORM.S.DIST(x, cumulative).   (If you are using older versions of Excel, the syntax of the command is a little different. Check the appropriate help page if you are using an older version of Excel.) With these commands, our spreadsheet is noticeably simpler.   When we look at the values, we get a target population of 25,249. This agrees with our estimate to 5 significant figures.     Using Wolfram alpha  Once I have reduced the problem to evaluating a definite integral, I can find a numeric solution with a CAS package like Wolfram|Alpha. becomes 100000*integrate(exp(-(x-70)^2\/(2*3^2))\/(3*sqrt(2*pi))) from 72 to 84.   We get our familiar answer of 25,249.   When we compute a target population, we sometimes want to include the tail of the distribution. We might, for example be concerned with all women who are 5 feet tall or less. This sets up an integral over an infinite interval, which we can’t do as a Riemann sum. The first workaround notes that the tails are very small. If all humans who have ever lived are normally distributed, less than 1 is more than 7 standard deviations from the mean. Taking the integral down to will practically be the same as integrating down to . The second workaround uses the symmetry of the normal distribution. .      "
},
{
  "id": "sec-7-6-NormalDistribution-4-3",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#sec-7-6-NormalDistribution-4-3",
  "type": "Example",
  "number": "7.6.5",
  "title": "Finding short women.",
  "body": " Finding short women    Video presentation of this example    In the United States, the height of women follows a normal distribution with a mean of 64 inches (5' 4\") and a standard deviation of 2.75 inches. I want to set up a specialty shop for women who are no more than 5' tall. In an area with 500,000 adult women, how big is my potential market?       Set up  Using the reasoning as above, I want to estimate my market if it is 50% of the population plus the percentage between 0 and ( ) standard deviations below the mean.    Using Excel and Riemann Sums  One advantage of having set up the first exercise well, is the Riemann sum problem is now a matter of changing the parameters and subtracting from 0.5 before multiplying by the market size.   We notice that since we are finding the area under the standardized normal distribution from 0 to a negative number, we get a negative area. Our potential market is composed of 3,645 women.    Using Excel Statistics Commands  When using the statistics commands, the area function is zero at . Thus we simply have to evaluate NORM.S.DIST(right hand limit, cumulative) .   Once again, we get a potential market of 3,645 women.      "
},
{
  "id": "sec-7-6-NormalDistribution-4-5",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#sec-7-6-NormalDistribution-4-5",
  "type": "Example",
  "number": "7.6.7",
  "title": "Women’s shoes.",
  "body": " Women's shoes    Video presentation of this example    In the United States, the shoe sizes of women follows a normal distribution with a mean of 8 and a standard deviation of 1.5. I want to order 1000 pairs of shoes. If the shoes are only available in full sizes, how many pairs should I order of size 7?    I want the portion of the population between size 6.5 and 7.5. I fit it into my worksheet for Riemann sums.   Of the 1000 pairs of shoes, 211 should be size 7.   "
},
{
  "id": "Reading_Check_Sec7.6",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#Reading_Check_Sec7.6",
  "type": "Reading Question",
  "number": "7.6.3.1",
  "title": "Reading check, The Normal Distribution: An Extended Numeric Example.",
  "body": "Reading check, The Normal Distribution: An Extended Numeric Example   This question checks your reading comprehension of the material is section 7.6, The Normal Distribution: An Extended Numeric Example, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    One method in the sections was described as Statistical Averaging.    One method in the sections was described as Integration by parts.    The section uses Symbolab as a computer algebra system that will do integration.    One method in the sections was described as Excel with Riemann sums.    Each method described has advantages and disadvantages. .    One method in the sections was described as CAS.    One method in the sections was described as Excel with formulas.    The method of using CAS is always the best method.    The method of using Excel with Riemann sums is always the best method.    None of the above             "
},
{
  "id": "exercises-set-sec-7-6-2",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-2",
  "type": "Exercise",
  "number": "7.6.4.1",
  "title": "",
  "body": " Assume that women’s shoe sizes are normally distributed with a mean of 8 and a standard deviation of 1.5. A particular style of shoes in available in full and half sizes. I plan to make 10,000 pairs of this style.    Express, as an integral, the number of pairs I should make of size 9.  How many pairs of size 9 shoes should I make?  How do your answers change if the shoes are only to be made in full sizes?          If we only have full sizes the limits of integration go from 8.5 to 9.5. I then need 2108 pairs of size 9.     "
},
{
  "id": "exercises-set-sec-7-6-3",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-3",
  "type": "Exercise",
  "number": "7.6.4.2",
  "title": "",
  "body": " Men's shoes in Europe are made if full sizes with a different measuring system than we use in the United States. They are normally distributed with a mean of 43 and a standard deviation of 2\/3. I plan to buy 1,000 pairs of shoes for my store.    Express, as an integral, the number of pairs I should order of size 45.  Express, as an Excel command, the number of pairs I should order of size 45.  How many pairs should I order of size 44? (Give a number, not an equation.)    "
},
{
  "id": "exercises-set-sec-7-6-4",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-4",
  "type": "Exercise",
  "number": "7.6.4.3",
  "title": "",
  "body": " Assume that women’s dress sizes are normally distributed with a mean of 14 and a standard deviation of 3. For a particular style, 5000 dresses will be made, and they are available in even integer sizes. (2, 4, ).    Express, as an integral, the number of dresses I should make of size 10.  How many size 6 dresses should I make?  How many size 10 dresses should I make?            "
},
{
  "id": "exercises-set-sec-7-6-5",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-5",
  "type": "Exercise",
  "number": "7.6.4.4",
  "title": "",
  "body": " Assume that men’s suit coat sizes are normally distributed with a mean of 44 and a standard deviation of 4. For a particular style, 2000 suit coats will be made, and they are available in even integer sizes. (2, 4 ).    Express, as an integral, the number of suit coats I should make of size 44.  How many size 44 suit coats should I make?    "
},
{
  "id": "exercises-set-sec-7-6-6",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-6",
  "type": "Exercise",
  "number": "7.6.4.5",
  "title": "",
  "body": " A study of the size of male soldiers found the headband lengths were normally distributed with a mean of 22.1 inches and a standard deviation of 0.85 inches. Standard sized caps will fit headbands lengths of 20-25 inches.    Express, as an integral, the percentage of soldiers for who will fit the standard sized caps.  Cap sizes come in quarter sizes with a full size corresponding to a change in headband size of 3 inches, with a size 8 corresponding to 25 inches. Out of 1,000 soldiers, how many need a size 8 cap?           "
},
{
  "id": "exercises-set-sec-7-6-7",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-7",
  "type": "Exercise",
  "number": "7.6.4.6",
  "title": "",
  "body": " A study of the size of male soldiers found the hip breadths were normally distributed with a mean of 13.45 inches and a standard deviation of 0.64 inches. Seats on one airline measure 17 inches between the armrests. Express, as an integral, the percentage of soldiers who hips are too wide for the seats.  "
},
{
  "id": "exercises-set-sec-7-6-8",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-8",
  "type": "Exercise",
  "number": "7.6.4.7",
  "title": "",
  "body": " Assume that women’s shoe sizes are normally distributed with a mean of 8 and a standard deviation of 1.5. A particular style of shoes is available in full and half sizes. I plan to make 1,000 pairs of this style. Using the Excel statistics commands, make a chart telling me many pairs I should make of each size.   Since the shoes come in half sizes, we want the area under the normal distribution function from 0.25 before the given size to 0.25 after the given size.  The desired syntax is Population size * (NORM.DIST(Size+0.25, Mean, Standard Deviation, TRUE) - NORM.DIST(Size+0.25, Mean, Standard Deviation, TRUE) )     "
},
{
  "id": "exercises-set-sec-7-6-9",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-9",
  "type": "Exercise",
  "number": "7.6.4.8",
  "title": "",
  "body": " Assume that men’s suit coat sizes are normally distributed with a mean of 44 and a standard deviation of 4. For a particular style, 2,000 suit coats will be made, and they are available in even integer sizes. (2, 4, ). Using the Excel statistics commands, make a chart telling me many suits I should make of each size.  "
},
{
  "id": "exercises-set-sec-7-6-10",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-10",
  "type": "Exercise",
  "number": "7.6.4.9",
  "title": "",
  "body": " Assume that results on an intelligence test are normally distributed with a mean of 100 and a standard deviation of 15. Using the Excel statistics commands, make a chart distributing 1,000,000 people between intervals of size 10 (90-100, 100-110, ). What is the highest IQ score I should expect to find in my population of 1 million?   We set the ranges with a high value and a low value.  The desired syntax is Population size * (NORM.DIST(High value, Mean, Standard Deviation, TRUE) - NORM.DIST(Low value, Mean, Standard Deviation, TRUE) )     With a million people, the high IQ should be between 170 and 180.  "
},
{
  "id": "exercises-set-sec-7-6-11",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-11",
  "type": "Exercise",
  "number": "7.6.4.10",
  "title": "",
  "body": " I have been informed that the distance from the back of a chair to the front of the knee of a man sitting is normally distributed with a mean of 24 inches and a standard deviation of 1.3 inches. I want to design airline chairs to fit 99% of the male passengers with 1 inch between the knee and the back of the next chair. How much distance do I need between the front of one chair seat and the back of the next?  "
},
{
  "id": "exercises-set-sec-7-6-12",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-12",
  "type": "Exercise",
  "number": "7.6.4.11",
  "title": "",
  "body": " I have been informed that the breadth at the shoulders of an adult male is normally distributed with a mean of 17.9 inches and a standard deviation of 1 inch. The standard coach seat on a plane is 17.2 inches wide. What percentage of adult males fit in such a seat without overflow?      "
},
{
  "id": "exercises-set-sec-7-6-13",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-13",
  "type": "Exercise",
  "number": "7.6.4.12",
  "title": "",
  "body": " The techniques used in this section can easily be adapted to other distributions. For example, the mean time to failure of a brand of hard drives, measured in units of 10,000 hours, has been found to follow a Weibull distribution with shape variable 3 and scale variable 5. The probability density function of failure is .     Our warranty is for 10,000 hours of use. (This is approximately 1 year.) What percentage of drives get replaced under warrantee?    We offer an extended warrantee that replaces the hard drive if it fails in under 30,000 hours of use. What percentage of users who buy the extended warranty will have their hard drive fail in the period of time between the expiration of the original warrantee and the end of the extended warranty?    Some credit cards double the manufacturer’s warranty. What percentage of the people who use this plan will have their hard drive replaced by the credit card company?    What percentage of customers see their hard drives last for 100,000 hours of use?     "
},
{
  "id": "exercises-set-sec-7-6-14",
  "level": "2",
  "url": "sec-7-6-NormalDistribution.html#exercises-set-sec-7-6-14",
  "type": "Exercise",
  "number": "7.6.4.13",
  "title": "",
  "body": "  Project  Pick a product and find evidence on the kind of function that describes its failure rate. Based on that data, determine how long we expect it to take until 10% , 50% , and 90% of the products fail.  "
},
{
  "id": "sec-7-7-InvestmentDepreciation",
  "level": "1",
  "url": "sec-7-7-InvestmentDepreciation.html",
  "type": "Section",
  "number": "7.7",
  "title": "Applications of the integral: Investment and depreciation",
  "body": " Applications of the integral: Investment and depreciation   Link to worksheets used in this section  Having looked at several ways to evaluate definite integrals, we return to practical problems that we can solve be evaluating an integral. We will break our applications in this section into two groups. Problems in the first group reduce to accumulation over time, and are analogous to finding the area under a curve, or finding a definite integral. Problems in the second group ask you to find a specific anti-derivative of a function. They are called boundary value problems.    Basic Accumulation  The most straightforward problem for integration is one where I have a function for some value, like an income stream, or materials produced, or a cost, and I am interested if calculating how much accumulates in a specified interval. We work through a series of examples where the accumulation function gets progressively more complicated.   Accumulating a constant function over time   Mary runs a small shop that is temporarily disconnected from the power network. A generator that provides power uses 2 gallons of fuel per hour. How much fuel does she need to keep the shop running from 8 in the morning until 6 in the afternoon.    We started with a problem that is easy to do without calculus to give us confidence in our method. We solve it with algebra first. Mary wants to run the generator for 10 hours and it consumes 2 gallons of fuel per hour. She needs (10 hours)(2 gallons\/hour) = 20 gallons of fuel.  To set the problem up for calculus, we use a 24-hour clock to put time on a number line. We are accumulating from to . We need . gallons of fuel.      Accumulating marginal cost    .  Find the increase in cost as production goes from 50,000 to 80,000.    Since the change in cost looks like a Riemann sum with 30,000 intervals, we will approximate the change in cost with the integral of the marginal cost. With this function we can easily find an antiderivative and evaluate. The change in cost is .  The change in cost of production is $3,450,000.      Oil production   An oil well in Texas initially produces oil at a rate of 2 million barrels of oil per year. The production rate will typically fall 15% per year. How much oil is produced over a 5-year period?    We want to integrate our production rate of as goes from 0 to 5. We can use our antidifferentiation formulas for this problem. .  Over 5 years, the well will produce 6.846 million barrels of oil.      Discounted revenue stream   Your company is interested in acquiring a revenue stream that is currently producing are a rate of thousand dollars per year, where t is measured in years. To obtain current value, you are discounting at a rate of 6% per year compounded continuously. What is the current value of the first 10 years of income from the stream?    To find the total income we would want to integrate as goes from 0 to 10. To find the current value we must discount the income based in when we receive it. Thus we want to integrate as goes from 0 to 10. We set up the integral . Since we do not know how to find the anti-derivative for this function, we find the area either with Excel and Riemann sums, or with Wolfram Alpha.   With either method, we find that the present value of the revenue stream to be $545,298.       Boundary value problems  The accumulation problems asked you to find the area under a curve between two specific points. For those problems, we are not interested in a formulation of a general area function. A second set of applications starts with a derivative and is interested in finding the particular anti-derivative that meets certain initial conditions. (We use the conditions to find the correct value of \"+C\" in the general anti-derivative.) These problems are often solved once to find the general anti-derivative for a particular kind of problem, and the general solution is then used as a formula to find the constant .   Proportional growth and continuous reinvestment   I put $20,000 in a retirement account that earns 4% interest compounded continuously. I reinvest all my earnings from the account back into the retirement account. I would like a simple formula for the principal at sometime in the future.    We already have the formula for continuous growth, but it is worthwhile to derive it again. We are told . or .  Integrating both sides with respect to time, we get .  Exponentiating both sides gives .  Since we know that the Principal is $20,000 at time 0, we see that and our equation simplifies to .  This is the formula we took on faith in the last chapter.      Depreciation  When computing costs of a business, we need to evaluate the depreciation cost of capital equipment. There are a number of reasonable ways of computing depreciation.     Straight-line depreciation  Assumes that a piece of equipment loses the same amount of value each year until it is worthless.     The sum of digits method of depreciation  Assumes the rate of depreciation is proportional to the expected remaining useful life of the piece of equipment. For example with a sum of years method and defining as the value, EL is the expected lifetime, is a constant, and is time, we would have:     The declining balance depreciation  This method assumes the rate of depreciation is proportional to the current value, with the initial rate of depreciation twice the straight-line rate, with depreciation stopping when the value is the scrap value. We let be the estimated life of the asset and we let the rate of depreciation be:       Straight Line Depreciation   You buy a car for $18,000 and you want to depreciate it to $0 over 5 years. Find a formula for the value of the car. We assume the value decreases a constant rate, so we use straight-line depreciation. Give a simple formula to find the book value of the equipment after 3.5 years.    The easiest way to do this problem is not to use calculus, but to realize we want the equation of a line and we have two points. .  Taking slope as rise over run, the slope is and the intercept is 18,000. Thus our equation is .  Using calculus on the same problem we have .  Integrating the first equation gives .  Thus, straight-line depreciation gives a value function, which is a straight line. We now plug in known values to find the constants. We plug in for to see . We plug in for to see . This gives us the same equation using calculus as we obtained using algebra. The book value of the equipment at 3.5 years is $5,400 with this method of depreciation.      Sum of years method   After buying the same car from the example above, we assume that the depreciation is proportional to the amount of useful life that the equipment has left. (A car loses more value in its first year than in its last year of life.) Produce an equation for the book value of the same $18,000 car with this method.    We start with the observation that we are given that for some constant , and we know that and .  With an expected lifetime of 5, integrating the first equation gives .  Thus the sum of years method gives a value function which is quadratic. Once again, we plug in known points to find the constants. We plug in for time = 0 to see . We plug in for time = 5 and get .  Solving this we get . Our book value formula is then .  At 3.5 years the value will be .  The book value at 3.5 years is $1,620 with this method of depreciation.      Declining Balance depreciation   This method of depreciation says an item loses value in proportion to its current value. The standard method uses a rate that is twice the rate of straight-line depreciation until we reach scrap value, when depreciation stops. Use this method to find the book value of our $100,000 piece of equipment at 3.5 years if the scrap value is $10,000 and the useful life is 5 years.    In we saw that proportional growth or decay give an exponential function. The basic value function is .  However we need to find when the piece of equipment stops depreciating. Solving , we get , or .  Since 3.5 is less than 4.5 years, the equipment is still depreciating. Its book value is .       Reading Check  Reading check, Applications of the Integral, Investment and Depreciation   This question checks your reading comprehension of the material is section 7.7, Applications of the Integral, Investment and Depreciation, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    If we can set up the integral of an application, we can use CAS to evaluate the integral.    We can accumulate marginal cost over time to find change in cost.    This section explained how to use calculus to predict the future value of the stock market.    to find the current value of a revenue stream we take the integral of the revenue stream times a discounting functions that represents how much a future payment is worth today.    Accumulating a function over time is simply taking a definite integral.    The example on oil production took the integral of an exponential function.    None of the above                Exercises: Applications of the integral: Investment and depreciation Problems   The marginal costs for producing widgets is . Find the increase in cost in going from producing 60,000 units to producing 80,000 units.        The marginal profit for producing gizmos is . Find the change in profit in going from producing 70,000 units to producing 90,000 units.    The daily sales projections for a fad item are: . Find the estimated total sales over the first 100 days.   We expect sales of about 25000 units.     The daily sales projections for a new item are: . Find the estimated total sales over the first 200 days.    The production from an oil well starts at a rate of 10,000 barrels per year and declines exponentially at a rate of 10% per year. How much is produced in 6 years?   We expect 44,472 barrels of oil over the 6 years.     An oil well is producing 15,000 barrels per year. The rate of production is continuously declining at a rate of 10% per year. The well will be capped as unproductive when it produces 3,000 barrels per year. How much will it produce before being capped?    A stream of revenue produces at a rate of $40,000 per year. We assume that the risk free investment rate is 3% per year. What is the current value of the revenue stream over 20 years?   We evaluate the revenue stram to be worth $603,982.     A stream of revenue produces at a rate of dollars per year with measured in years. We assume that the risk free investment rate is 3% per year. What is the current value of the revenue stream over 20 years?    "
},
{
  "id": "sec-7-7-InvestmentDepreciation-3-3",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#sec-7-7-InvestmentDepreciation-3-3",
  "type": "Example",
  "number": "7.7.1",
  "title": "Accumulating a constant function over time.",
  "body": " Accumulating a constant function over time   Mary runs a small shop that is temporarily disconnected from the power network. A generator that provides power uses 2 gallons of fuel per hour. How much fuel does she need to keep the shop running from 8 in the morning until 6 in the afternoon.    We started with a problem that is easy to do without calculus to give us confidence in our method. We solve it with algebra first. Mary wants to run the generator for 10 hours and it consumes 2 gallons of fuel per hour. She needs (10 hours)(2 gallons\/hour) = 20 gallons of fuel.  To set the problem up for calculus, we use a 24-hour clock to put time on a number line. We are accumulating from to . We need . gallons of fuel.    "
},
{
  "id": "sec-7-7-InvestmentDepreciation-3-4",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#sec-7-7-InvestmentDepreciation-3-4",
  "type": "Example",
  "number": "7.7.2",
  "title": "Accumulating marginal cost.",
  "body": " Accumulating marginal cost    .  Find the increase in cost as production goes from 50,000 to 80,000.    Since the change in cost looks like a Riemann sum with 30,000 intervals, we will approximate the change in cost with the integral of the marginal cost. With this function we can easily find an antiderivative and evaluate. The change in cost is .  The change in cost of production is $3,450,000.    "
},
{
  "id": "sec-7-7-InvestmentDepreciation-3-5",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#sec-7-7-InvestmentDepreciation-3-5",
  "type": "Example",
  "number": "7.7.3",
  "title": "Oil production.",
  "body": " Oil production   An oil well in Texas initially produces oil at a rate of 2 million barrels of oil per year. The production rate will typically fall 15% per year. How much oil is produced over a 5-year period?    We want to integrate our production rate of as goes from 0 to 5. We can use our antidifferentiation formulas for this problem. .  Over 5 years, the well will produce 6.846 million barrels of oil.    "
},
{
  "id": "sec-7-7-InvestmentDepreciation-3-6",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#sec-7-7-InvestmentDepreciation-3-6",
  "type": "Example",
  "number": "7.7.4",
  "title": "Discounted revenue stream.",
  "body": " Discounted revenue stream   Your company is interested in acquiring a revenue stream that is currently producing are a rate of thousand dollars per year, where t is measured in years. To obtain current value, you are discounting at a rate of 6% per year compounded continuously. What is the current value of the first 10 years of income from the stream?    To find the total income we would want to integrate as goes from 0 to 10. To find the current value we must discount the income based in when we receive it. Thus we want to integrate as goes from 0 to 10. We set up the integral . Since we do not know how to find the anti-derivative for this function, we find the area either with Excel and Riemann sums, or with Wolfram Alpha.   With either method, we find that the present value of the revenue stream to be $545,298.    "
},
{
  "id": "ex-proportional-growth",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#ex-proportional-growth",
  "type": "Example",
  "number": "7.7.5",
  "title": "Proportional growth and continuous reinvestment.",
  "body": " Proportional growth and continuous reinvestment   I put $20,000 in a retirement account that earns 4% interest compounded continuously. I reinvest all my earnings from the account back into the retirement account. I would like a simple formula for the principal at sometime in the future.    We already have the formula for continuous growth, but it is worthwhile to derive it again. We are told . or .  Integrating both sides with respect to time, we get .  Exponentiating both sides gives .  Since we know that the Principal is $20,000 at time 0, we see that and our equation simplifies to .  This is the formula we took on faith in the last chapter.   "
},
{
  "id": "sec-7-7-InvestmentDepreciation-5-4",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#sec-7-7-InvestmentDepreciation-5-4",
  "type": "Example",
  "number": "7.7.6",
  "title": "Straight Line Depreciation.",
  "body": " Straight Line Depreciation   You buy a car for $18,000 and you want to depreciate it to $0 over 5 years. Find a formula for the value of the car. We assume the value decreases a constant rate, so we use straight-line depreciation. Give a simple formula to find the book value of the equipment after 3.5 years.    The easiest way to do this problem is not to use calculus, but to realize we want the equation of a line and we have two points. .  Taking slope as rise over run, the slope is and the intercept is 18,000. Thus our equation is .  Using calculus on the same problem we have .  Integrating the first equation gives .  Thus, straight-line depreciation gives a value function, which is a straight line. We now plug in known values to find the constants. We plug in for to see . We plug in for to see . This gives us the same equation using calculus as we obtained using algebra. The book value of the equipment at 3.5 years is $5,400 with this method of depreciation.    "
},
{
  "id": "sec-7-7-InvestmentDepreciation-5-5",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#sec-7-7-InvestmentDepreciation-5-5",
  "type": "Example",
  "number": "7.7.7",
  "title": "Sum of years method.",
  "body": " Sum of years method   After buying the same car from the example above, we assume that the depreciation is proportional to the amount of useful life that the equipment has left. (A car loses more value in its first year than in its last year of life.) Produce an equation for the book value of the same $18,000 car with this method.    We start with the observation that we are given that for some constant , and we know that and .  With an expected lifetime of 5, integrating the first equation gives .  Thus the sum of years method gives a value function which is quadratic. Once again, we plug in known points to find the constants. We plug in for time = 0 to see . We plug in for time = 5 and get .  Solving this we get . Our book value formula is then .  At 3.5 years the value will be .  The book value at 3.5 years is $1,620 with this method of depreciation.    "
},
{
  "id": "sec-7-7-InvestmentDepreciation-5-6",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#sec-7-7-InvestmentDepreciation-5-6",
  "type": "Example",
  "number": "7.7.8",
  "title": "Declining Balance depreciation.",
  "body": " Declining Balance depreciation   This method of depreciation says an item loses value in proportion to its current value. The standard method uses a rate that is twice the rate of straight-line depreciation until we reach scrap value, when depreciation stops. Use this method to find the book value of our $100,000 piece of equipment at 3.5 years if the scrap value is $10,000 and the useful life is 5 years.    In we saw that proportional growth or decay give an exponential function. The basic value function is .  However we need to find when the piece of equipment stops depreciating. Solving , we get , or .  Since 3.5 is less than 4.5 years, the equipment is still depreciating. Its book value is .    "
},
{
  "id": "Reading_Check_Sec7.7",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#Reading_Check_Sec7.7",
  "type": "Reading Question",
  "number": "7.7.4.1",
  "title": "Reading check, Applications of the Integral, Investment and Depreciation.",
  "body": "Reading check, Applications of the Integral, Investment and Depreciation   This question checks your reading comprehension of the material is section 7.7, Applications of the Integral, Investment and Depreciation, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    If we can set up the integral of an application, we can use CAS to evaluate the integral.    We can accumulate marginal cost over time to find change in cost.    This section explained how to use calculus to predict the future value of the stock market.    to find the current value of a revenue stream we take the integral of the revenue stream times a discounting functions that represents how much a future payment is worth today.    Accumulating a function over time is simply taking a definite integral.    The example on oil production took the integral of an exponential function.    None of the above             "
},
{
  "id": "exercises-set-sec-7-7-2",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#exercises-set-sec-7-7-2",
  "type": "Exercise",
  "number": "7.7.5.1",
  "title": "",
  "body": " The marginal costs for producing widgets is . Find the increase in cost in going from producing 60,000 units to producing 80,000 units.      "
},
{
  "id": "exercises-set-sec-7-7-3",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#exercises-set-sec-7-7-3",
  "type": "Exercise",
  "number": "7.7.5.2",
  "title": "",
  "body": " The marginal profit for producing gizmos is . Find the change in profit in going from producing 70,000 units to producing 90,000 units.  "
},
{
  "id": "exercises-set-sec-7-7-4",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#exercises-set-sec-7-7-4",
  "type": "Exercise",
  "number": "7.7.5.3",
  "title": "",
  "body": " The daily sales projections for a fad item are: . Find the estimated total sales over the first 100 days.   We expect sales of about 25000 units.   "
},
{
  "id": "exercises-set-sec-7-7-5",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#exercises-set-sec-7-7-5",
  "type": "Exercise",
  "number": "7.7.5.4",
  "title": "",
  "body": " The daily sales projections for a new item are: . Find the estimated total sales over the first 200 days.  "
},
{
  "id": "exercises-set-sec-7-7-6",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#exercises-set-sec-7-7-6",
  "type": "Exercise",
  "number": "7.7.5.5",
  "title": "",
  "body": " The production from an oil well starts at a rate of 10,000 barrels per year and declines exponentially at a rate of 10% per year. How much is produced in 6 years?   We expect 44,472 barrels of oil over the 6 years.   "
},
{
  "id": "exercises-set-sec-7-7-7",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#exercises-set-sec-7-7-7",
  "type": "Exercise",
  "number": "7.7.5.6",
  "title": "",
  "body": " An oil well is producing 15,000 barrels per year. The rate of production is continuously declining at a rate of 10% per year. The well will be capped as unproductive when it produces 3,000 barrels per year. How much will it produce before being capped?  "
},
{
  "id": "exercises-set-sec-7-7-8",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#exercises-set-sec-7-7-8",
  "type": "Exercise",
  "number": "7.7.5.7",
  "title": "",
  "body": " A stream of revenue produces at a rate of $40,000 per year. We assume that the risk free investment rate is 3% per year. What is the current value of the revenue stream over 20 years?   We evaluate the revenue stram to be worth $603,982.   "
},
{
  "id": "exercises-set-sec-7-7-9",
  "level": "2",
  "url": "sec-7-7-InvestmentDepreciation.html#exercises-set-sec-7-7-9",
  "type": "Exercise",
  "number": "7.7.5.8",
  "title": "",
  "body": " A stream of revenue produces at a rate of dollars per year with measured in years. We assume that the risk free investment rate is 3% per year. What is the current value of the revenue stream over 20 years?  "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral",
  "level": "1",
  "url": "sec-7-8-BusinessApplicationsIntegral.html",
  "type": "Section",
  "number": "7.8",
  "title": "Economics Applications of the Integral",
  "body": " Economics Applications of the Integral   Link to worksheets used in this section  We have looked at the definite integral as the signed area under a curve. This lets us compute total profit, or revenue, or cost, from the related marginal functions. We have looked at a number of applications where this was interpreted as an accumulation over time, including total production of an oil well and present value of a revenue stream. For some applications we want to look at the area between two curves. For example, considering profit as the area between the cost and revenue curves.  In this section we will look at more applications from finance and economics where the concepts can easily be described in terms as of the area between curves.    Consumer and Producer Surplus  When we looked at supply and demand curves we found an equilibrium point where the amount being offered for sale was equal to the amount people wanted to buy.   However, in that model, there were people who were willing to sell for less than the equilibrium price and people who were willing to buy for more than the equilibrium price. These people got an exceptionally good deal in the transaction. We would like to measure that benefit, since we can think of it as the extra profit the suppliers and buyers make on the transaction. We note that each side will have an incentive to maximize that benefit.  Focus first on the consumer side. The area under the demand function, from 0 to the quantity sold, measures the consumers’ willingness to spend. The area in the rectangle with that same base and height equal to the sale price measures the actual consumer expenditure. The difference between the two is a quantity we will call consumer surplus .   In calculus terms:       As long as the price stays on the demand function curve, a lower price means a greater quantity sold, and a greater consumer surplus.  In a similar manner, we can focus on the producer side. The area under the supply function, from 0 to the quantity sold, measures the producers’ need for revenue. The area in the rectangle with that same base and height equal to the sale price measures the actual producer revenue. The difference between the two is a quantity we will call producer surplus .   In calculus terms:       As long as the price stays on the supply function curve, a higher price means a greater quantity sold, and a greater producer surplus. Consider first an example where the supply and demand functions are simple enough that the computations can all be done by hand.   Producer surplus with linear functions   I am trying to sell widgets and have determined the supply and demand functions to be: .  Find the equilibrium price and quantity. Find the producer and consumer surpluses when the shirts are sold at the equilibrium price. If the producers form a cartel, find the price that maximizes producer surplus.    By setting supply price and demand price equal to each other we find an equilibrium quantity of 34 and an equilibrium price of 38. The formulas for the consumer and producer surpluses become:    To evaluate the integrals we can notice that each is a triangle of base 34. One has height of 34 and the other has a height of 68. Using geometry, the consumer surplus is $1,156 and the producer surplus is $578.  To find the maximum producer surplus, we need to turn the endpoint into a variable. If the producers act as a cartel,    We can find the maximum of this by taking its derivative and setting it equal to 0. The maximum occurs when . At that point the producer surplus is $1,040.40.    We now try an example where we need other techniques to evaluate the integrals.   Producer surplus with numeric integration   A store trying to sell t-shirts on campus has determined the supply and demand functions to be:  .  Find the equilibrium price and quantity. Find the producer and consumer surpluses when the shirts are sold at the equilibrium price.    We load the supply and demand price functions into excel and use Goal Seek to find an equilibrium price. Rounding to the nearest unit for quantity and cent for price, we have an equilibrium price of $10.45 for a quantity of 222 shirts.      We then substitute these values into the equations for consumer and producer surplus. .  To evaluate these integrals we either use a Riemann sum approximation, like the one found on the example worksheet, or use Wolfram Alpha. In either case, rounded to the nearest dollar, we have a consumer surplus of $372 and a producer surplus of $191.        The sum of the consumer surplus and the producer surplus is referred to as the total social gain . As we looked at consumers' surplus, we assumed that the sales were determined by supply and the price-quantity point was on the supply curve. Similarly, when looking at producers' surplus we assume price is set by demand and the price-quantity point was on the demand curve. If both sides are made up of many individuals acting independently, the price-quantity point is the equilibrium point, which is on both curves. Selling at that point also maximizes the total social gain.   If however, either the producers or consumers can organize and act as a unit, they can form a cartel and limit the amount sold. If the producers form a cartel, they can lower production and raise the price.   As we can see from the picture, this always lowers the total social gain. However for some reduction of quantity the producers’ surplus is increased. In the equation for producer surplus the price is rather than . If the quantity goes down too far the producer surplus will also go down.   Computing loss of social gain   A store trying to sell t-shirts on campus has determined the supply and demand functions to be:    The store owner has a monopoly on campus and decides to limit the quantity sold to 200 shirts and charge what the market will bear. Find the price, the producer surplus, and consumer surpluses. Find these numbers if the owner decides to limit sales to 50. How many shirts should the owner sell at what price to maximize producer surplus? If producer surplus is maximized, how much is the total social gain reduced?    The formulas involved for supply and demand are the same ones we used in . With a slight modification if the worksheet from that example we can set it to compute the Riemann sums approximating the surpluses. In particular, we use the demand function for finding the height of producer surplus. (See cell D7.)   If we only want to sell 200 shirts, we can raise the price to from $10.45 to $10.50. The producer surplus rises from $191 to $199. However the consumer surplus falls from $372 to $362.   If we only want to sell 50 shirts, we can raise the price from$10.45 to $11.92. The producer surplus falls from $191 to $174. The consumer surplus falls from $372 to $230.   We can use solver to maximize the Producer surplus by varying the quantity. A quantity of 140 maximizes the producer surplus at $210, but is doing that the total social gain is down to $537 from $563.     Similarly, if the consumers form a cartel, they can artificially reduce the demand. Since they will then pay the supply price the total social gain will be decreased, but the consumers’ surplus may be increased. In this case the consumer surplus is the integral of the difference between the demand function and the supply price of the quantity that will be sold.   In the example we just looked at, both the supply and demand curves have a small slope, so the market is quite elastic from both the producers and consumers point of view. Is such a case there is less incentive to form a cartel. In other markets, like gas and oil, where the market is more inelastic, there is more incentive to engage in monopolistic practices.    Lorenz Curves and the Gini Index  A question that arises in economics looks at the equity of income or wealth distribution in a country. In standard economic theories either too much or too little equity indicates a lack of opportunity and is a hindrance to growth. However, before being able to address the advantages or disadvantages of a level of inequity we need to be able to quantify the level of equity or inequity. The standard method is to use the Lorenz curve and the Gini index .  The Lorenz curve is defined by a function , with , that measures the proportion of something is held by the bottom proportion of the population. Thus, if , for the Lorenz function for income in a country, then the bottom 20% of the population earns 10% of the income in the country. Since, under usual definitions, a person cannot have negative income, the Lorenz functions are nonnegative and increasing. Since the Lorenz functions are measured from the bottom, we also have for all .  We can make a few more observations. The population as a whole has the entire income of the population. An empty set of the population has none of the population's income. Any bottom segment will have nonnegative income. In formulas these observations become , , and , for all , respectively.  If we had perfect equity, our Lorenz function would be . Any Lorenz curve we find for a real population will be below this curve. The Gini index (or Gini coefficient) measures the percentage that a real Lorenz curve is below the ideal curve.   Computationally, .  In practice this number is often multiply by 100, reporting the percentage (0 to 100) rather than proportion (0 to 1) of the area under the ideal function and above the measured function.   Gini index with a formula for income distribution   The Lorenz curve for income in a certain country is given by . What proportion of the income is earned by the bottom half of the population? Find the Gini index.    To find the proportion earned by the bottom half of the population we substitute 0.5 in the equation. .  Thus the bottom 50% of the population earns 20.% of the total income. To compute the Gini index, we compute: .  So the Gini index in this hypothetical country is 40. To put this number in context, the reported Gini index for the United States in 2009 was 46.8.    In practice, the Gini index is an application where a numeric approximation of an integral is the method most likely to be used. We are unlikely to get a formula for income distribution. Instead we are likely to find data points. Since there is no good model for how the income will be distributed, we can simply connect the points with line segments and find the area using the area formula for a trapezoid.   Gini index with a chart for income distribution   We have the following data from the census bureau on income distribution in the US in 2008. Compute the Gini index.    Population %tile  0 20 40  60 80 90 100    Income %tile 0 3.4  12.0 26.7 50.0  78.5 100      We recall that the area of a trapezoid is (width)(average height). We put the data into a spreadsheet.   Then we evaluate the formulas.   In percentages, the Gini index is approximated at 45.      Reading Check  Reading check, Economics Applications of the integral   This question checks your reading comprehension of the material is section 7.8, Economics Applications of the integral, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    This section explained how to use calculus to predict the future value of the stock market.    If we can set up the integral of an application, we can use CAS to evaluate the integral.    We can accumulate marginal cost over time to find change in cost.    The example on oil production took the integral of an exponential function.    Accumulating a function over time is simply taking a definite integral.    to find the current value of a revenue stream we take the integral of the revenue stream times a discounting functions that represents how much a future payment is worth today.    None of the above                Exercises Business Applications of the Integral Problems    For the following exercises, assume we have a free market and that goods are sold at market equilibrium. Find the consumer surplus, producer surplus, and total social gain.     and .   The two curves intersect at the point of market equilibrium, .   .     and .     and .   The two curves intersect at the point of market equilibrium, .   .     and .     and .   The two curve intersect at the point of market equilibrium, .   . The integral needs to be done in two parts with the break at 10. . .     and .     Assume and .    Find the consumer surplus, producer surplus, and total social gain at market equilibrium.  If the producers can form a cartel and restrict the available quantity to 50, selling at the supply price for 50, what are the consumer surplus, producer surplus, and total social gain?  Find the price where a producer cartel will maximize the producer surplus. Find the producer surplus at that price.        The two curve intersect at the point of market equilibrium, .   .     .    The formula for the producer surplus at x is .  In our case we get . We note that x is a constant for our integration. Thus, thus we get .  The Maximum Producer surplus is 3266.67, achieved when q is 46.67       Assume SupplyPrice(q)= 10+q\/2 and DemandPrice(q)= 110-q\/3.    Find the consumer surplus, producer surplus, and total social gain at market equilibrium.  If the producers can form a cartel and restrict the available quantity to 400, selling at the supply price for 400, what are the consumer surplus, producer surplus, and total social gain?  Find the price where a producer cartel will maximize the producer surplus. Find the producer surplus at that price.      Assume and .    Find the consumer surplus, producer surplus, and total social gain at market equilibrium.  If the producers can form a cartel and restrict the available quantity to 5, selling at the demand price for 5 (for a price of 185), what are the consumer surplus, producer surplus, and total social gain?  Find the price where a producer cartel will maximize the producer surplus. Find the producer surplus at that price.        The two curve intersect at the point of market equilibrium, .   .     .    The formula for the producer surplus at is .  In our case we get . We note that is a constant for our integration. Thus, thus we get .  To find the maximum producer surplus, we take the derivative of the function above and see it is zero at . The maximum producer surplus is 942.81, achieved when q is        Consider the Lorenz curve . Find the Gini index.    Consider the Lorenz curve . Find the Gini index.        You research a country and find the following information on income share:    Population %tile  20 40  60 80    Income %tile 5 15  30 50    Compute an approximation of the Gini index.    You research a country and find the following information on income share:    Population %tile  20 40  60 80 90 95  99    Income %tile 5 15  30 50 65  75 90    Compute an approximation of the Gini index.   We approximate the area by using straight lines between the given point and using trapezoids for the area of section. We then need to multiply by 2, since we want the percentage below the diagonal line, and multiply by 100 to go from percentile to percents.   The Gini index is approximately 57.    Find data online on the income distribution in the United States. Good sources are the Census Bureau, at http:\/\/www.census.gov\/hhes\/www\/income\/data\/historical\/inequality\/index.html , and http:\/\/www.wealthandwant.com\/issues\/income\/income_distribution.html . Compute an approximation of the Gini index from your data.    "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral-3-5",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#sec-7-8-BusinessApplicationsIntegral-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consumer surplus "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral-3-10",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#sec-7-8-BusinessApplicationsIntegral-3-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "producer surplus "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral-3-15",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#sec-7-8-BusinessApplicationsIntegral-3-15",
  "type": "Example",
  "number": "7.8.1",
  "title": "Producer surplus with linear functions.",
  "body": " Producer surplus with linear functions   I am trying to sell widgets and have determined the supply and demand functions to be: .  Find the equilibrium price and quantity. Find the producer and consumer surpluses when the shirts are sold at the equilibrium price. If the producers form a cartel, find the price that maximizes producer surplus.    By setting supply price and demand price equal to each other we find an equilibrium quantity of 34 and an equilibrium price of 38. The formulas for the consumer and producer surpluses become:    To evaluate the integrals we can notice that each is a triangle of base 34. One has height of 34 and the other has a height of 68. Using geometry, the consumer surplus is $1,156 and the producer surplus is $578.  To find the maximum producer surplus, we need to turn the endpoint into a variable. If the producers act as a cartel,    We can find the maximum of this by taking its derivative and setting it equal to 0. The maximum occurs when . At that point the producer surplus is $1,040.40.   "
},
{
  "id": "ex-surplus-numeric",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#ex-surplus-numeric",
  "type": "Example",
  "number": "7.8.2",
  "title": "Producer surplus with numeric integration.",
  "body": " Producer surplus with numeric integration   A store trying to sell t-shirts on campus has determined the supply and demand functions to be:  .  Find the equilibrium price and quantity. Find the producer and consumer surpluses when the shirts are sold at the equilibrium price.    We load the supply and demand price functions into excel and use Goal Seek to find an equilibrium price. Rounding to the nearest unit for quantity and cent for price, we have an equilibrium price of $10.45 for a quantity of 222 shirts.      We then substitute these values into the equations for consumer and producer surplus. .  To evaluate these integrals we either use a Riemann sum approximation, like the one found on the example worksheet, or use Wolfram Alpha. In either case, rounded to the nearest dollar, we have a consumer surplus of $372 and a producer surplus of $191.       "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral-3-18",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#sec-7-8-BusinessApplicationsIntegral-3-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "total social gain "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral-3-23",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#sec-7-8-BusinessApplicationsIntegral-3-23",
  "type": "Example",
  "number": "7.8.3",
  "title": "Computing loss of social gain.",
  "body": " Computing loss of social gain   A store trying to sell t-shirts on campus has determined the supply and demand functions to be:    The store owner has a monopoly on campus and decides to limit the quantity sold to 200 shirts and charge what the market will bear. Find the price, the producer surplus, and consumer surpluses. Find these numbers if the owner decides to limit sales to 50. How many shirts should the owner sell at what price to maximize producer surplus? If producer surplus is maximized, how much is the total social gain reduced?    The formulas involved for supply and demand are the same ones we used in . With a slight modification if the worksheet from that example we can set it to compute the Riemann sums approximating the surpluses. In particular, we use the demand function for finding the height of producer surplus. (See cell D7.)   If we only want to sell 200 shirts, we can raise the price to from $10.45 to $10.50. The producer surplus rises from $191 to $199. However the consumer surplus falls from $372 to $362.   If we only want to sell 50 shirts, we can raise the price from$10.45 to $11.92. The producer surplus falls from $191 to $174. The consumer surplus falls from $372 to $230.   We can use solver to maximize the Producer surplus by varying the quantity. A quantity of 140 maximizes the producer surplus at $210, but is doing that the total social gain is down to $537 from $563.    "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral-4-2",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#sec-7-8-BusinessApplicationsIntegral-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lorenz curve Gini index "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral-4-9",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#sec-7-8-BusinessApplicationsIntegral-4-9",
  "type": "Example",
  "number": "7.8.4",
  "title": "Gini index with a formula for income distribution.",
  "body": " Gini index with a formula for income distribution   The Lorenz curve for income in a certain country is given by . What proportion of the income is earned by the bottom half of the population? Find the Gini index.    To find the proportion earned by the bottom half of the population we substitute 0.5 in the equation. .  Thus the bottom 50% of the population earns 20.% of the total income. To compute the Gini index, we compute: .  So the Gini index in this hypothetical country is 40. To put this number in context, the reported Gini index for the United States in 2009 was 46.8.   "
},
{
  "id": "sec-7-8-BusinessApplicationsIntegral-4-11",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#sec-7-8-BusinessApplicationsIntegral-4-11",
  "type": "Example",
  "number": "7.8.5",
  "title": "Gini index with a chart for income distribution.",
  "body": " Gini index with a chart for income distribution   We have the following data from the census bureau on income distribution in the US in 2008. Compute the Gini index.    Population %tile  0 20 40  60 80 90 100    Income %tile 0 3.4  12.0 26.7 50.0  78.5 100      We recall that the area of a trapezoid is (width)(average height). We put the data into a spreadsheet.   Then we evaluate the formulas.   In percentages, the Gini index is approximated at 45.   "
},
{
  "id": "Reading_Check_Sec7.8",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#Reading_Check_Sec7.8",
  "type": "Reading Question",
  "number": "7.8.3.1",
  "title": "Reading check, Economics Applications of the integral.",
  "body": "Reading check, Economics Applications of the integral   This question checks your reading comprehension of the material is section 7.8, Economics Applications of the integral, of Business Calculus with Excel. Based on your reading, select all statements that are correct. There may be more than one correct answer. The statements may appear in what seems to be a random order.    This section explained how to use calculus to predict the future value of the stock market.    If we can set up the integral of an application, we can use CAS to evaluate the integral.    We can accumulate marginal cost over time to find change in cost.    The example on oil production took the integral of an exponential function.    Accumulating a function over time is simply taking a definite integral.    to find the current value of a revenue stream we take the integral of the revenue stream times a discounting functions that represents how much a future payment is worth today.    None of the above             "
},
{
  "id": "exercises-set-sec-7-8-2-2",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-2-2",
  "type": "Exercise",
  "number": "7.8.4.1",
  "title": "",
  "body": "  and .   The two curves intersect at the point of market equilibrium, .   .  "
},
{
  "id": "exercises-set-sec-7-8-2-3",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-2-3",
  "type": "Exercise",
  "number": "7.8.4.2",
  "title": "",
  "body": "  and .  "
},
{
  "id": "exercises-set-sec-7-8-2-4",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-2-4",
  "type": "Exercise",
  "number": "7.8.4.3",
  "title": "",
  "body": "  and .   The two curves intersect at the point of market equilibrium, .   .  "
},
{
  "id": "exercises-set-sec-7-8-2-5",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-2-5",
  "type": "Exercise",
  "number": "7.8.4.4",
  "title": "",
  "body": "  and .  "
},
{
  "id": "exercises-set-sec-7-8-2-6",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-2-6",
  "type": "Exercise",
  "number": "7.8.4.5",
  "title": "",
  "body": "  and .   The two curve intersect at the point of market equilibrium, .   . The integral needs to be done in two parts with the break at 10. . .  "
},
{
  "id": "exercises-set-sec-7-8-2-7",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-2-7",
  "type": "Exercise",
  "number": "7.8.4.6",
  "title": "",
  "body": "  and .  "
},
{
  "id": "exercises-set-sec-7-8-3",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-3",
  "type": "Exercise",
  "number": "7.8.4.7",
  "title": "",
  "body": " Assume and .    Find the consumer surplus, producer surplus, and total social gain at market equilibrium.  If the producers can form a cartel and restrict the available quantity to 50, selling at the supply price for 50, what are the consumer surplus, producer surplus, and total social gain?  Find the price where a producer cartel will maximize the producer surplus. Find the producer surplus at that price.        The two curve intersect at the point of market equilibrium, .   .     .    The formula for the producer surplus at x is .  In our case we get . We note that x is a constant for our integration. Thus, thus we get .  The Maximum Producer surplus is 3266.67, achieved when q is 46.67     "
},
{
  "id": "exercises-set-sec-7-8-4",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-4",
  "type": "Exercise",
  "number": "7.8.4.8",
  "title": "",
  "body": " Assume SupplyPrice(q)= 10+q\/2 and DemandPrice(q)= 110-q\/3.    Find the consumer surplus, producer surplus, and total social gain at market equilibrium.  If the producers can form a cartel and restrict the available quantity to 400, selling at the supply price for 400, what are the consumer surplus, producer surplus, and total social gain?  Find the price where a producer cartel will maximize the producer surplus. Find the producer surplus at that price.    "
},
{
  "id": "exercises-set-sec-7-8-5",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-5",
  "type": "Exercise",
  "number": "7.8.4.9",
  "title": "",
  "body": " Assume and .    Find the consumer surplus, producer surplus, and total social gain at market equilibrium.  If the producers can form a cartel and restrict the available quantity to 5, selling at the demand price for 5 (for a price of 185), what are the consumer surplus, producer surplus, and total social gain?  Find the price where a producer cartel will maximize the producer surplus. Find the producer surplus at that price.        The two curve intersect at the point of market equilibrium, .   .     .    The formula for the producer surplus at is .  In our case we get . We note that is a constant for our integration. Thus, thus we get .  To find the maximum producer surplus, we take the derivative of the function above and see it is zero at . The maximum producer surplus is 942.81, achieved when q is      "
},
{
  "id": "exercises-set-sec-7-8-6",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-6",
  "type": "Exercise",
  "number": "7.8.4.10",
  "title": "",
  "body": " Consider the Lorenz curve . Find the Gini index.  "
},
{
  "id": "exercises-set-sec-7-8-7",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-7",
  "type": "Exercise",
  "number": "7.8.4.11",
  "title": "",
  "body": " Consider the Lorenz curve . Find the Gini index.      "
},
{
  "id": "exercises-set-sec-7-8-8",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-8",
  "type": "Exercise",
  "number": "7.8.4.12",
  "title": "",
  "body": " You research a country and find the following information on income share:    Population %tile  20 40  60 80    Income %tile 5 15  30 50    Compute an approximation of the Gini index.  "
},
{
  "id": "exercises-set-sec-7-8-9",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-9",
  "type": "Exercise",
  "number": "7.8.4.13",
  "title": "",
  "body": " You research a country and find the following information on income share:    Population %tile  20 40  60 80 90 95  99    Income %tile 5 15  30 50 65  75 90    Compute an approximation of the Gini index.   We approximate the area by using straight lines between the given point and using trapezoids for the area of section. We then need to multiply by 2, since we want the percentage below the diagonal line, and multiply by 100 to go from percentile to percents.   The Gini index is approximately 57.  "
},
{
  "id": "exercises-set-sec-7-8-10",
  "level": "2",
  "url": "sec-7-8-BusinessApplicationsIntegral.html#exercises-set-sec-7-8-10",
  "type": "Exercise",
  "number": "7.8.4.14",
  "title": "",
  "body": " Find data online on the income distribution in the United States. Good sources are the Census Bureau, at http:\/\/www.census.gov\/hhes\/www\/income\/data\/historical\/inequality\/index.html , and http:\/\/www.wealthandwant.com\/issues\/income\/income_distribution.html . Compute an approximation of the Gini index from your data.  "
},
{
  "id": "SpreadSkillsSection1-3",
  "level": "1",
  "url": "SpreadSkillsSection1-3.html",
  "type": "Section",
  "number": "A.1",
  "title": "From Section 1-3 - Entering and Copying Formulas",
  "body": " From Section 1-3 - Entering and Copying Formulas  Spreadsheet skills introduced in Section 1.3 Introduction to Excel Spreadsheets        Basic Arithmetic in a cell - Addition, subtraction, multiplication, and exponentiation are done with + , 1 , * , \/ , and ^ . The variable is replaced by a cell reference. Multiplication needs to be explicit. (We need x*y ) rather than xy .) Raising to a power of e is done with the EXP() function.  One feture to remember is that Excel uses a slightly different order of operations compared to what is used in all math classes. Excel interprets -5^2 as (-5)^2 rather than -(5^2) .  The Basic Arithmetic video demonstrates basic arithmetic.     Arithmetic with commands - Excel has commands for normal aritmetic operations, SUM(), PRODUCT(), QUOTIENT(), and POWER(). In practice, we will only use SUM(), which cam be used on a list.     Showing all the formulas on a page Under the Formulas tab, the show formulas item from the show button shows all the formulas on the page. An image of the button is in the section.     Quick fill Is used when we want to repeat a cell or collection of cells many times. You select a group of cells, then position the cursor over the dot in the lower right corner of the selection. The shape of the curve will change. Click and drage to fill. Formulas are modified according to the rules of relative and absolute references. A screencast is in the Basic Arithmetic video      Relative and absolute references - When Copying formulae from one cell to another, either with copy and paste, or with quickfil, it is important to understand relative and absolute cell references. Suppose we are moving a formula from cell A1 to cell B3 . (We are going one column over and two rows down.) A relative reference changes with the formula location. =F5 becomes =G7 . An absolute reference stays the same and has dollar signs, $ , to fix an index. For the same move, =$F$5 stays =$F$5 .  We can also fix either the rows or columns by using dollar signs, $ . Moving from cell A1 to cell B3 , the formula =F$5 becomes =G$5 and =$F5 becomes =$F7   See an explanation at Relative and Absolute reference discussion and a video at Relative and Absolute reference video.     We can name a cell with a name that describes its contents. The name is put in the box in the upper right corned of the worksheet . This makes The formulas in the cells easier to read and understand .     "
},
{
  "id": "SpreadSkillsSection1-3-3",
  "level": "2",
  "url": "SpreadSkillsSection1-3.html#SpreadSkillsSection1-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Basic Arithmetic in a cell Arithmetic with commands Showing all the formulas on a page Quick fill Relative and absolute references "
},
{
  "id": "SpreadSkillsSection1-4",
  "level": "1",
  "url": "SpreadSkillsSection1-4.html",
  "type": "Section",
  "number": "A.2",
  "title": "From Section 1.4 Graphing Functions in a Spreadsheet",
  "body": " From Section 1.4 Graphing Functions in a Spreadsheet    Graph a function We graph a function in Excel by first making a table of input and output values. We then select the values for both the x and y values, then select the button to insert a scatter plot. The most common error is to only selct the output, in which case Excel assumes the sequence 1, 2, 3, ... is the input. A screencast of the production of a graph of a simple function.  An image of the table with selections made.   Graph multiple functions Two graph multiple functions we start with a chart that has the input and the output of the multiple functions, Select the column for the input and the outputs to be graphed and then insett a scatterplot. If the input variable is not included, Excel will interpret the first output varaiable as the input and give a very different graoph. If the input and functions are not next to each other in the table, you need to right click (control-click on a Mac) to select cells that are not adjacent. A screencast of the production of a graph of with several function.  An image of the table with multiple functions selection made.   Use a secondary axis. If the scales of the graphs are noticably differnt we want to use a secondary axis for one of the graphs. For example is we are graphung and for the interval , the scale of is so large that we cannot see what happens fith . To use a secondary axis, double click a point and then select secondary axis from the axes tab. An image of two functions and secondary axes.   Formatting a chart. Excel gives you the ability to format your chart. Clciking on a chart brings up the \"Chart Design\" tab. There are menus for \"Add Chart Element\", \"Quick Layout\", and \"Change Chart Type\".  Graph functions with parameters in the definition. We can add parameters to the table we are creating to either look at a variety of curves or to change the domain of the graph. Parameters and values that will be used throguhout the table are written as absolute references. A screencast of producing a graph with parameters.  An image of the table with selections made.     "
},
{
  "id": "SpreadSkillsSection1-4-2",
  "level": "2",
  "url": "SpreadSkillsSection1-4.html#SpreadSkillsSection1-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Graph a function Graph multiple functions Use a secondary axis. Formatting a chart. Graph functions with parameters in the definition. "
},
{
  "id": "SpreadSkillsSection1-5",
  "level": "1",
  "url": "SpreadSkillsSection1-5.html",
  "type": "Section",
  "number": "A.3",
  "title": "From Section 1.5 Adding and Using Best Fit Curves (Trendlines)",
  "body": " From Section 1.5 Adding and Using Best Fit Curves (Trendlines)    Add a trendline to a chart To add a trendline, we build a chart with the data, select the data and add a scatterplot, then right-click on a ploint and select \"Add Trendline\" from the drop down menu . By defualt, Excel will add the best fitting line. (pic AddTrendlineMenu )  Find the equation of the trendline . We use the options pallette to format the trendline. Scroll down and select the option to Display Equation on Chart . If you do not make this selection when creating the trendline, you can right-click (Control-click on a mac) to bring the menu up again.  Although Excel uses the term Trenline, twe can Find a best fit curve for some non-linear models . Select the approriate option from the Trendline Oprions Menu . Options will be grayed out if the trendline model will not fit the given data. (E.g., we cannot make an exponential fit for data that includes negative values.)   When we try to add the predicted function back to the chart we need to translate from mathematical notation to Excel notation. (E.g., we need to use * to make multiplication explicit and ^ to make exponantiation explicit.)  Sometimes we want to change the precision of the coefficients in the trendline , particularly when using the equation to make prediction far from the basepoint. You right-click (Control-click on a mac) on the label to \"Format Trendline Label\" . Choose Number, then category Number or Scientific, and choose the number of digits.    "
},
{
  "id": "SpreadSkillsSection1-5-2",
  "level": "2",
  "url": "SpreadSkillsSection1-5.html#SpreadSkillsSection1-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Add a trendline to a chart Find the equation of the trendline Find a best fit curve for some non-linear models add the predicted function back to the chart change the precision of the coefficients in the trendline "
},
{
  "id": "SpreadSkillsSection1-6",
  "level": "1",
  "url": "SpreadSkillsSection1-6.html",
  "type": "Section",
  "number": "A.4",
  "title": "From Section 1.6 Using Goal Seek",
  "body": " From Section 1.6 Using Goal Seek    Goal Seek is a tool for What If Analysis . Given a formula , it asks what value of will produce a desired value of . It should be noted that, by defualt, it thinks values are equal if within 0.001 of each other.     To find Goal Seek , select the \"Data\" tab, then select the \"What-If Analysis\" menu and the \"Goal Seek\" item. You need to identify an input cell with a number in to be the variable to change. You also need to identify an output cell to that contains a formula that depend on the input cell.  In terms of screenshots we have a starting point where the input is A3 and the output is B3 and the mune is visible in the menu bar. After choosing Goal Seek we are presented with a Goal Seek menu where we identify the input and output cells and the desired vaule of the output. Excel responds with the desired results . There is also a screencast of the Goal Seek example .    We often want to use Goal Seek to find the intersection of two curves .We simply define the difference of the fuunctions as a new formula and ust it for the output.   Avoiding traps of Goal Seek Since Goal Seek finds results numerically, using a variant of Newton's method, there are several cautions to keep in mind:   Goal Seek thinks two values are equal when they are within 0.001 of each other. It will produce an answer to .    Goal seek works best when given a starting point close to an actual solution. On a function with several solutions, different starting points lead to different solutions.    Goal seek is confused by corners and discontinuities.        "
},
{
  "id": "SpreadSkillsSection1-6-2",
  "level": "2",
  "url": "SpreadSkillsSection1-6.html#SpreadSkillsSection1-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "What If Analysis "
},
{
  "id": "SpreadSkillsSection1-6-3",
  "level": "2",
  "url": "SpreadSkillsSection1-6.html#SpreadSkillsSection1-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Goal Seek Avoiding traps of Goal Seek "
},
{
  "id": "SkillsChap1Google",
  "level": "1",
  "url": "SkillsChap1Google.html",
  "type": "Section",
  "number": "A.5",
  "title": "Google Sheets Notes for Chapter 1 skills",
  "body": " Google Sheets Notes for Chapter 1 skills   This text was written with the assumption it would use Excel as the spreadsheet tool. Other institutions may decide they want to do the same approach, but using Google sheets. This section addresses the places where the spreadsheet instructions differ.   Skills that work the same in Excel and Sheets    Basic Arithmetic in a cell  Arithmetic with commands  Quick Fill  Relative and absolute references  Naming a Cell  Graph multiple functions (Given the differences for graphing a single function.)   Graph functions with parameters in the definition.  Add the predicted function back to the chart  Using Goal Seek.  Avoiding traps with Goal Seek.  Finding the intersection of two curves with Goal Seek.    Skills that work differently in Excel and Sheets:  Showing all the formulas on a page is found by selecting the \"view\" tab, then the \"Show\" menu, and the \"formulas\" item.   Graph a function is found by selecting the \"chart\" item from the insert tab. Sheets defaults to a line graph. It brings up a chart editor. Scatterplot is a chart type.   Use a secondary axis. Double click on the graph to bring up the \"Chart Editor\". Use the \"Series\" menu to selct the function that wiill use the left axis for scale. Scroll down to find the \"Axis\" menu. Choose \"Right Axis\".   Formatting a chart. In Sheets, double click on a chart to bring up a Chart editor. THere are a variety on menus. You need to scroll down to see them all.  Showing all the formulas on a page is found by selecting the \"view\" tab, then the \"Show\" menu, and the \"formulas\" item.   Add a trendline to a chart In the \"Chart editor\", scroll down and select the \"Trendline\" option.   Find a best fit curve for some non-linear models In the \"Chart editor\", scroll down and make a selection from the \"Type\" menu.   Change the precision of the coefficients in the trendline , Google Sheets does not seem to have a reasonable way to do this.   Finding Goal Seek Goal Seek is an Extension. From the \"Extensions\" menu, select \"Add-ons\", then \"Get Add-ons\". Serch for and select \"Goal Seek\".    "
},
{
  "id": "SkillsChap1Google-4",
  "level": "2",
  "url": "SkillsChap1Google.html#SkillsChap1Google-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Basic Arithmetic in a cell Arithmetic with commands Quick Fill Relative and absolute references Relative and absolute references Naming a Cell Graph multiple functions Graph functions with parameters in the definition. Add the predicted function back to the chart Using Goal Seek. Avoiding traps with Goal Seek. Finding the intersection of two curves with Goal Seek. "
},
{
  "id": "SkillsChap1Google-5",
  "level": "2",
  "url": "SkillsChap1Google.html#SkillsChap1Google-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Showing all the formulas on a page Graph a function Use a secondary axis. Formatting a chart. Showing all the formulas on a page Add a trendline to a chart Find a best fit curve for some non-linear models Change the precision of the coefficients in the trendline Finding Goal Seek "
},
{
  "id": "SpreadSkills2",
  "level": "1",
  "url": "SpreadSkills2.html",
  "type": "Appendix",
  "number": "B",
  "title": "Spreadsheet Skills Introduced in Chapter 2",
  "body": " Spreadsheet Skills Introduced in Chapter 2  The only new spreadsheet skill introduced in Chapter 2 is the use of nonlinear functions.  Spreadsheets let you use Algebraic functions that you have encountered in previous courses . There are a few details to keep in mind:   Multiplication need to be explicit with * rather then implicit putting terms and numbers next to each other.  Exponentiation uses ^  Square root uses sqrt  is EXP(x)  x needs to be replaced by a cell reference  In reading -A1^2 , Excel interprets the minus sign as a negation symbol which is evaluated as eponentiation. The normal meaning of required parentheses, so -(A1^2)   We also introduce Discontinuous functions that are common in business settings . There are a few details to keep in mind:   Business transactions are generally in whole dollars or cents, so rounding is common. ROUND and its variants round to a specified number of digits before or after he decimal place.  Transactions are often in terms of multiples of a unit size. (Eggs are usually sold in dozens.) CEILING and FLOOR round up or down to multiples of a given quatity.  Transactions often have different rules for different sizes. (Overtime hours pay at a different rate than regualr hours.) IF lets you have a formula with cases..   For all these functions Excel and Sheets operate the same.  "
},
{
  "id": "SpreadSkillsSection3-1",
  "level": "1",
  "url": "SpreadSkillsSection3-1.html",
  "type": "Section",
  "number": "C.1",
  "title": "From Section 3.1- Comparing Functions and Related Marginal Functions",
  "body": "From Section 3.1- Comparing Functions and Related Marginal Functions   The spreadsheet skill in this section was to make a table and graph of a function and its related marginal function. This was done several ways.   Marginal Functions with increasing by 1  The easist contruction is to build a table where the value of increases by 1 from one row to the next. Since , we simply subtract values in successive rows . Screencast of eaxmaple using this approach.   Marginal Functions using Columns  The next easist contruction is to build a table computing and as separate columns with the cell reference replaced by the reference plus 1 . Since , we simply subtract values in successive columns. Screencast of eaxmaple using this approach.  In practice, students often make formula mistakes when using this approach.    Marginal Functions using Quick Fill  The preferred construction builds a template that is easy to reuse. We set up successive colummes for , q , q+1 , f(q) and f(q+1) . I then only have the enter the formula for the function one, under f(q) . Quick fill then provides the correct formula for f(q+1) . Screencast of eaxmaple using this approach. The approach starts at the 3 minute markIn practice, students often make formula mistakes when using this approach.   "
},
{
  "id": "SpreadSkillsSection3-2",
  "level": "1",
  "url": "SpreadSkillsSection3-2.html",
  "type": "Section",
  "number": "C.2",
  "title": "From Section 3.2- Comparing Functions and Numeric Derivatives",
  "body": "From Section 3.2- Comparing Functions and Numeric Derivatives   The spreadsheet skill in this section was to make a table and graph of a function and its derivative. We use a variety of approaches to find numeric derivatives.   Derivatives from the Intuitive Approach  We build a worksheet that plots the function and a secant curve with control over del x . We then reduce del x until the the graphs appear to be the same the graphs appear to be the same . Screencast of example using this approach.   Derivatives from Numerical Limits  Without using graphs, we can also look at the slope of the secant line as del x gets small. . from one row to the next. Screencast of example using this approach.   Graphing a Function with its Numeric Derivative  To build a chart of a function and its derivative and to grpah the functions together, we use a variant of the approach from the previous section. We set up successive colummes for x , x+del x , x-del x , f(x) , f(x+del x)  f(x-del x) , and f'(x) . I then only have the enter the formula for the function one time, under f(x) . Quick fill then provides the correct formula for f(x+del x) and f(x-del x) . Screencast of example using this approach.   In practive, we usually set .   Using Trendline to find Derivative Formulas  If the grpah of the numerical deerivative looks like a model we know, and one that trendline will produce, we can try to obtaina formula useing Trendline. Add a trendline and display the formula of the trendline and If the model is correct, . Screencast of example using this approach.   "
},
{
  "id": "SpreadSkillsSection3-3",
  "level": "1",
  "url": "SpreadSkillsSection3-3.html",
  "type": "Section",
  "number": "C.3",
  "title": "From Section 3.3- Building Linear Approximations",
  "body": " From Section 3.3- Building Linear Approximations  using skills from earlier sections, I compute and for a given function and value > I then use the point-slope formula:     A screencast of linear approximation of square roots .  "
},
{
  "id": "SpreadSkillsSection3-5",
  "level": "1",
  "url": "SpreadSkillsSection3-5.html",
  "type": "Section",
  "number": "C.4",
  "title": "From Section 3.5 - An introduction to Solver 3.5",
  "body": "From Section 3.5 - An introduction to Solver  Solver can be thought of as a more powerful version of GoalSeek . If it is installed, it will be on the Analysis section of the Data tab . If is is not installed, it is easiest to google \"Install solver Excel\" to get instructions that work with your operating system and version of Excel  As with Goal Seek, we can have Excel find the input value that makes a function have a desired output value. The setup of Solver is a bit different thant the setup of Goal Seek . The function to be set is the \"objective function\". The objective functions can depend on more than one cells. By default, it assumes variables should have non-negative values.  While Goal Seek only let you find where a function reached a specified value, Solver also lets you search for a local maximum or a local minimum . There is a screencast of basic solver functionality . As with Goal Seek, Solver's algorithm can be thought of as rolling downhill to the hearest answer. It can be confused if the function has discontinuities or bends too frequently.  Solver allows you to add constraints to the problem . It should be noted, that by default Solver will assume unconstrained variables are nonnegative.  "
},
{
  "id": "SheetsNotesCh3",
  "level": "1",
  "url": "SheetsNotesCh3.html",
  "type": "Section",
  "number": "C.5",
  "title": "Google Sheets Notes for Chapter 3 Skills",
  "body": " Google Sheets Notes for Chapter 3 Skills  Solver works the same way on both Excel and Sheets. In Sheets, it is an Add-in. If Solver is loaded, it is a choice in the \"Extensions\" menu. If not it is added by using the extensions item \"Add-Ons\" and select \"Get Sdd-ons\"  "
},
{
  "id": "SpreadSkillsSection6-1",
  "level": "1",
  "url": "SpreadSkillsSection6-1.html",
  "type": "Section",
  "number": "D.1",
  "title": "From Section 6.1 - Evaluating and graphing functions of several varaibles",
  "body": "From Section 6.1 - Evaluating and graphing functions of several varaibles  Evaluating a function of several variables   Formulas in a cell can refer to several cells , allowing you to create and evaluate functions of several variables. You can see a screencast of the example .   Making a table for a function of 2 variable  To make a table of values I need to construck an array where one variable is horizontal (Row 2 in the example), and the other variable is vertical (Column A in the example). The variabkles are then semi-absolute in the formula, with a dollar sign before either the row or column as needed. You can see a screencast of the example .   Turning a table of a function of 2 variables into a surface graph  Once we have made a table of of values for a function of two variables, we would like to turn it into a 3-D graph. We start with a table like found above .We then move the varable names out of the corner into adjacent rows and columns. Highlight the table, including the values of hte cariables. Then insert a chart, choosing the appropriate chart type. You can choose 3-D surface chart , a 3_D wire frame chart , or a contour chart . You can see a screencast of the example .   "
},
{
  "id": "SpreadSkillsSection6-3",
  "level": "1",
  "url": "SpreadSkillsSection6-3.html",
  "type": "Section",
  "number": "D.2",
  "title": "From Section 6.3 - Critical points and extrema",
  "body": " From Section 6.3 - Critical points and extrema  You can use solver to solve a system of equations . You need to set the problem up with the set of input variables and the equation of the system . Then you call Solver and use all but one of the fromulas as constraints on the system . You can see a screencast of the example .  "
},
{
  "id": "SpreadSkillsSection6-3-2",
  "level": "2",
  "url": "SpreadSkillsSection6-3.html#SpreadSkillsSection6-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "use solver to solve a system of equations "
},
{
  "id": "SheetsNotesCh6",
  "level": "1",
  "url": "SheetsNotesCh6.html",
  "type": "Section",
  "number": "D.3",
  "title": "Google Sheets Notes for Chapter 6 Skills",
  "body": "Google Sheets Notes for Chapter 6 Skills  Sheets does not seem to hae a reasonable way of producing 3-D graphs. For the other spreadsheet skills in this chapter, Excel and Sheets behave the same way.  "
},
{
  "id": "SpreadSkills7",
  "level": "1",
  "url": "SpreadSkills7.html",
  "type": "Appendix",
  "number": "E",
  "title": "Spreadsheet Skills introduced in chapter 7",
  "body": " Spreadsheet Skills introduced in chapter 7   This appendix accumulates the spreadsheet skills introduced in chapter 7 of this textbook.    The main skill in this chapter was to Construct a right-hand rule Riemann sum template We recount the example from the section . In the set-up of the example . We follow our standard practice of putting the question and answer in labeled areas at the top of the worksheet. We want to see the start a and end b of the interval, along with number of subintervals. The width of a subinterval is the width of the whole interval divided by the number of subintervals. The column is for the x value at the right side of the n-th subinterval. We calculate the value of by taking the starting point, , and adding times the width of a subinterval. We then evaluate the function at , which we label . The area of the n-th rectangle is the height, or , times the width of the subinterval. The last column is the total area for the first n rectangles. The sum is taken from the top of the block (with a semi-absolute reference) to the current row. The area for 100 rectangles is our area estimate. Since we don't want to have to look all over for our answer, we bring the area up to cell D2 with the OFFSET command. The command OFFSET(E6,B3,0) starts in cell E6 , goes down B3 (the number of subintervals) rows, and goes over 0 columns. In our case, it finds the value in cell E106 and puts it in cell D2 . A Screencast of the Riemann sum axample is available.  The variant of right-hand Riemann summs is to Construct a midpoint rule Riemann sum template We recount the example from the section . In the set-up of the example we added an extra colum for the midpoint. The midpoint is the right hand edge of the interval minus half the length of the subinterval. We then evaluate at the midpoint.  Excel and Sheets work identically with respect to setting up these templates.  "
},
{
  "id": "SpreadSkills7-3",
  "level": "2",
  "url": "SpreadSkills7.html#SpreadSkills7-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Construct a right-hand rule Riemann sum template "
},
{
  "id": "SpreadSkills7-4",
  "level": "2",
  "url": "SpreadSkills7.html#SpreadSkills7-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Construct a midpoint rule Riemann sum template "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
