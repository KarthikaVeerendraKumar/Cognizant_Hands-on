package FinancialForecasting;

public class FinancialForecasting {

    // Recursive method to calculate future value
    public static double futureValue(double presentValue, double growthRate, int years) {

        // Base Case
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case
        return futureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double presentValue = 10000; // Initial investment
        double growthRate = 0.10;    // 10% annual growth
        int years = 5;

        double predictedValue = futureValue(presentValue, growthRate, years);

        System.out.println("Present Value: Rs. " + presentValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.printf("Future Value: Rs. %.2f%n" , predictedValue);
    }
}