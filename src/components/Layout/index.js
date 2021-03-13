import s from './style.module.css';

const Layout = ({ title, descr, urlBg, colorBg }) => {
    const styleRoot =   (urlBg   && { backgroundImage: `url(${urlBg})` })
                    ||  (colorBg && { background : colorBg })
                    || ({ });
    console.log(styleRoot);
    return (
        <section className={s.root} style={styleRoot}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;
