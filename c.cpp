/*------ॐ----------*/

#include <bits/stdc++.h>
using namespace std;

// ordered set implementation
// #include <ext/pb_ds/assoc_container.hpp>
// #include <ext/pb_ds/tree_policy.hpp>
// using namespace __gnu_pbds;
// template <class T> using pbds = tree<T, null_type, less<T>, rb_tree_tag, tree_order_statistics_node_update>;
// find_by_order() : returns iterator pointing to kth element (0-based) in ordered set
// order_of_key() : returns no. of elements strictly smaller than x in ordered set
/*---READ---(IMAGIN/DRAW)---(TC-SC)----(APP/DS-A)-----*/

/*--------------------------------------------->SNIPPS<----------------------------------------------------*/
/*(f,fa) (tree) (triebit, triechar) (seg) (pbds) (kmp)*/

/*--------------------------------------------->TIPSSS<-----------------------------------------------------*/
/*
stack -> <<<?>>>,ii dd(d rev i), astriod [[(DIR)]], {{next/prev}} greater, histogram, BACK-TRACK
trie => bit when xor for dynamic/many range AND string when work on all/store all requ
seg-tree=> (sum/min,max,range-update) https://www.geeksforgeeks.org/segment-tree-meaning-in-dsa/
pbds => insert x, kth element, no of elements less than k, (findbyorder) (orderofkey) (ordered set)

set/multiset/pq - can use greater<int> for lower bound / neg sign
set - find x count ^^ 
kmp algo - pre-suf ix matching algo (nlog(n)), stringstream ssr(str); 
*/


typedef long long ll;
typedef unsigned long long ull;
typedef long double lld;

# define vi vector<int>
# define vl vector<ll>
# define vc vector<char>
# define vvc vector<vector<char>>
# define vvi vector<vector<int>>
# define vvl vector<vector<ll>>
# define pii pair<int,int>
# define vpii vector<pii>
# define vvpii vector<vector<pii>>

#define ff first
#define ss second
#define yup cout<<"YES"<<endl;
#define nope cout<<"NO"<<endl;
#define pb push_back
#define pp pop_back
#define all(x) (x).begin(),(x).end()
#define endl '\n'
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define pout(x,e) cout<<fixed<<setprecision(e)<<x<<endl;
#define FOR(i,s,e,j) for(int i=s; i<e; i+=j)
#define sz(x) (x).size()
// Debug template begins------------------------------------------------------------------------------------------------------------------
#ifndef ONLINE_JUDGE
#define debug(x)cerr << #x << " " ;_print(x);cerr << endl;
void _print(ll t) { cerr << t; }
void _print(int t) { cerr << t; }
void _print(string t) { cerr << t; }
void _print(char t) { cerr << t; }
void _print(lld t) { cerr << t; }
void _print(double t) { cerr << t; }
void _print(ull t) { cerr << t; }
template <class T, class V> void _print(pair<T, V> p);
template <class T> void _print(vector<T> v);
template <class T> void _print(set<T> v);
template <class T> void _print(unordered_set<T> v);
template <class T, class V> void _print(map<T, V> v);
template <class T, class V> void _print(unordered_map<T, V> v);
template <class T> void _print(multiset<T> v);
template <class T, class V> void _print(pair<T, V> p){cerr << "{";_print(p.first);cerr << ",";_print(p.second);cerr << "}";}
template <class T> void _print(vector<T> v){cerr << "[ ";for (T i : v){_print(i);cerr << " ";}cerr << "]";}
template <class T> void _print(set<T> v){cerr << "[ ";for (T i : v){_print(i);cerr << " ";}cerr << "]";}
template <class T> void _print(unordered_set<T> v){cerr << "[ ";for (T i : v){_print(i);cerr << " ";}cerr << "]";}
template <class T> void _print(multiset<T> v){cerr << "[ ";for (T i : v){_print(i);cerr << " ";}cerr << "]";}
template <class T, class V> void _print(map<T, V> v){cerr << "[ ";for (auto i : v){_print(i);cerr << " ";}cerr << "]";}
template <class T, class V> void _print(unordered_map<T, V> v){cerr << "[ ";for (auto i : v){_print(i);cerr << " ";}cerr << "]";}
#endif
// Debug template ends--------------------------------------------------------------------------------------------------------------------

void solve()
{
}

int main()
{
    fast_io

#ifndef ONLINE_JUDGE

    freopen("Error.txt", "w", stderr);

#endif

    int t=1;
    cin >> t;
    while (t--)
    {
        solve();
        cout << "\n";
    }
    return 0;
}