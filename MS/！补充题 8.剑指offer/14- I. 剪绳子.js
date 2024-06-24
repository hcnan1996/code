/*
剑指 Offer 14- I. 剪绳子
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
每段绳子的长度记为 k[0],k[1]...k[m-1] 。
请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
*/

/**
 * dp[i]表示的是长度为i的绳子能得到的最大乘积
 * i 可以拆分成 j + (i - j)
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let dp = new Array(n + 1).fill(1) //dp[1] = 1和dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
    }
  }
  return dp[n]
}

/*
数学推导
当 n>3n>3 时，求 nn 除以 33 的 整数部分 aa 和 余数部分 bb （即 n = 3a + bn=3a+b ），并分为以下三种情况：
当 b = 0b=0 时，直接返回 3^a3 
a
 ；
当 b = 1b=1 时，要将一个 1 + 31+3 转换为 2+22+2，因此返回 3^{a-1} \times 43 
a−1
 ×4；
当 b = 2b=2 时，返回 3^a \times 23 
a
 ×2。
*/
