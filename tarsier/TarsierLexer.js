// Generated from Tarsier.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0017\u0082\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0005",
    "\rI\n\r\u0003\r\u0006\rL\n\r\r\r\u000e\rM\u0003\u000e\u0005\u000eQ\n",
    "\u000e\u0003\u000e\u0007\u000eT\n\u000e\f\u000e\u000e\u000eW\u000b\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0007\u0013c\n\u0013",
    "\f\u0013\u000e\u0013f\u000b\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014n\n\u0014\f\u0014\u000e",
    "\u0014q\u000b\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0006\u0015x\n\u0015\r\u0015\u000e\u0015y\u0003\u0016\u0006",
    "\u0016}\n\u0016\r\u0016\u000e\u0016~\u0003\u0016\u0003\u0016\u0004d",
    "o\u0002\u0017\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017",
    "\u0003\u0002\u0007\u0003\u00022;\u0004\u0002C\\c|\u0005\u0002//C\\c",
    "|\u0004\u0002\f\f\u000f\u000f\u0004\u0002\u000b\u000b\"\"\u0002\u0088",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003",
    "\u0002\u0002\u0002\u0003-\u0003\u0002\u0002\u0002\u0005/\u0003\u0002",
    "\u0002\u0002\u00071\u0003\u0002\u0002\u0002\t3\u0003\u0002\u0002\u0002",
    "\u000b5\u0003\u0002\u0002\u0002\r8\u0003\u0002\u0002\u0002\u000f=\u0003",
    "\u0002\u0002\u0002\u0011?\u0003\u0002\u0002\u0002\u0013A\u0003\u0002",
    "\u0002\u0002\u0015C\u0003\u0002\u0002\u0002\u0017E\u0003\u0002\u0002",
    "\u0002\u0019H\u0003\u0002\u0002\u0002\u001bP\u0003\u0002\u0002\u0002",
    "\u001dX\u0003\u0002\u0002\u0002\u001fZ\u0003\u0002\u0002\u0002!\\\u0003",
    "\u0002\u0002\u0002#^\u0003\u0002\u0002\u0002%`\u0003\u0002\u0002\u0002",
    "\'i\u0003\u0002\u0002\u0002)w\u0003\u0002\u0002\u0002+|\u0003\u0002",
    "\u0002\u0002-.\u0007<\u0002\u0002.\u0004\u0003\u0002\u0002\u0002/0\u0007",
    "*\u0002\u00020\u0006\u0003\u0002\u0002\u000212\u0007+\u0002\u00022\b",
    "\u0003\u0002\u0002\u000234\u0007.\u0002\u00024\n\u0003\u0002\u0002\u0002",
    "56\u0007k\u0002\u000267\u0007h\u0002\u00027\f\u0003\u0002\u0002\u0002",
    "89\u0007g\u0002\u00029:\u0007n\u0002\u0002:;\u0007u\u0002\u0002;<\u0007",
    "g\u0002\u0002<\u000e\u0003\u0002\u0002\u0002=>\u0007}\u0002\u0002>\u0010",
    "\u0003\u0002\u0002\u0002?@\u0007\u007f\u0002\u0002@\u0012\u0003\u0002",
    "\u0002\u0002AB\u0007?\u0002\u0002B\u0014\u0003\u0002\u0002\u0002CD\u0007",
    "@\u0002\u0002D\u0016\u0003\u0002\u0002\u0002EF\u0007>\u0002\u0002F\u0018",
    "\u0003\u0002\u0002\u0002GI\u0007/\u0002\u0002HG\u0003\u0002\u0002\u0002",
    "HI\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002\u0002JL\t\u0002\u0002",
    "\u0002KJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MK\u0003\u0002",
    "\u0002\u0002MN\u0003\u0002\u0002\u0002N\u001a\u0003\u0002\u0002\u0002",
    "OQ\t\u0003\u0002\u0002PO\u0003\u0002\u0002\u0002QU\u0003\u0002\u0002",
    "\u0002RT\t\u0004\u0002\u0002SR\u0003\u0002\u0002\u0002TW\u0003\u0002",
    "\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002V\u001c",
    "\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002XY\u0007,\u0002\u0002",
    "Y\u001e\u0003\u0002\u0002\u0002Z[\u00071\u0002\u0002[ \u0003\u0002\u0002",
    "\u0002\\]\u0007/\u0002\u0002]\"\u0003\u0002\u0002\u0002^_\u0007-\u0002",
    "\u0002_$\u0003\u0002\u0002\u0002`d\u0007$\u0002\u0002ac\u000b\u0002",
    "\u0002\u0002ba\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002de\u0003",
    "\u0002\u0002\u0002db\u0003\u0002\u0002\u0002eg\u0003\u0002\u0002\u0002",
    "fd\u0003\u0002\u0002\u0002gh\u0007$\u0002\u0002h&\u0003\u0002\u0002",
    "\u0002ij\u00071\u0002\u0002jk\u00071\u0002\u0002ko\u0003\u0002\u0002",
    "\u0002ln\u000b\u0002\u0002\u0002ml\u0003\u0002\u0002\u0002nq\u0003\u0002",
    "\u0002\u0002op\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002pr\u0003",
    "\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rs\u0005)\u0015\u0002st",
    "\u0003\u0002\u0002\u0002tu\b\u0014\u0002\u0002u(\u0003\u0002\u0002\u0002",
    "vx\t\u0005\u0002\u0002wv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002",
    "\u0002yw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z*\u0003\u0002",
    "\u0002\u0002{}\t\u0006\u0002\u0002|{\u0003\u0002\u0002\u0002}~\u0003",
    "\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\b\u0016\u0002",
    "\u0002\u0081,\u0003\u0002\u0002\u0002\f\u0002HMPSUdoy~\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function TarsierLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

TarsierLexer.prototype = Object.create(antlr4.Lexer.prototype);
TarsierLexer.prototype.constructor = TarsierLexer;

Object.defineProperty(TarsierLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

TarsierLexer.EOF = antlr4.Token.EOF;
TarsierLexer.T__0 = 1;
TarsierLexer.T__1 = 2;
TarsierLexer.T__2 = 3;
TarsierLexer.T__3 = 4;
TarsierLexer.T__4 = 5;
TarsierLexer.T__5 = 6;
TarsierLexer.T__6 = 7;
TarsierLexer.T__7 = 8;
TarsierLexer.T__8 = 9;
TarsierLexer.T__9 = 10;
TarsierLexer.T__10 = 11;
TarsierLexer.INT = 12;
TarsierLexer.ID = 13;
TarsierLexer.MUL = 14;
TarsierLexer.DIV = 15;
TarsierLexer.SUB = 16;
TarsierLexer.ADD = 17;
TarsierLexer.STRING = 18;
TarsierLexer.COMMENT = 19;
TarsierLexer.NEWLINE = 20;
TarsierLexer.WS = 21;

TarsierLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

TarsierLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

TarsierLexer.prototype.literalNames = [ null, "':'", "'('", "')'", "','", 
                                        "'if'", "'else'", "'{'", "'}'", 
                                        "'='", "'>'", "'<'", null, null, 
                                        "'*'", "'/'", "'-'", "'+'" ];

TarsierLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                         null, null, null, null, null, null, 
                                         "INT", "ID", "MUL", "DIV", "SUB", 
                                         "ADD", "STRING", "COMMENT", "NEWLINE", 
                                         "WS" ];

TarsierLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                     "T__5", "T__6", "T__7", "T__8", "T__9", 
                                     "T__10", "INT", "ID", "MUL", "DIV", 
                                     "SUB", "ADD", "STRING", "COMMENT", 
                                     "NEWLINE", "WS" ];

TarsierLexer.prototype.grammarFileName = "Tarsier.g4";



exports.TarsierLexer = TarsierLexer;

