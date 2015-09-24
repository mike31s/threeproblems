/**
 * solves the first three problems in five problems every se should solves
 * Created by mike on 9/23/2015.
 */

var testNums = [1,2,3,4];
function sumFor(nums)
{
    var total = 0;
    for (var i = 0; i<nums.length;i++)
    {
        total+=nums[i];
    }

    return total;
}

function sumWhile(nums)
{
    var total = 0;
    var i = 0;
    while(i<nums.length)
    {
        total += nums[i];
        i++;
    }
    return total;
}

function sumRecursion(nums)
{
    if(nums.length === 0)
    return 0;
    else {
        return nums[0] + sumRecursion(nums.slice(1, nums.length))
    }

}

function sumTheSimpleWay(nums)
{
    return _.reduce(nums, function(memo,num){return memo+num;},0);
}
//console.log("sum For: " + sumTheSimpleWay(testNums));
var testlist1 = [1,2,3];
var testlist2 = ['a','b','c']
function zipList(list1,list2)
{
    var resultList = [];
    for(var i = 0; i < list1.length; i++)
    {
        resultList.push(list1[i], list2[i]);
    }
    return resultList;
}

function zipListTheSimpleWay(list1,list2)
{
    return _.flatten(_.zip(list1,list2));
}
console.log("zip: " + zipListTheSimpleWay(testlist1,testlist2));

function fib()
{
    var tail = 0;
    var head = 1;
    var fiblist = [tail];

    for (var i = 0; i<99;i++)
    {
        var temphead = head;
        head = head + tail;
        tail = temphead;
        fiblist.push(head);
    }
    return fiblist;
}

console.log(":fib " + fib());