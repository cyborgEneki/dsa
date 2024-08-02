using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LongestCommonPrefix
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /**
                Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".
             */

            string[] strs =
            {
                "flower", "flow", "flight"
            };
            Console.WriteLine(LongestCommonPrefix(strs));
            Console.ReadLine();
        }

        static string LongestCommonPrefix(string[] strs)
        {
            if (strs.Length == 1) return strs[0];

            string prefix = strs[0];

            for (int i = 1; i < strs.Length; i++)
            {
                while (strs[i].IndexOf(prefix) != 0)
                {
                    prefix = prefix.Substring(0, prefix.Length - 1);

                    if (prefix.Length == 0) return "";
                }
            }

            return prefix;
        }
    }
}
