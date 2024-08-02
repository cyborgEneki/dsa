using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RomanToInteger
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter roman number: ");

            Console.WriteLine(RomanToInt(Console.ReadLine().ToUpper()));

            Console.ReadLine();
        }

        static int RomanToInt(string s)
        {
            int sum = 0;
            Dictionary<string, int> twoLetter = new Dictionary<string, int>()
            {
                {"IV", 4},
                {"IX", 9},
                {"XL", 40},
                {"XC", 90},
                {"CD", 400},
                {"CM", 900}
            };
            Dictionary<string, int> oneLetter = new Dictionary<string, int>()
            {
                {"I", 1},
                {"V", 5},
                {"X", 10},
                {"L", 50},
                {"C", 100},
                {"D", 500},
                {"M", 1000}
            };

            for (int i = 0; i < s.Length; i++)
            {
                if (i < s.Length - 1)
                {
                    string doubleLetter = String.Concat(s[i], s[i + 1]);

                    if (twoLetter.TryGetValue(doubleLetter, out int val))
                    {
                        sum += val;
                        i++;
                    } else
                    {
                        sum += oneLetter[s[i].ToString()];
                    }
                } else
                {
                    sum += oneLetter[s[i].ToString()];
                }
            }

            return sum;
        }
    }
}
