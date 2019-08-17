grammar Tarsier;
// the grammar name and the file name must match

// most of the Antlr follow this syntax
// rule_name: sub_rule +EOF
// EOF is Antlr's predefined token in Antlr which is a good practice of telling Antlr
// that a rule has ended
// Parer rules are always at the top and in lowercase
// lexer rules are at the bottom and aree in Upper Case
// program is the entrypoint of the language
program: statement+ EOF ;

// statement here is a subrule which program depends on
// what this means is a statement is either an assignment
// or a function statement
// Note here tabs are important. Spaces won't work
statement
    : assignment_statement
    | function_statement
    | if_statement
    ;

// Assignment statement is basically equal to operator
// Here we are using : as opposed to using an = operator
assignment_statement: ID ':' expression NEWLINE;

// the way we are computing an expression is something called called
// left recursion
// What we are doing here is defining order of operations according to BODMAS
expression
    : '(' expression ')'                                        #eqPar
    | left = expression operator = (MUL|DIV) right = expression #eqMUL
    | left = expression operator = (ADD|SUB) right = expression #eqAdd 
    | ID                                                        #eqVar
    | INT                                                       #eqInt
    | STRING                                                    #eqStr
    ;


// A generic comment the order in which rules are written does matter
// It is a first match greedy policy
// so if you mention comment over INT it may not work as expected

// This is a way we are defining function statement ID followed by list of arguments
// One thing which is sort of a bad practice is what we have used charatcers in parser rules
// like '('. ideally we should define all the lexer rules first and then use then in parser rules
function_statement: ID '(' function_list? ')' NEWLINE*;
// this is a way of defining list of arguments which means they are comma seperated
function_list: expression (',' expression)* ;

// Defining if else block
if_statement: if_fragment code_block else_fragment? ;

// if statemnemt
if_fragment: 'if' boolean_expression NEWLINE? ;
// else statement
else_fragment: 'else' NEWLINE? code_block ;
// code block which is one or more statements each being followed by a newline
code_block: '{' NEWLINE? statement+ '}' NEWLINE;


// Implementing boolean expressions
// Although the order in which we mention the statements is
// important, we are not defining AND or OR logic
// where you can chain boolean operation, so that's okay
boolean_expression
    : left = expression '=' right = expression #boolEq
    | left = expression '>' right = expression #boolGt
    | left = expression '<' right = expression #boolLt
    ;

// Integer definition
INT: '-'? [0-9]+ ;


// ID is essentially both funtion and variable names
// what the following rule will support is start with a lower case
// then accept any alphabet in any case or a hyphen '-'
// aba
// aBB
// aBa
// a-b-a
// a-B-a
ID: ([a-z] | [A-Z]) ([a-z] | [A-Z] | '-')* ;

// we are defining arithmetic operations here
MUL: '*';
DIV: '/';
SUB: '-';
ADD: '+';

// string is defined as somehting within double quotes
STRING : '"' .*? '"' ;

// Essentially we are supporting single line comments here: anything that starts with //
COMMENT: '//' .*? NEWLINE -> skip;

//lexer rules
// defines a new line
// it is saying sort of in a regex format that if you find one or more of /r or /n
NEWLINE: [\r\n]+ ;

// defines a white space
// the reason we are asking to skip it is because
// The lexer would ideally recognize all the tokens including the white space
// and would hand this over to Parser
// The parser would not know what to do with these white spaces, hence we say parser should skip it.
// Here we are not distiniguishing between white space and tabs
WS: [ \t]+ -> skip;
