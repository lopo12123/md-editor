import { defineComponent, h } from 'vue';
import * as SvgList from './icons';

const svgDemo = defineComponent({
    render() {
        return <div>
            {
                Object.keys(SvgList).map(svgName => {
                    return <div style={ {
                        margin: '20px 0',
                    } }>
                        <span style="margin-right: 20px;">{ svgName }</span>
                        { (SvgList as any)[svgName]() }
                    </div>;
                })
            }
        </div>;
    },
});

export default svgDemo;