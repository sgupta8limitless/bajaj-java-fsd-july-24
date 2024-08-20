public class ProductCRUD {

    ProductInterface product ;

    public ProductCRUD(){}

    public ProductCRUD(ProductInterface product)
    {
        this.product = product;
    }

    public void setProduct(ProductInterface product)
    {
        this.product = product;
    }

    public void create()
    {
        product.createProduct();
    }




}
