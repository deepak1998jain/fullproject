#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main () {

    int adj[5][5] = {{0,1,1,1,0},{0,1,1,0,1},{1,0,1,1,0},{1,0,1,1,0}};
    vector<int> v {1,2,3,5};
    for(int i=0; i<5; i++) {
        for(int j=0; j<5; j++) {
            cout<<adj[i][j]<<" ";
        }
        cout<<endl;
    }

    return 0;
}