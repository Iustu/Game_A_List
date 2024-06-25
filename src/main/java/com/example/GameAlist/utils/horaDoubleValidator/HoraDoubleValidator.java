package com.example.GameAlist.utils.horaDoubleValidator;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class HoraDoubleValidator implements
        ConstraintValidator<HoraDouble, Double> {

    @Override
    public void initialize(HoraDouble constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Double d, ConstraintValidatorContext constraintValidatorContext) {
        if(d < 0.01) return false;

        String decimalString = d.toString().split("\\.")[1];

        if(decimalString.length()>2) return false;
        if(decimalString.length() == 1) decimalString+="0";

        int decimalPart = Integer.parseInt(decimalString);

        return decimalPart <= 59;
    }
}
