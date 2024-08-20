public class PrintValue<T,V extends JustForFun> {

    T n;
    V o;

    public PrintValue(T n,V o)
    {
        this.n = n;
        this.o = o;
    }



    public void print()
    {
        System.out.println(this.n);
        System.out.println(o.getName());
    }

}
