#include <iostream>
#include <bits/stdc++.h>
#include <queue>
using namespace std;
vector<int> shortestPath(int V, int E, vector<vector<int> > edges) {
    vector<int> res;
    vector<pair<int,int> > adj[V+1];
    
    for(auto it : edges) {
        adj[it[0]].push_back(make_pair(it[1],it[2]));
        adj[it[1]].push_back(make_pair(it[0],it[2]));

    }
    
    priority_queue<pair<int,int>, vector<pair<int,int> >, greater<pair<int,int> > > pq; //dist,node
    int dist[V+1];
    for(int i=0;i<=V;i++) {
        dist[i] = INT_MAX;
    }
    
    int par[V+1];
    for(int i=0;i<=V;i++) {
        par[i] = i;
    }
    pq.push(make_pair(0,1));
    dist[1] = 0;	
    while(!pq.empty()) {
        auto u = pq.top();
        pq.pop();
        int distance = u.first;
        int node = u.second;
        for(auto nb:adj[node]) {
        	int destnode = nb.first;
        	int wt = nb.second;
            if(dist[destnode]>dist[node] + wt) {
            dist[destnode] = dist[node] + wt;
            pq.push(make_pair(dist[destnode],destnode));
            par[destnode] = node;
            }
        }
    }
    int des = V;
    while(par[des]!=des) {
        res.push_back(des);
        des = par[des];
    } 
    res.push_back(1);

    reverse(res.begin(),res.end());

    return res;
    
}
int main() {
    int V = 5, E = 6;
    vector<vector<int> > edges = {{1, 2, 2}, {2, 5, 5}, {2, 3, 4}, {1, 4, 1}, {4, 3, 3}, 
    {3, 5, 1}};
    vector<int> path = shortestPath(V, E, edges);

    for (int i = 0; i < path.size(); i++)
    {
        cout << path[i] << " ";
    }


    cout << endl;
    return 0;
}