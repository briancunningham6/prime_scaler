
package main

import (
    "fmt"
    "math"
    "os"
    "strconv"
)

func calculatePrime(n int) int {
    if n <= 0 {
        return 0
    }
    
    count := 0
    num := 2
    
    for count < n {
        if isPrime(num) {
            count++
            if count == n {
                return num
            }
        }
        num++
    }
    return num - 1
}

func isPrime(n int) bool {
    if n <= 1 {
        return false
    }
    if n <= 3 {
        return true
    }
    if n%2 == 0 || n%3 == 0 {
        return false
    }
    
    for i := 5; i <= int(math.Sqrt(float64(n))); i += 6 {
        if n%i == 0 || n%(i+2) == 0 {
            return false
        }
    }
    return true
}

func main() {
    if len(os.Args) != 2 {
        fmt.Println("Usage: go run prime.go <n>")
        os.Exit(1)
    }
    
    n, err := strconv.Atoi(os.Args[1])
    if err != nil {
        fmt.Println("Error:", err)
        os.Exit(1)
    }
    
    result := calculatePrime(n)
    fmt.Print(result)
}
