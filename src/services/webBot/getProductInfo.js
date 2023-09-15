async function getProductInfo(sku) {
    try {
        let res = await fetch(`https://www.newegg.com/product/api/MoreBuyingOptions?ParentItem=${sku}&FilterBy=&FirstCall=true&PageNum=1&PageSize=1`);
        let dataJson = await res.json();
        if (dataJson.ItemInfo == null) {
            res = await fetch(`https://www.newegg.com/product/api/ProductRealtime?ItemNumber=${sku}`);
            dataJson = await res.json();    
            return {ItemInfo: dataJson.MainItem}
        }
        return {ItemInfo: dataJson.ItemInfo[0]};
    } catch (error) {
        return undefined;
    }
}
module.exports = getProductInfo;