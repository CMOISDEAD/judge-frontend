export const langs = {
  java: {
    name: "java",
    version: "last",
    base: `class Main {
  public static boolean isPalindrome(int x) {
    // code here;
  }
  public static void main(String[] args) {
    System.out.println(isPalindrome(121));
  }
}`,
  },
  python: {
    name: "python",
    version: "last",
    base: `print("!Hello, World!")`,
  },
  c: {
    name: "c",
    version: "last",
    base: `#include <stdio.h>
int main() {
  printf("Hello, World!");
  return 0;
}`,
  },
  cpp: {
    name: "",
    version: "last",
    base: `#include <iostream>
int main() {
  std::cout << "Hello World!";
  return 0;
}`,
  },
  lua: {
    name: "",
    version: "last",
    base: `print("hello world")`,
  },
};

export const langList = ["java", "python"];
