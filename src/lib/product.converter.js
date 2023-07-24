export function toProduct(rows) {
    return rows.map(row => {
        return {
            id: row.id,
            name: row.name,
            description: row.description,
            price: row.price,
            stripePaymentLinkId: row.stripe_payment_link_id,
            imageUrl: row.image_url,
            paymentUrl: row.stripe_payment_url
        }
    })
}