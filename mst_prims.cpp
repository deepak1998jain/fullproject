#include <iostream>
#include <bits/stdc++.h>
#include <queue>
using namespace std;

class Solution
{
	public:
	//Function to find sum of weights of edges of the Minimum Spanning Tree.
    int spanningTree(int V, vector<vector<int>> adj[])
    { 
       int n = V;    
       int spanTreeLen = 0;
       priority_queue< pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
       vector<bool> vis(1000006,0);
       pq.push({0,0});
       while(!pq.empty()) {
         auto it = pq.top();
         pq.pop();
         int wt = it.first;
         int node = it.second;
         if(vis[node]) continue;
         vis[node]=1;
         spanTreeLen+=wt;
         for(auto u: adj[node]) {
             int adj_node = u[0];
             int edgewt = u[1];
             pq.push(make_pair(edgewt,adj_node));
         }
       }
       return spanTreeLen;
    }
};

int main() {
    int t;
    cin>>t;
    while(t--) {
        int V,E;
        cin>>V>>E;
        vector<vector<int>> adj[V];
        int i=E;
        while(i--) {
            int u,v,w;
            cin>>u>>v>>w;
            vector<int> t1,t2;
            t1.push_back(v);
            t1.push_back(w);
            adj[u].push_back(t1);
            t1.push_back(v);
            t1.push_back(w);
            adj[v].push_back(t2);

        }
        Solution obj;
        cout<<obj.spanningTree(V,adj);
    }
    return 0;
}