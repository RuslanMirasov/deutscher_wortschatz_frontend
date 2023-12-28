import css from './Section.module.scss';

const hexColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const rgbColor = /^rgb\(/;
const rgbaColor = /^rgba\(/;
const varColor = /^var\(/;

const bgCheck = bgStyle => {
  if (hexColor.test(bgStyle) || rgbColor.test(bgStyle) || rgbaColor.test(bgStyle) || varColor.test(bgStyle) || bgStyle === 'none') {
    return bgStyle;
  }
  return `url(${bgStyle}) no-repeat center center / cover`;
};

const Section = ({ bg = 'none', padTop = 'normal', padBottom = 'normal', height = 'auto', children }) => {
  const sectionClasses = {
    [css.Section]: true,
    [css.padTopNone]: padTop === 'none',
    [css.padTopNormal]: padTop === 'normal',
    [css.padTopSmall]: padTop === 'small',
    [css.padTopBig]: padTop === 'big',
    [css.padBottomNone]: padBottom === 'none',
    [css.padBottomNormal]: padBottom === 'normal',
    [css.padBottomSmall]: padBottom === 'small',
    [css.padBottomBig]: padBottom === 'big',
  };

  const sectionStyles = {
    background: bgCheck(bg),
    minHeight: height,
  };

  return (
    <section
      className={Object.keys(sectionClasses)
        .filter(key => sectionClasses[key])
        .join(' ')}
      style={sectionStyles}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
