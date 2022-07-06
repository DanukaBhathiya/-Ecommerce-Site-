export class ProductDTO {
    public constructor(
        public id: string,
        public category: string,
        public name: string,
        public description: string,
        public unit_price: string,
        public image_url: string,
        // public active: string,
        public units_in_stock: string
        // public date_created: string,
        // public last_updated: string
    ){
    }
}