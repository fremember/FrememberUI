<template>
    <div class="button-wrapper">
        <h1>Button 按钮</h1>
        <div class="card">
            <div class="card-title">引入</div>
            <pre><span class="keyword-color">import</span> FrButton <span class="keyword-color">from</span> '@/components/Button/Button.vue'</pre>
            <div class="card-title">使用</div>
            <pre v-pre><code>&lt;<span class="tag-color">fr-button</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-primary)">primary</span>" <span class="attr-color">plain</span> <span class="attr-color">disabled</span> ref="buttonRef"&gt;哈哈说&lt;/<span class="tag-color">fr-button</span>&gt;</code></pre>
        </div>
        <h3>代码演示</h3>
        <div class="card">
            <div class="card-title">按钮类型</div>
            <div class="card-info">支持 default、primary、success、info、warning、danger 六种类型，默认是 default</div>
            <div class="card-cont">
                <fr-button v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text }}</fr-button>
<pre v-pre>
<code>
&lt;<span class="tag-color">fr-button</span>&gt;Default&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-primary)">primary</span>"&gt;Primary&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-success)">success</span>"&gt;Success&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-info)">info</span>"&gt;Info&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-warning)">warning</span>"&gt;Warning&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-danger)">danger</span>"&gt;Danger&lt;/<span class="tag-color">fr-button</span>&gt;
</code></pre>
            </div>
        </div>
        <div class="card">
            <div class="card-title">朴素按钮</div>
            <div class="card-info">通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为按钮颜色与白色的混合色</div>
            <div class="card-cont">
                <fr-button plain v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text }}</fr-button>
<pre v-pre>
<code>
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">plain</span> &gt;Default&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-primary)">primary</span>"&gt;Primary&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-success)">success</span>"&gt;Success&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-info)">info</span>"&gt;Info&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-warning)">warning</span>"&gt;Warning&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-danger)">danger</span>"&gt;Danger&lt;/<span class="tag-color">fr-button</span>&gt;
</code></pre>
            </div>
        </div>
        <div class="card">
            <div class="card-title">圆角按钮</div>
            <div class="card-info">通过 plain 属性将按钮设置为圆角按钮</div>
            <div class="card-cont">
                <fr-button round v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text }}</fr-button>
<pre v-pre>
<code>
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> &gt;Default&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-primary)">primary</span>"&gt;Primary&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-success)">success</span>"&gt;Success&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-info)">info</span>"&gt;Info&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-warning)">warning</span>"&gt;Warning&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-danger)">danger</span>"&gt;Danger&lt;/<span class="tag-color">fr-button</span>&gt;
</code></pre>
            </div>
        </div>
        <div class="card">
            <div class="card-title">圆形按钮</div>
            <div class="card-info">通过 circle 属性将按钮设置为圆形按钮</div>
            <div class="card-cont">
                <fr-button circle v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text.substr(0, 1) }}</fr-button>
<pre v-pre>
<code>
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> &gt;Default&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-primary)">primary</span>"&gt;Primary&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-success)">success</span>"&gt;Success&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-info)">info</span>"&gt;Info&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-warning)">warning</span>"&gt;Warning&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-danger)">danger</span>"&gt;Danger&lt;/<span class="tag-color">fr-button</span>&gt;
</code></pre>
            </div>
        </div>
        <div class="card">
            <div class="card-title">圆角、朴素按钮</div>
            <div class="card-info">通过 round、plain 属性将按钮设置为圆角、朴素按钮</div>
            <div class="card-cont">
                <fr-button round plain v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text }}</fr-button>
<pre v-pre>
<code>
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">plain</span> &gt;Default&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-primary)">primary</span>"&gt;Primary&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-success)">success</span>"&gt;Success&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-info)">info</span>"&gt;Info&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-warning)">warning</span>"&gt;Warning&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">round</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-danger)">danger</span>"&gt;Danger&lt;/<span class="tag-color">fr-button</span>&gt;
</code></pre>
            </div>
        </div>
        <div class="card">
            <div class="card-title">圆形、朴素按钮</div>
            <div class="card-info">通过 circle、plain 属性将按钮设置为圆形、朴素按钮</div>
            <div class="card-cont">
                <fr-button circle plain v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text.substr(0, 1) }}</fr-button>
<pre v-pre>
<code>
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">plain</span> &gt;Default&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-primary)">primary</span>"&gt;Primary&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-success)">success</span>"&gt;Success&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-info)">info</span>"&gt;Info&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-warning)">warning</span>"&gt;Warning&lt;/<span class="tag-color">fr-button</span>&gt;
&lt;<span class="tag-color">fr-button</span> <span class="attr-color">circle</span> <span class="attr-color">plain</span> <span class="attr-color">type</span>="<span style="color: var(--fr-color-danger)">danger</span>"&gt;Danger&lt;/<span class="tag-color">fr-button</span>&gt;
</code></pre>
            </div>
        </div>
        <div class="card">
            <div class="card-title">禁用按钮</div>
            <div class="card-info">通过 disabled 属性设置按钮为禁用状态，禁用状态按钮不可点击；还可以同时设置 circle/round、plain 属性设置不同的禁用按钮</div>
            <div class="card-cont">
                <div style="margin-bottom: 10px;"><fr-button disabled v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text }}</fr-button></div>
                <div style="margin-bottom: 10px;"><fr-button disabled round v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text }}</fr-button></div>
                <div style="margin-bottom: 10px;"><fr-button disabled circle v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text.substr(0, 1) }}</fr-button></div>
                <!-- <div style="margin-bottom: 10px;"><fr-button disabled plain v-for="btn in btns" :key="btn.text" :type="btn.type">{{ btn.text }}</fr-button></div> -->
            </div>
        </div>
        <div class="card">
            <div class="card-title">图标按钮</div>
            <div class="card-info">按钮的内容是 图标</div>
            <div class="card-cont">待开发</div>
        </div>

        <h3>API</h3>
        <div class="card">
            <div class="title">Props</div>
            <table>
                <thead>
                    <tr>
                        <th>属性名</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(info, index) in propsInfo" :key="index">
                        <td>{{ info.name }}</td>
                        <td>{{ info.desc }}</td>
                        <td>{{ info.type }}</td>
                        <td>{{ info.default || '--' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="card">
            <div class="title">Events</div>
            <table>
                <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>回调函数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <pre>click</pre>
                        </td>
                        <td>点击事件，且按钮状态不为加载或禁用时触发</td>
                        <td>
                            <pre>event: Event</pre>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue'
    import FrButton from '@/components/Button/Button.vue'
    // import { ButtonInstance } from '@/components/Button/types'

    // const buttonRef = ref<ButtonInstance | null>(null)
    // onMounted(() => {
    //     if (buttonRef.value) {
    //         console.log(buttonRef.value.ref)
    //     }
    // })

    const btns = ref<any[]>([
        { type: 'default', text: 'Default'},
        { type: 'primary', text: 'Primary'},
        { type: 'success', text: 'Success'},
        { type: 'info', text: 'Info'},
        { type: 'warning', text: 'Warning'},
        { type: 'danger', text: 'Danger'}
    ])
    const propsInfo = ref<any[]>([
        { name: 'type', desc: '不同的样式', type: 'string', default: '' },
        { name: 'plain', desc: '是否为朴素按钮的标识', type: 'boolean', default: 'false' },
        { name: 'round', desc: '是否为圆角按钮的标识', type: 'boolean', default: 'false' },
        { name: 'circle', desc: '是否为圆形按钮的标识，适合图标按钮', type: 'boolean', default: 'false' },
        { name: 'size', desc: '不同大小(small、normal、large)', type: 'string', default: 'normal' },
        { name: 'disabled', desc: '是否禁用按钮标识', type: 'boolean', default: 'false' },
        { name: 'loading', desc: '按钮loading状态', type: 'boolean', default: 'false' }
    ])

</script>

<style scoped>
h1, h3 {
    margin-bottom: 12px;
}
.card {
    margin-bottom: 16px;
    background: var(--fr-color-white);
    border-radius: var(--fr-border-radius-large);
    padding: 24px;
    box-shadow: 0 8px 12px #ebedf0;

    table {
        width: 100%;
        margin-top: 12px;
        border-collapse: collapse;
        th {
            padding: 8px 10px;
            text-align: left;
            color: var(--fr-color-info);
        }
        td {
            border-top: 1px solid #f1f4f8;
            padding: 8px;
            color: var(--fr-text-color-primary);
        }
        th, td {
            &:first-child {
                padding-left: 0;
            }
        }
    }

    .card-title {
        margin: 10px 0;
        &:first-child {
            margin-top: 0;
        }
    }
    .card-info {
        margin-bottom: 8px;
        color: var(--fr-color-info);
        font-size: 12px;
    }
    .card-cont {
        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    pre {
        margin: 0;
        display: block;
        font-family: monospace;
        unicode-bidi: isolate;
        white-space: pre;
        code {
            position: relative;
            display: block;
            /* margin-top: 20px; */
            overflow-x: auto;
            color: #455a64;
            font-weight: 400;
            font-size: 13px;
            font-family: 'Source Code Pro', 'Monaco', 'Inconsolata', monospace;
            line-height: 24px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    }
}
</style>