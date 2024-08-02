using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwoSum
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] nums = { 3, 2, 7, 11, 15 };
            int target = 9;

            int[] result = TwoSum(nums, target);

            foreach (int item in result)
            {
                Console.WriteLine(item);
            }

            Console.ReadLine();
        }

        static int[] TwoSum(int[] nums, int target)
        {
            /*
             * Approach
               - Create a complements map
               - Loop through each item
               - Find the complement
               -Is complement present in the map? 
                   Y: return the key of the map and current
                   N: continue loop
            */

            List<int> complements = new List<int>();
            int[] result = new int[2];

            for (int i = 0; i < nums.Length; i++)
            {
                complements.Add(nums[i]);
            }

            for (int i = 0; i < nums.Length; i++)
            {
                int complement = target - nums[i];
                int complementIndex = complements.IndexOf(complement);

                if (complementIndex != -1 && i != complementIndex)
                {
                    result = new int[] { i, complementIndex };
                }
            }

            return result;
        }
    }
}
