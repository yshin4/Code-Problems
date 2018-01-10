# Sorting



## Quicksort

Best case: O(n log n)

Average case: O(n log n)

Worst case:  O(n^2)



1. Choose a pivot. 
   * Pivot can be anything, first last or random element.
2. Divide the list in two, one with elements less than the pivot and other with elements greater than the pivot.
3. Repeat for both lists until there is one element left.
4. Recursively build up from less - pivot - greater to complete a ordered list.