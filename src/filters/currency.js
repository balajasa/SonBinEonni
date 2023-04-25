// 千分號金額 Filter

export default function (num) {
    const n = Number(num);
    return `$${n.toFixed(0).replace(/./g, (c, i, a) => {
        const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
        return currency;
    })}`;
}


// 全域方式啟用：import currencyFilter from './filters/currency';