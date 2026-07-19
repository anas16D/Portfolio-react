---
title: "Cache - Least Recently Used (LRU)"
date: "2026-07-19"
author: "Mohd Anas"
---

# LRU Cache

**Cache** is used by almost all applications nowadays. This is because we have too much data to store, and very less space. Retreiving everytime from the disk costs time. So we dedicate a fast memory from where we can access the data instead of going to slow disk. This fast memory is RAM for most applications but it can be a speaprate cache memory for CPU or some critical system.
There are 2 main problems with cache:
1. What to cache (since cache size is very limited)
2. When to update cache (since the actual data is on disk and can be manipulated anytime)

We will talk about an algorithm trying to solve first problem. LRU stands for `Least Recently Used`. This is an algorithm which is used for cache eviction when cache becomes full. It tells that which element should be removed from the cache when a new item has to be inserted and cache is full

## Concept/Idea
Suppose you have an array of size 5 as your cache. So you can hold five elements in the cache. Now if the sixth element is to be inserted in the array, one of the five elements need to be removed. *LRU* says that remove the element which was used most time ago, i.e. do not remove recently used, remove *least* recently used element. 

## Important terms
- *cache hit*: when an element is searched and found in the cache.
- *cache miss*: when an elemnt is searched and not found in the cache.

## Implementation

There are following assumptions/concepts to be understood while implementing LRU

- When a new item is added to the cache, it is stored as the most recently used item
- When an item is accessed, it is moved/marked as the most recently used item.
- Eviction policy comes into play only when the size/capacity of cache is full. 

Operations on cache:
- get(key): get the element from the cache 
- put(key,ele): insert the key with value as `ele` if key is not present, else update the key value.

`key` is the term by which you application will search for the value in cache. eg: `key` is id of some user, and `ele` is its data.

Now to implement this algorithm in java:
1. Array based: Take an array of objects, store the key,value of element along with timestamp of `lastUsed`. In this case, `get` and `put` both functions would be O(n) which is not desirable of a cache.
2. Linked List and Hash Map: The hash map is used so that we can easily access any element in O(1). Linked list to maintain usage order. Both `get` and `put` will take O(1) in this approach.

### let us Design it
- we create a hashmap, that stores key-value pair. get operations is `O(1)`, put operation is `O(1)`.
- But we have a limitaion that cache has a fixed size. We cannot just keep on adding new elements when arrived, we have to maintain the size of cache.
- So we need to keep track of the LRU item and/or most recently used item. 
- We can create a separate valriable that tracks the LRU element, but the problem will arise when the LRU item is removed. We will need to find the new LRU. So we need to track whole cache and arrange then in order of LRU, so that after removing 1 we can update the new LRU.
- A data structure that allows insertion, updation in `O(1)` is linked list.
- So to implement the LRU, we need hashmap to access and insert the element and linked list to track the LRU.
- We can have head pointing to the LRU, so that every time we have to reomve an element we can remove head Node. And we can insert new element/recently accessed element at tail.
-  So hashmap will have a key as integer/string and value as the `Node` element. This `Node` element will store the actual data. 

Now Suppose we have a linked list like this:

1 -> 2 -> 3 -> 4 -> 5
        

If we have to update `3` as most recently used, we need access of the previous Node also (`2` in this case). So that we can update `2` to point at `4`. But our hashmap will give reference to 3 only. Thus we need to traverse back from the Node, and hence we need d`oubly linked list` instead of simple linked list.

