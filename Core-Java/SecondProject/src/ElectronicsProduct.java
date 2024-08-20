public class ElectronicsProduct implements ProductInterface {
    @Override
    public void createProduct() {
        System.out.println("electronic Product created");
    }

    @Override
    public void deleteProduct() {
        System.out.println("electronic Product deleted");
    }
}
