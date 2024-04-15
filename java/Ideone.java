/* package whatever; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Ideone
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Integer n;
		Scanner myObj = new Scanner(System.in);
		n =  myObj.nextInt();
		ArrayList<Integer> arr1 = new ArrayList<Integer>(n);
		 for (int i = 1; i <= n; i++) {
            arr1.add(((i+1)%3)*7 - 3*i*i + 18*i);
        }
        
         for (int i = 0; i <n; i++) {
            System.out.print(arr1.get(i) + " ");
        }
           System.out.print("\n");

        Collections.sort(arr1);
        
        for (int i = 0; i <n; i++) {
            System.out.print(arr1.get(i) + " ");
        }
        
	}

    HashMap<String, Integer> map = new HashMap<>();
 
    // Adding elements to the Map
    // using standard put() method
    map.put("vishal", 10);
    map.put("sachin", 30);
    map.put("vaibhav", 20);

    // Print size and content of the Map
    System.out.println("Size of map is:- "
                       + map.size());

    // Printing elements in object of Map
    System.out.println(map);

    // Checking if a key is present and if
    // present, print value by passing
    // random element
    if (map.containsKey("vishal")) {

        // Mapping
        Integer a = map.get("vishal");

        // Printing value for the corresponding key
        System.out.println("value for key"
                           + " \"vishal\" is:- " + a);
    }
    
    
}