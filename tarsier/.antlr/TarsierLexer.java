// Generated from /Users/deepanshululla/mycode/dsl/antlr4_tassier/Tarsier_self/tarsier/Tarsier.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TarsierLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, INT=12, ID=13, MUL=14, DIV=15, SUB=16, ADD=17, STRING=18, 
		COMMENT=19, NEWLINE=20, WS=21;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "INT", "ID", "MUL", "DIV", "SUB", "ADD", "STRING", "COMMENT", 
		"NEWLINE", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "':'", "'('", "')'", "','", "'if'", "'else'", "'{'", "'}'", "'='", 
		"'>'", "'<'", null, null, "'*'", "'/'", "'-'", "'+'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		"INT", "ID", "MUL", "DIV", "SUB", "ADD", "STRING", "COMMENT", "NEWLINE", 
		"WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TarsierLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Tarsier.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\27\u0082\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\3\2\3\2\3\3\3\3\3\4\3\4"+
		"\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13"+
		"\3\13\3\f\3\f\3\r\5\rI\n\r\3\r\6\rL\n\r\r\r\16\rM\3\16\5\16Q\n\16\3\16"+
		"\7\16T\n\16\f\16\16\16W\13\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22"+
		"\3\23\3\23\7\23c\n\23\f\23\16\23f\13\23\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\7\24n\n\24\f\24\16\24q\13\24\3\24\3\24\3\24\3\24\3\25\6\25x\n\25\r\25"+
		"\16\25y\3\26\6\26}\n\26\r\26\16\26~\3\26\3\26\4do\2\27\3\3\5\4\7\5\t\6"+
		"\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24"+
		"\'\25)\26+\27\3\2\7\3\2\62;\4\2C\\c|\5\2//C\\c|\4\2\f\f\17\17\4\2\13\13"+
		"\"\"\2\u0088\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2"+
		"\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2"+
		"\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2"+
		"\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\3-\3\2\2"+
		"\2\5/\3\2\2\2\7\61\3\2\2\2\t\63\3\2\2\2\13\65\3\2\2\2\r8\3\2\2\2\17=\3"+
		"\2\2\2\21?\3\2\2\2\23A\3\2\2\2\25C\3\2\2\2\27E\3\2\2\2\31H\3\2\2\2\33"+
		"P\3\2\2\2\35X\3\2\2\2\37Z\3\2\2\2!\\\3\2\2\2#^\3\2\2\2%`\3\2\2\2\'i\3"+
		"\2\2\2)w\3\2\2\2+|\3\2\2\2-.\7<\2\2.\4\3\2\2\2/\60\7*\2\2\60\6\3\2\2\2"+
		"\61\62\7+\2\2\62\b\3\2\2\2\63\64\7.\2\2\64\n\3\2\2\2\65\66\7k\2\2\66\67"+
		"\7h\2\2\67\f\3\2\2\289\7g\2\29:\7n\2\2:;\7u\2\2;<\7g\2\2<\16\3\2\2\2="+
		">\7}\2\2>\20\3\2\2\2?@\7\177\2\2@\22\3\2\2\2AB\7?\2\2B\24\3\2\2\2CD\7"+
		"@\2\2D\26\3\2\2\2EF\7>\2\2F\30\3\2\2\2GI\7/\2\2HG\3\2\2\2HI\3\2\2\2IK"+
		"\3\2\2\2JL\t\2\2\2KJ\3\2\2\2LM\3\2\2\2MK\3\2\2\2MN\3\2\2\2N\32\3\2\2\2"+
		"OQ\t\3\2\2PO\3\2\2\2QU\3\2\2\2RT\t\4\2\2SR\3\2\2\2TW\3\2\2\2US\3\2\2\2"+
		"UV\3\2\2\2V\34\3\2\2\2WU\3\2\2\2XY\7,\2\2Y\36\3\2\2\2Z[\7\61\2\2[ \3\2"+
		"\2\2\\]\7/\2\2]\"\3\2\2\2^_\7-\2\2_$\3\2\2\2`d\7$\2\2ac\13\2\2\2ba\3\2"+
		"\2\2cf\3\2\2\2de\3\2\2\2db\3\2\2\2eg\3\2\2\2fd\3\2\2\2gh\7$\2\2h&\3\2"+
		"\2\2ij\7\61\2\2jk\7\61\2\2ko\3\2\2\2ln\13\2\2\2ml\3\2\2\2nq\3\2\2\2op"+
		"\3\2\2\2om\3\2\2\2pr\3\2\2\2qo\3\2\2\2rs\5)\25\2st\3\2\2\2tu\b\24\2\2"+
		"u(\3\2\2\2vx\t\5\2\2wv\3\2\2\2xy\3\2\2\2yw\3\2\2\2yz\3\2\2\2z*\3\2\2\2"+
		"{}\t\6\2\2|{\3\2\2\2}~\3\2\2\2~|\3\2\2\2~\177\3\2\2\2\177\u0080\3\2\2"+
		"\2\u0080\u0081\b\26\2\2\u0081,\3\2\2\2\f\2HMPSUdoy~\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}