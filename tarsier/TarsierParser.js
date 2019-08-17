// Generated from Tarsier.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TarsierVisitor = require('./TarsierVisitor').TarsierVisitor;

var grammarFileName = "Tarsier.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0017}\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0006\u0002\u001a\n\u0002\r\u0002\u000e\u0002\u001b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u00052\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005:\n\u0005\f\u0005\u000e",
    "\u0005=\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "B\n\u0006\u0003\u0006\u0003\u0006\u0007\u0006F\n\u0006\f\u0006\u000e",
    "\u0006I\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "N\n\u0007\f\u0007\u000e\u0007Q\u000b\u0007\u0003\b\u0003\b\u0003\b\u0005",
    "\bV\n\b\u0003\t\u0003\t\u0003\t\u0005\t[\n\t\u0003\n\u0003\n\u0005\n",
    "_\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000be\n\u000b\u0003",
    "\u000b\u0006\u000bh\n\u000b\r\u000b\u000e\u000bi\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f{\n\f\u0003\f\u0002",
    "\u0003\b\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002",
    "\u0004\u0003\u0002\u0010\u0011\u0003\u0002\u0012\u0013\u0002\u0083\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006",
    "$\u0003\u0002\u0002\u0002\b1\u0003\u0002\u0002\u0002\n>\u0003\u0002",
    "\u0002\u0002\fJ\u0003\u0002\u0002\u0002\u000eR\u0003\u0002\u0002\u0002",
    "\u0010W\u0003\u0002\u0002\u0002\u0012\\\u0003\u0002\u0002\u0002\u0014",
    "b\u0003\u0002\u0002\u0002\u0016z\u0003\u0002\u0002\u0002\u0018\u001a",
    "\u0005\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001b",
    "\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001e",
    "\u0007\u0002\u0002\u0003\u001e\u0003\u0003\u0002\u0002\u0002\u001f#",
    "\u0005\u0006\u0004\u0002 #\u0005\n\u0006\u0002!#\u0005\u000e\b\u0002",
    "\"\u001f\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"!\u0003",
    "\u0002\u0002\u0002#\u0005\u0003\u0002\u0002\u0002$%\u0007\u000f\u0002",
    "\u0002%&\u0007\u0003\u0002\u0002&\'\u0005\b\u0005\u0002\'(\u0007\u0016",
    "\u0002\u0002(\u0007\u0003\u0002\u0002\u0002)*\b\u0005\u0001\u0002*+",
    "\u0007\u0004\u0002\u0002+,\u0005\b\u0005\u0002,-\u0007\u0005\u0002\u0002",
    "-2\u0003\u0002\u0002\u0002.2\u0007\u000f\u0002\u0002/2\u0007\u000e\u0002",
    "\u000202\u0007\u0014\u0002\u00021)\u0003\u0002\u0002\u00021.\u0003\u0002",
    "\u0002\u00021/\u0003\u0002\u0002\u000210\u0003\u0002\u0002\u00022;\u0003",
    "\u0002\u0002\u000234\f\u0007\u0002\u000245\t\u0002\u0002\u00025:\u0005",
    "\b\u0005\b67\f\u0006\u0002\u000278\t\u0003\u0002\u00028:\u0005\b\u0005",
    "\u000793\u0003\u0002\u0002\u000296\u0003\u0002\u0002\u0002:=\u0003\u0002",
    "\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<\t",
    "\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002>?\u0007\u000f\u0002",
    "\u0002?A\u0007\u0004\u0002\u0002@B\u0005\f\u0007\u0002A@\u0003\u0002",
    "\u0002\u0002AB\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CG\u0007",
    "\u0005\u0002\u0002DF\u0007\u0016\u0002\u0002ED\u0003\u0002\u0002\u0002",
    "FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002",
    "\u0002H\u000b\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002JO\u0005",
    "\b\u0005\u0002KL\u0007\u0006\u0002\u0002LN\u0005\b\u0005\u0002MK\u0003",
    "\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002",
    "OP\u0003\u0002\u0002\u0002P\r\u0003\u0002\u0002\u0002QO\u0003\u0002",
    "\u0002\u0002RS\u0005\u0010\t\u0002SU\u0005\u0014\u000b\u0002TV\u0005",
    "\u0012\n\u0002UT\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002V",
    "\u000f\u0003\u0002\u0002\u0002WX\u0007\u0007\u0002\u0002XZ\u0005\u0016",
    "\f\u0002Y[\u0007\u0016\u0002\u0002ZY\u0003\u0002\u0002\u0002Z[\u0003",
    "\u0002\u0002\u0002[\u0011\u0003\u0002\u0002\u0002\\^\u0007\b\u0002\u0002",
    "]_\u0007\u0016\u0002\u0002^]\u0003\u0002\u0002\u0002^_\u0003\u0002\u0002",
    "\u0002_`\u0003\u0002\u0002\u0002`a\u0005\u0014\u000b\u0002a\u0013\u0003",
    "\u0002\u0002\u0002bd\u0007\t\u0002\u0002ce\u0007\u0016\u0002\u0002d",
    "c\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002eg\u0003\u0002\u0002",
    "\u0002fh\u0005\u0004\u0003\u0002gf\u0003\u0002\u0002\u0002hi\u0003\u0002",
    "\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002kl\u0007\n\u0002\u0002lm\u0007\u0016\u0002\u0002m",
    "\u0015\u0003\u0002\u0002\u0002no\u0005\b\u0005\u0002op\u0007\u000b\u0002",
    "\u0002pq\u0005\b\u0005\u0002q{\u0003\u0002\u0002\u0002rs\u0005\b\u0005",
    "\u0002st\u0007\f\u0002\u0002tu\u0005\b\u0005\u0002u{\u0003\u0002\u0002",
    "\u0002vw\u0005\b\u0005\u0002wx\u0007\r\u0002\u0002xy\u0005\b\u0005\u0002",
    "y{\u0003\u0002\u0002\u0002zn\u0003\u0002\u0002\u0002zr\u0003\u0002\u0002",
    "\u0002zv\u0003\u0002\u0002\u0002{\u0017\u0003\u0002\u0002\u0002\u0010",
    "\u001b\"19;AGOUZ^diz"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'('", "')'", "','", "'if'", "'else'", 
                     "'{'", "'}'", "'='", "'>'", "'<'", null, null, "'*'", 
                     "'/'", "'-'", "'+'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, "INT", "ID", "MUL", "DIV", "SUB", 
                      "ADD", "STRING", "COMMENT", "NEWLINE", "WS" ];

var ruleNames =  [ "program", "statement", "assignment_statement", "expression", 
                   "function_statement", "function_list", "if_statement", 
                   "if_fragment", "else_fragment", "code_block", "boolean_expression" ];

function TarsierParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TarsierParser.prototype = Object.create(antlr4.Parser.prototype);
TarsierParser.prototype.constructor = TarsierParser;

Object.defineProperty(TarsierParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TarsierParser.EOF = antlr4.Token.EOF;
TarsierParser.T__0 = 1;
TarsierParser.T__1 = 2;
TarsierParser.T__2 = 3;
TarsierParser.T__3 = 4;
TarsierParser.T__4 = 5;
TarsierParser.T__5 = 6;
TarsierParser.T__6 = 7;
TarsierParser.T__7 = 8;
TarsierParser.T__8 = 9;
TarsierParser.T__9 = 10;
TarsierParser.T__10 = 11;
TarsierParser.INT = 12;
TarsierParser.ID = 13;
TarsierParser.MUL = 14;
TarsierParser.DIV = 15;
TarsierParser.SUB = 16;
TarsierParser.ADD = 17;
TarsierParser.STRING = 18;
TarsierParser.COMMENT = 19;
TarsierParser.NEWLINE = 20;
TarsierParser.WS = 21;

TarsierParser.RULE_program = 0;
TarsierParser.RULE_statement = 1;
TarsierParser.RULE_assignment_statement = 2;
TarsierParser.RULE_expression = 3;
TarsierParser.RULE_function_statement = 4;
TarsierParser.RULE_function_list = 5;
TarsierParser.RULE_if_statement = 6;
TarsierParser.RULE_if_fragment = 7;
TarsierParser.RULE_else_fragment = 8;
TarsierParser.RULE_code_block = 9;
TarsierParser.RULE_boolean_expression = 10;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(TarsierParser.EOF, 0);
};

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.ProgramContext = ProgramContext;

TarsierParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TarsierParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 22;
            this.statement();
            this.state = 25; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===TarsierParser.T__4 || _la===TarsierParser.ID);
        this.state = 27;
        this.match(TarsierParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.assignment_statement = function() {
    return this.getTypedRuleContext(Assignment_statementContext,0);
};

StatementContext.prototype.function_statement = function() {
    return this.getTypedRuleContext(Function_statementContext,0);
};

StatementContext.prototype.if_statement = function() {
    return this.getTypedRuleContext(If_statementContext,0);
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.StatementContext = StatementContext;

TarsierParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TarsierParser.RULE_statement);
    try {
        this.state = 32;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 29;
            this.assignment_statement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.function_statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 31;
            this.if_statement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Assignment_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_assignment_statement;
    return this;
}

Assignment_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Assignment_statementContext.prototype.constructor = Assignment_statementContext;

Assignment_statementContext.prototype.ID = function() {
    return this.getToken(TarsierParser.ID, 0);
};

Assignment_statementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Assignment_statementContext.prototype.NEWLINE = function() {
    return this.getToken(TarsierParser.NEWLINE, 0);
};

Assignment_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitAssignment_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Assignment_statementContext = Assignment_statementContext;

TarsierParser.prototype.assignment_statement = function() {

    var localctx = new Assignment_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TarsierParser.RULE_assignment_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.match(TarsierParser.ID);
        this.state = 35;
        this.match(TarsierParser.T__0);
        this.state = 36;
        this.expression(0);
        this.state = 37;
        this.match(TarsierParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function EqIntContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqIntContext.prototype = Object.create(ExpressionContext.prototype);
EqIntContext.prototype.constructor = EqIntContext;

TarsierParser.EqIntContext = EqIntContext;

EqIntContext.prototype.INT = function() {
    return this.getToken(TarsierParser.INT, 0);
};
EqIntContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqInt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqParContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqParContext.prototype = Object.create(ExpressionContext.prototype);
EqParContext.prototype.constructor = EqParContext;

TarsierParser.EqParContext = EqParContext;

EqParContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
EqParContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqPar(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqStrContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqStrContext.prototype = Object.create(ExpressionContext.prototype);
EqStrContext.prototype.constructor = EqStrContext;

TarsierParser.EqStrContext = EqStrContext;

EqStrContext.prototype.STRING = function() {
    return this.getToken(TarsierParser.STRING, 0);
};
EqStrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqStr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqAddContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqAddContext.prototype = Object.create(ExpressionContext.prototype);
EqAddContext.prototype.constructor = EqAddContext;

TarsierParser.EqAddContext = EqAddContext;

EqAddContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqAddContext.prototype.ADD = function() {
    return this.getToken(TarsierParser.ADD, 0);
};

EqAddContext.prototype.SUB = function() {
    return this.getToken(TarsierParser.SUB, 0);
};
EqAddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqVarContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqVarContext.prototype = Object.create(ExpressionContext.prototype);
EqVarContext.prototype.constructor = EqVarContext;

TarsierParser.EqVarContext = EqVarContext;

EqVarContext.prototype.ID = function() {
    return this.getToken(TarsierParser.ID, 0);
};
EqVarContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqVar(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqMULContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.operator = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqMULContext.prototype = Object.create(ExpressionContext.prototype);
EqMULContext.prototype.constructor = EqMULContext;

TarsierParser.EqMULContext = EqMULContext;

EqMULContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqMULContext.prototype.MUL = function() {
    return this.getToken(TarsierParser.MUL, 0);
};

EqMULContext.prototype.DIV = function() {
    return this.getToken(TarsierParser.DIV, 0);
};
EqMULContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitEqMUL(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TarsierParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, TarsierParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TarsierParser.T__1:
            localctx = new EqParContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 40;
            this.match(TarsierParser.T__1);
            this.state = 41;
            this.expression(0);
            this.state = 42;
            this.match(TarsierParser.T__2);
            break;
        case TarsierParser.ID:
            localctx = new EqVarContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 44;
            this.match(TarsierParser.ID);
            break;
        case TarsierParser.INT:
            localctx = new EqIntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 45;
            this.match(TarsierParser.INT);
            break;
        case TarsierParser.STRING:
            localctx = new EqStrContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 46;
            this.match(TarsierParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 57;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 55;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new EqMULContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, TarsierParser.RULE_expression);
                    this.state = 49;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 50;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===TarsierParser.MUL || _la===TarsierParser.DIV)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 51;
                    localctx.right = this.expression(6);
                    break;

                case 2:
                    localctx = new EqAddContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, TarsierParser.RULE_expression);
                    this.state = 52;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 53;
                    localctx.operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===TarsierParser.SUB || _la===TarsierParser.ADD)) {
                        localctx.operator = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 54;
                    localctx.right = this.expression(5);
                    break;

                } 
            }
            this.state = 59;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Function_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_function_statement;
    return this;
}

Function_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_statementContext.prototype.constructor = Function_statementContext;

Function_statementContext.prototype.ID = function() {
    return this.getToken(TarsierParser.ID, 0);
};

Function_statementContext.prototype.function_list = function() {
    return this.getTypedRuleContext(Function_listContext,0);
};

Function_statementContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TarsierParser.NEWLINE);
    } else {
        return this.getToken(TarsierParser.NEWLINE, i);
    }
};


Function_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitFunction_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Function_statementContext = Function_statementContext;

TarsierParser.prototype.function_statement = function() {

    var localctx = new Function_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TarsierParser.RULE_function_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(TarsierParser.ID);
        this.state = 61;
        this.match(TarsierParser.T__1);
        this.state = 63;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TarsierParser.T__1) | (1 << TarsierParser.INT) | (1 << TarsierParser.ID) | (1 << TarsierParser.STRING))) !== 0)) {
            this.state = 62;
            this.function_list();
        }

        this.state = 65;
        this.match(TarsierParser.T__2);
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TarsierParser.NEWLINE) {
            this.state = 66;
            this.match(TarsierParser.NEWLINE);
            this.state = 71;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Function_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_function_list;
    return this;
}

Function_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Function_listContext.prototype.constructor = Function_listContext;

Function_listContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Function_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitFunction_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Function_listContext = Function_listContext;

TarsierParser.prototype.function_list = function() {

    var localctx = new Function_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TarsierParser.RULE_function_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
        this.expression(0);
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TarsierParser.T__3) {
            this.state = 73;
            this.match(TarsierParser.T__3);
            this.state = 74;
            this.expression(0);
            this.state = 79;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function If_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_if_statement;
    return this;
}

If_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_statementContext.prototype.constructor = If_statementContext;

If_statementContext.prototype.if_fragment = function() {
    return this.getTypedRuleContext(If_fragmentContext,0);
};

If_statementContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

If_statementContext.prototype.else_fragment = function() {
    return this.getTypedRuleContext(Else_fragmentContext,0);
};

If_statementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitIf_statement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.If_statementContext = If_statementContext;

TarsierParser.prototype.if_statement = function() {

    var localctx = new If_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TarsierParser.RULE_if_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.if_fragment();
        this.state = 81;
        this.code_block();
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TarsierParser.T__5) {
            this.state = 82;
            this.else_fragment();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function If_fragmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_if_fragment;
    return this;
}

If_fragmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_fragmentContext.prototype.constructor = If_fragmentContext;

If_fragmentContext.prototype.boolean_expression = function() {
    return this.getTypedRuleContext(Boolean_expressionContext,0);
};

If_fragmentContext.prototype.NEWLINE = function() {
    return this.getToken(TarsierParser.NEWLINE, 0);
};

If_fragmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitIf_fragment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.If_fragmentContext = If_fragmentContext;

TarsierParser.prototype.if_fragment = function() {

    var localctx = new If_fragmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TarsierParser.RULE_if_fragment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(TarsierParser.T__4);
        this.state = 86;
        this.boolean_expression();
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TarsierParser.NEWLINE) {
            this.state = 87;
            this.match(TarsierParser.NEWLINE);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Else_fragmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_else_fragment;
    return this;
}

Else_fragmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Else_fragmentContext.prototype.constructor = Else_fragmentContext;

Else_fragmentContext.prototype.code_block = function() {
    return this.getTypedRuleContext(Code_blockContext,0);
};

Else_fragmentContext.prototype.NEWLINE = function() {
    return this.getToken(TarsierParser.NEWLINE, 0);
};

Else_fragmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitElse_fragment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Else_fragmentContext = Else_fragmentContext;

TarsierParser.prototype.else_fragment = function() {

    var localctx = new Else_fragmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, TarsierParser.RULE_else_fragment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(TarsierParser.T__5);
        this.state = 92;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TarsierParser.NEWLINE) {
            this.state = 91;
            this.match(TarsierParser.NEWLINE);
        }

        this.state = 94;
        this.code_block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Code_blockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_code_block;
    return this;
}

Code_blockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Code_blockContext.prototype.constructor = Code_blockContext;

Code_blockContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TarsierParser.NEWLINE);
    } else {
        return this.getToken(TarsierParser.NEWLINE, i);
    }
};


Code_blockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Code_blockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitCode_block(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TarsierParser.Code_blockContext = Code_blockContext;

TarsierParser.prototype.code_block = function() {

    var localctx = new Code_blockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, TarsierParser.RULE_code_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(TarsierParser.T__6);
        this.state = 98;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TarsierParser.NEWLINE) {
            this.state = 97;
            this.match(TarsierParser.NEWLINE);
        }

        this.state = 101; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 100;
            this.statement();
            this.state = 103; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===TarsierParser.T__4 || _la===TarsierParser.ID);
        this.state = 105;
        this.match(TarsierParser.T__7);
        this.state = 106;
        this.match(TarsierParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Boolean_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TarsierParser.RULE_boolean_expression;
    return this;
}

Boolean_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Boolean_expressionContext.prototype.constructor = Boolean_expressionContext;


 
Boolean_expressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BoolLtContext(parser, ctx) {
	Boolean_expressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    Boolean_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolLtContext.prototype = Object.create(Boolean_expressionContext.prototype);
BoolLtContext.prototype.constructor = BoolLtContext;

TarsierParser.BoolLtContext = BoolLtContext;

BoolLtContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BoolLtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitBoolLt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolGtContext(parser, ctx) {
	Boolean_expressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    Boolean_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolGtContext.prototype = Object.create(Boolean_expressionContext.prototype);
BoolGtContext.prototype.constructor = BoolGtContext;

TarsierParser.BoolGtContext = BoolGtContext;

BoolGtContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BoolGtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitBoolGt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolEqContext(parser, ctx) {
	Boolean_expressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.right = null; // ExpressionContext;
    Boolean_expressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolEqContext.prototype = Object.create(Boolean_expressionContext.prototype);
BoolEqContext.prototype.constructor = BoolEqContext;

TarsierParser.BoolEqContext = BoolEqContext;

BoolEqContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BoolEqContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TarsierVisitor ) {
        return visitor.visitBoolEq(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TarsierParser.Boolean_expressionContext = Boolean_expressionContext;

TarsierParser.prototype.boolean_expression = function() {

    var localctx = new Boolean_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, TarsierParser.RULE_boolean_expression);
    try {
        this.state = 120;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BoolEqContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            localctx.left = this.expression(0);
            this.state = 109;
            this.match(TarsierParser.T__8);
            this.state = 110;
            localctx.right = this.expression(0);
            break;

        case 2:
            localctx = new BoolGtContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 112;
            localctx.left = this.expression(0);
            this.state = 113;
            this.match(TarsierParser.T__9);
            this.state = 114;
            localctx.right = this.expression(0);
            break;

        case 3:
            localctx = new BoolLtContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 116;
            localctx.left = this.expression(0);
            this.state = 117;
            this.match(TarsierParser.T__10);
            this.state = 118;
            localctx.right = this.expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


TarsierParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TarsierParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TarsierParser = TarsierParser;
