---
title: "Bloom Filters"
date: "2026-02-08"
author: "Mohd Anas"
---

# Bloom Filters

**Bloom filters** are space-efficient probablistic data structures used to test whether an element is a member of a set.
So bloom filter is 
- A data structure (like array, linked list, tree etc)
- Used to check or test if an element is present in a data or not 
- Probabilistic, that is this DS do not gurantee that result is correct

So it works like this
- You arrange/store the data in this structure (insert)
- You ask if element `x` is present in the data or not (read/find)
  
One more important thing about this DS
**Bloom filter**: No means *'No'*, Yes means *'Maybe'*.
This means, if find query in bloomfilter says, `element is found`, it means *probably* element is there. But if bloomfilter's find query says,  `element is not found`, it means element is `definitely` not there.

This was, *What is BloomFilter*.

Now, How to implement bloomfilter

## Approach/Design/Concept/Idea

The idea of building bloomfilter is simple: **Hash Functions**
We are conenrned here to make a DS, that *checks* if the element is present or not. We do not concern with the the element itself.

### Create a simple BloomFilter
Consider you have 100 elements.
Steps
- Create an array of size 100 (the size depends on you and it is a trade off) and initialise to 0
- Pass all 100 elements into hash function, do the modulo 100
- You will get a number between 0 and 100, flip the bit of that element in our array to 1 from 0
- Your bloom filter is ready
- Now, to check if an element is present in the original data set of 100
  - Do the hash and modulo, you will get the index
  - find the value of array at this index
  - if the bit(array value) is 0, element is *DEFINITELY* not there
  - if the bit(array value) is 1, element *MAYBE* there
  - *maybe* because, the bit could be flipped to 1 by some other element as hash fucntion may produce collision
  
This was the simplest way you can create a Bloom Filter.
Although this was naive, but it should be enough to create the idea of bloom filter.

Some important points.
- Although have taken the array size same as data size. We are not wasting much space as we storing just 1 bit.
- Hash functions work on a many-to-one basis, meaning that multiple elements can have the same hash value. This is why there is possibility of false positive.
- To reduce the chance of false positives or minimize the probability, we need a big array. So it is a trade off between accurace and space. Array of same size is very good balance for a medium sized data.
- Bloom Filter does not support removing the element (no delte operation)
- 
