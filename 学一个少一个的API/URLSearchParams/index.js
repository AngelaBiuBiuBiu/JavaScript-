// URLSearchParams定义了一些实用的方法来处理URL的查询字符串
// URLSearchParams.toString()：返回搜索参数组成的字符串，可以直接使用在URL上
var searchString = "user=angela&hobby=singing&hobby=eating"
var searchParams = new URLSearchParams(searchString)

for (const p of searchParams.entries()) {
    console.log(p)
}

searchParams.has('hobby')             // true
searchParams.get('hobby')             // singing
searchParams.getAll('hobby')          // ['singing', 'eating']
searchParams.get('test')              // null
searchParams.append('age', 23)        // undefined
searchParams.toString()               // user=angela&hobby=singing&hobby=eating&age=23
searchParams.set('test', 'test')      // undefined
searchParams.toString()               // user=angela&hobby=singing&hobby=eating&age=23&test=test
searchParams.delete('test')           // undefined
searchParams.toString()               // user=angela&hobby=singing&hobby=eating&age=23



// URLSearchParams构造函数不会解析完整URL，但是如果字符串起始位置有？的话，会被去除。
var completeUrlString = 'http://example.com/search?query=yes'
var params1 = new URLSearchParams(completeUrlString)
params1.has('query')                               // false
params1.has('http://example.com/search?query')     //true
params1.get('query')                               // null
params1.get('http://example.com/search?query')     //yes


var paramString = '?query=value'
var params2 = new URLSearchParams(paramString)
params2.has('query')                               //true


var url = new URL('http://example.com/search?query=yes')
var param3 = new URLSearchParams(url.search)
param3.has('query')                                //true