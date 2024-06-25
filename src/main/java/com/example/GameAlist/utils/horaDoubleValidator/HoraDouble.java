package com.example.GameAlist.utils.horaDoubleValidator;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = HoraDoubleValidator.class)
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface HoraDouble {
    String message() default "Hora double inválida (formato: Hora.minuto, com minuto indo até 59)";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}