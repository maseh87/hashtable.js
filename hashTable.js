/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // collison will happen here
    storage[index] = storage[index] || [];
    for(var i = 0; i < storage[index].length; i++) {
      if(storage[index][i][0] === key) {
        storage[index][i][1] = value;
        return;
      }
    }
    storage[index].push([key, value]);
  };

  result.retrieve = function(key){
    var lookup = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[lookup]) {
      for(var i = 0; i < storage[lookup].length; i++) {
        if(storage[lookup][i][0] === key) {
          return storage[lookup][i][1];
        }
      }
    }
  };

  result.remove = function(key){
    var find = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[find]) {
      for(var i = 0; i < storage[find].length; i++) {
        if(storage[find][i][0] === key) {

        }
      }
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
