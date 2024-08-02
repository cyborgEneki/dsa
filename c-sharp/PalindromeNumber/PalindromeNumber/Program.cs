using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PalindromeNumber
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter number: ");
            bool success = int.TryParse(Console.ReadLine(), out int userNumber);

            if (success)
            {
                bool isPalindrome = IsPalindrome(userNumber);

                if (isPalindrome)
                {
                    Console.WriteLine($"{userNumber} is a palindrome.");
                }
                else
                {
                    Console.WriteLine($"{userNumber} is not a palindrome.");
                }
            }
            else
            {
                Console.WriteLine("Only number values are allowed.");
            }

            Console.ReadLine();
        }

        static bool IsPalindrome(int x)
        {
            /**
             * Notes: 
             * - Input could be -ve
             * Approach:
             * If -ve return immediately
             * Convert to str
             * Reverse str and add to separate variable
             * Compare and return
             */

            if (x < 0) return false;

            string convertedInput = x.ToString();

            char[] stringArray = convertedInput.ToCharArray();
            Array.Reverse(stringArray);
            string reversedInput = new string(stringArray);

            return reversedInput.Equals(convertedInput);
        }
    }
}
