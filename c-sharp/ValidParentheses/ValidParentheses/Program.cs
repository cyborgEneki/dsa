using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ValidParentheses
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /**
             Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

        An input string is valid if:

        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        Every close bracket has a corresponding open bracket of the same type.
            */
            Console.WriteLine(ValidParentheses("()[]{}"));
            Console.ReadLine();
        }

        static bool ValidParentheses(string s)
        {
            if (s.Length % 2 != 0) return false;
            if (s.Length == 1) return true;

            List<char> openingBrackets = new List<char>() { };

            for (int i = 0; i < s.Length; i++)
            {
                char current = s[i];

                if (current == '{' || current == '[' || current == '(')
                {
                    openingBrackets.Add(current);
                }
                else
                {
                    int totalOpeningBrackets = openingBrackets.Count();

                    if (totalOpeningBrackets > 0)
                    {
                        char lastItem = openingBrackets[totalOpeningBrackets - 1];

                        if ((lastItem == '{' && current == '}') || (lastItem == '[' && current == ']') || (lastItem == '(' && current == ')'))
                        {
                            openingBrackets.RemoveAt(totalOpeningBrackets - 1);

                            continue;
                        }
                        else return false;
                    }
                    else return false;
                }
            }

            if (openingBrackets.Count() == 0) return true;

            return false;
        }
    }
}
