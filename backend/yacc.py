import ply.yacc as yacc
from game import Suit, Rank, Card, Pile, Player, Game
from lex import tokens
def term_player(p):
    'term : PLAYER'
def term_suit(p):
    'term : SUIT'
def term_rank(p):
    'term : RANK'
    
def expr_term(p):
    'expr : term'
def stmt_assign(p):
    'stmt : INDENT ID ASSIGN expr N'