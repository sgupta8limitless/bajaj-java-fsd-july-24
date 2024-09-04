package org.example;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
@Aspect
public class GeneralAspect {


//    to apply before on a single function

//    @Before("execution(* org.example.ProductService.createProduct(..))")
//    public void logBeforeFun(JoinPoint joinPoint)
//    {
//        System.out.println("Before Invoking "+joinPoint.getSignature());
//        Object[] args = joinPoint.getArgs();
//
//        Arrays.stream(args).forEach(p-> {
//            System.out.println(p);
//        });
//
//        System.out.println("Logging before");
//
//    }


    //    to apply before on a single function

//    @After("execution(* org.example.ProductService.createProduct(..))")
//    public void logAfterFun(JoinPoint joinPoint)
//    {
//        System.out.println("After Invoking"+joinPoint.getSignature());
//        Object[] args = joinPoint.getArgs();
//
//        Arrays.stream(args).forEach(p-> {
//            System.out.println(p);
//        });
//
//        System.out.println("Logging After");
//
//    }


//    to apply aop on all functions of a class

//    @Before("execution(* org.example.*.*(..))")
//    public void callBeforeAll(JoinPoint joinPoint)
//    {
//        System.out.println("Invoke before "+joinPoint.getSignature());
//    }



//    to access return data from a function

//    @Pointcut("execution(* org.example.ProductService.get*(..))")
//    public void getPointCut(){}
//
//    @AfterReturning(value = "getPointCut()",returning = "code")
//    public void afterReturnGet(JoinPoint joinPoint,String code)
//    {
//        System.out.println("After Invoking R"+joinPoint.getSignature());
//        System.out.println("Got the Code as "+code);
//    }
//
//    @AfterThrowing(value = "getPointCut()", throwing= "e")
//    public void afterReturnGet(JoinPoint joinPoint,RuntimeException e)
//    {
//        System.out.println("After Invoking T"+joinPoint.getSignature());
//        System.out.println("Got the Code as "+e.getMessage());
//    }



//    around advice

//    @Around("execution(* org.example.ProductService.doSomething(..))")
//    public void logAroundFun(ProceedingJoinPoint joinPoint) throws Throwable {
//
//        System.out.println("Before Invoke "+joinPoint.getSignature());
//
//        int d = (int)joinPoint.getArgs()[0];
//        if(d>5)
//        {
//            System.out.println("stooping method execution");
//            return ;
//        }
//        Object proceed = joinPoint.proceed();
//        System.out.println(proceed);
//        System.out.println("After Invoke "+joinPoint.getSignature());
//
////        return proceed;
//    }



    @Around("@annotation(org.example.Admin)")
    public void onlyAdmin(ProceedingJoinPoint joinPoint) throws Throwable {


        System.out.println("Invoked Before Admin "+joinPoint.getSignature());

//        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
//
//        Admin admin = methodSignature.getMethod().getAnnotation(Admin.class);
//
//        System.out.println(admin.dummy());



        joinPoint.proceed();
        System.out.println("After Before Admin "+joinPoint.getSignature());
    }








}
