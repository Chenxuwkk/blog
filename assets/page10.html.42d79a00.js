import{_ as e,r as o,o as c,c as i,b as n,e as p,w as t,d as s,a as l}from"./app.b33ca31f.js";const u={},r=n("h1",{id:"c\u8BED\u8A00\u94FE\u8868",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c\u8BED\u8A00\u94FE\u8868","aria-hidden":"true"},"#"),s(" C\u8BED\u8A00\u94FE\u8868")],-1),k=n("hr",null,null,-1),d={class:"table-of-contents"},v=s("\u5B66\u751F\u7BA1\u7406\u7CFB\u7EDF"),m=s("typedef \u7ED9\u7ED3\u6784\u4F53\u7C7B\u578B\u53D6\u522B\u540D"),b=s("\u53CC\u94FE\u8868"),f=l(`<h2 id="\u5B66\u751F\u7BA1\u7406\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u5B66\u751F\u7BA1\u7406\u7CFB\u7EDF" aria-hidden="true">#</a> \u5B66\u751F\u7BA1\u7406\u7CFB\u7EDF</h2><h3 id="typedef-\u7ED9\u7ED3\u6784\u4F53\u7C7B\u578B\u53D6\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#typedef-\u7ED9\u7ED3\u6784\u4F53\u7C7B\u578B\u53D6\u522B\u540D" aria-hidden="true">#</a> typedef \u7ED9\u7ED3\u6784\u4F53\u7C7B\u578B\u53D6\u522B\u540D</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">name_long1</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">short</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span> DATA2<span class="token punctuation">;</span> <span class="token comment">//DATA2\u662F\u7ED3\u6784\u4F53\u53D8\u91CF\u540D</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">name_long2</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">short</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span> DATA1<span class="token punctuation">;</span> <span class="token comment">//DATA1\u662F\u7C7B\u578B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">name_long_long</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">short</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">name_long_long</span> DATA3<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">d</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">short</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span> D_TYPE<span class="token punctuation">,</span> <span class="token operator">*</span>D_POINTER<span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//D_TYPE ==&gt;struct d</span>
    D_TYPE ob1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">//D_POINTER ==&gt;struct d *</span>
    D_POINTER p <span class="token operator">=</span> <span class="token operator">&amp;</span>ob1<span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %hd\\n&quot;</span><span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>a<span class="token punctuation">,</span> p<span class="token operator">-&gt;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u51FD\u6570\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u8BBE\u8BA1" aria-hidden="true">#</a> \u51FD\u6570\u8BBE\u8BA1</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//main</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;link.h&quot;</span></span>
STU <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span> <span class="token comment">//\u4E00\u5B9A\u8981\u521D\u59CB\u5316\u4E3ANULL</span>
<span class="token keyword">void</span> <span class="token function">help</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*******************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*help:\u5E2E\u52A9\u4FE1\u606F                *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*insert:\u63D2\u5165\u94FE\u8868\u8282\u70B9          *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*print:\u904D\u5386\u94FE\u8868\u8282\u70B9           *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*search:\u67E5\u8BE2\u94FE\u8868\u67D0\u4E2A\u8282\u70B9      *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*delete:\u5220\u9664\u94FE\u8868\u67D0\u4E2A\u8282\u70B9      *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*free:\u91CA\u653E\u6574\u4E2A\u94FE\u8868            *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*quit:\u9000\u51FA\u7A0B\u5E8F                *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*reverse:\u7FFB\u8F6C\u94FE\u8868             *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*sort:\u94FE\u8868\u6392\u5E8F                *\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;*******************************\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">char</span> cmd<span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u64CD\u4F5C\u547D\u4EE4:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;help&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u9700\u8981\u63D2\u5165\u7684\u5B66\u751F\u4FE1\u606Fnum name score:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            STU tmp<span class="token punctuation">;</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s %f&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>tmp<span class="token punctuation">.</span>num<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>tmp<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//\u5C06tmp\u63D2\u5165\u5230\u94FE\u8868\u4E2D</span>
            head <span class="token operator">=</span> <span class="token function">insert_link</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;print&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">print_link</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u8981\u67E5\u627E\u7684\u59D3\u540D:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            STU <span class="token operator">*</span>ret <span class="token operator">=</span> <span class="token function">search_link</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u7684\u7ED3\u679C:%d %s %f\\n&quot;</span><span class="token punctuation">,</span> ret<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> ret<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span> ret<span class="token operator">-&gt;</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u8981\u5220\u9664\u7684\u5B66\u53F7:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

            head <span class="token operator">=</span> <span class="token function">delete_link</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;free&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> <span class="token function">free_link</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;quit&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> <span class="token function">free_link</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;reverse&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> <span class="token function">reverse_link</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;sort&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">sort_link</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//link.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;link.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">0</span></span></span>
<span class="token comment">//\u5934\u90E8\u4E4B\u524D\u63D2\u5165</span>
STU <span class="token operator">*</span><span class="token function">insert_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> STU tmp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u4E3A\u5F85\u63D2\u5165\u7684\u6570\u636E\u7533\u8BF7 \u7A7A\u95F4</span>
    STU <span class="token operator">*</span>pi <span class="token operator">=</span> <span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>STU<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pi <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;calloc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7ED3\u675F\u8FDB\u7A0B</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5C06tmp\u6570\u636E\u8D4B\u503C\u5230 *pi</span>
    <span class="token operator">*</span>pi <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0D\u5B58\u5728</span>
    <span class="token punctuation">{</span>
        head <span class="token operator">=</span> pi<span class="token punctuation">;</span>
        <span class="token comment">//return head;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token comment">//\u5B58\u5728</span>
    <span class="token punctuation">{</span>
        pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        head <span class="token operator">=</span> pi<span class="token punctuation">;</span>
        <span class="token comment">//return head;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token comment">//\u5C3E\u90E8\u63D2\u5165</span>
STU <span class="token operator">*</span><span class="token function">insert_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> STU tmp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u4E3A\u5F85\u63D2\u5165\u7684\u6570\u636E\u7533\u8BF7 \u7A7A\u95F4</span>
    STU <span class="token operator">*</span>pi <span class="token operator">=</span> <span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>STU<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pi <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;calloc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7ED3\u675F\u8FDB\u7A0B</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5C06tmp\u6570\u636E\u8D4B\u503C\u5230 *pi</span>
    <span class="token operator">*</span>pi <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0D\u5B58\u5728</span>
    <span class="token punctuation">{</span>
        head <span class="token operator">=</span> pi<span class="token punctuation">;</span>
        <span class="token comment">//return head;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token comment">//\u5B58\u5728</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u5BFB\u627E\u94FE\u8868\u7684\u5C3E\u8282\u70B9</span>
        STU <span class="token operator">*</span>pb <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            pb <span class="token operator">=</span> pb<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//pb\u5C31\u662F\u5C3E\u8282\u70B9</span>
        pb<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pi<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">0</span></span></span>
<span class="token comment">//\u6709\u5E8F\u63D2\u5165</span>
STU <span class="token operator">*</span><span class="token function">insert_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> STU tmp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u4E3A\u5F85\u63D2\u5165\u7684\u6570\u636E\u7533\u8BF7 \u7A7A\u95F4</span>
    STU <span class="token operator">*</span>pi <span class="token operator">=</span> <span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>STU<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pi <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;calloc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">exit</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u7ED3\u675F\u8FDB\u7A0B</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u5C06tmp\u6570\u636E\u8D4B\u503C\u5230 *pi</span>
    <span class="token operator">*</span>pi <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token comment">//\u4E0D\u5B58\u5728</span>
    <span class="token punctuation">{</span>
        head <span class="token operator">=</span> pi<span class="token punctuation">;</span>
        <span class="token comment">//return head;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token comment">//\u5B58\u5728</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u5BFB\u627E\u63D2\u5165\u70B9\u7684\u4F4D\u7F6E</span>
        STU <span class="token operator">*</span>pb <span class="token operator">=</span> head<span class="token punctuation">,</span> <span class="token operator">*</span>pf <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>num <span class="token operator">&lt;</span> pi<span class="token operator">-&gt;</span>num<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            pf <span class="token operator">=</span> pb<span class="token punctuation">;</span>
            pb <span class="token operator">=</span> pb<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>num <span class="token operator">&gt;=</span> pi<span class="token operator">-&gt;</span>num<span class="token punctuation">)</span> <span class="token comment">//\u5934\u90E8\uFF0C\u4E2D\u90E8\u63D2\u5165</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> pb<span class="token punctuation">)</span> <span class="token comment">//\u5934\u90E8\u4E4B\u524D\u63D2\u5165</span>
            <span class="token punctuation">{</span>
                pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
                head <span class="token operator">=</span> pi<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token comment">//\u4E2D\u90E8\u63D2\u5165</span>
            <span class="token punctuation">{</span>
                pf<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pi<span class="token punctuation">;</span>
                pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pb<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token comment">//\u5C3E\u90E8\u63D2\u5165</span>
        <span class="token punctuation">{</span>
            pb<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pi<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token keyword">void</span> <span class="token function">print_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exits\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pb <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>pb <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s %f\\n&quot;</span><span class="token punctuation">,</span> pb<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pb<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span> pb<span class="token operator">-&gt;</span>score<span class="token punctuation">)</span><span class="token punctuation">;</span>
            pb <span class="token operator">=</span> pb<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

STU <span class="token operator">*</span><span class="token function">search_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token comment">//\u94FE\u8868\u5B58\u5728</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pb <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            pb <span class="token operator">=</span> pb<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//\u627E\u5230</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>name<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> pb<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u627E\u5230\u76F8\u5173\u6570\u636E\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

STU <span class="token operator">*</span><span class="token function">delete_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//\u67E5\u627E\u5220\u9664\u7684\u70B9</span>
        STU <span class="token operator">*</span>pb <span class="token operator">=</span> head<span class="token punctuation">,</span> <span class="token operator">*</span>pf <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>num <span class="token operator">!=</span> num<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            pf <span class="token operator">=</span> pb<span class="token punctuation">;</span>
            pb <span class="token operator">=</span> pb<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pb<span class="token operator">-&gt;</span>num <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token comment">//\u627E\u5230</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//\u5224\u65AD\u5220\u9664\u70B9\u7684\u4F4D\u7F6E</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pb <span class="token operator">==</span> head<span class="token punctuation">)</span> <span class="token comment">//\u5220\u9664\u5934\u8282\u70B9</span>
            <span class="token punctuation">{</span>
                head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                <span class="token comment">//free(pb);</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token comment">//\u5220\u9664\u4E2D\u5C3E\u90E8\u8282\u70B9</span>
            <span class="token punctuation">{</span>
                pf<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pb<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                <span class="token comment">//free(pb);</span>
            <span class="token punctuation">}</span>
            <span class="token function">free</span><span class="token punctuation">(</span>pb<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5DF2\u6210\u529F\u5220\u9664num=%d\u7684\u8282\u70B9\\n&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token comment">//\u672A\u627E\u5230</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u672A\u627E\u5230\u9700\u8981\u5220\u9664\u7684\u8282\u70B9\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

STU <span class="token operator">*</span><span class="token function">free_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pb <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>pb <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> pb<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>pb<span class="token punctuation">)</span><span class="token punctuation">;</span>
            pb <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

STU <span class="token operator">*</span><span class="token function">reverse_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//return head;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pb <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        STU <span class="token operator">*</span>pn <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
        head<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span>pb <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//\u7EAA\u5F55pb\u4E0B\u4E00\u4E2A\u8282\u70B9\u4F4D\u7F6E</span>
            pn <span class="token operator">=</span> pb<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token comment">//pb\u8FDE\u63A5\u4E0A\u4E00\u4E2A\u8282\u70B9</span>
            pb<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
            head <span class="token operator">=</span> pb<span class="token punctuation">;</span>
            pb <span class="token operator">=</span> pn<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u94FE\u8868\u7FFB\u8F6C\u6210\u529F\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">sort_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>p_i <span class="token operator">=</span> head<span class="token punctuation">,</span> <span class="token operator">*</span>p_j <span class="token operator">=</span> head<span class="token punctuation">;</span> <span class="token comment">//int i=0,j=0;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>p_i<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>     <span class="token comment">//for(i=0;i&lt;n-1;i++)</span>
        <span class="token punctuation">{</span>
            STU <span class="token operator">*</span>p_min <span class="token operator">=</span> p_i<span class="token punctuation">;</span>   <span class="token comment">//int min = i;</span>
            p_j <span class="token operator">=</span> p_min<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>  <span class="token comment">//j=min+1;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>p_j <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span> <span class="token comment">//for(;j&lt;n;j++)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>p_min<span class="token operator">-&gt;</span>num <span class="token operator">&gt;</span> p_j<span class="token operator">-&gt;</span>num<span class="token punctuation">)</span> <span class="token comment">//if(arr[min] &gt; arr[j])</span>
                    p_min <span class="token operator">=</span> p_j<span class="token punctuation">;</span>           <span class="token comment">//min = j;</span>

                p_j <span class="token operator">=</span> p_j<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//j++</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>p_i <span class="token operator">!=</span> p_min<span class="token punctuation">)</span> <span class="token comment">//if(i != min)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//\u4EA4\u6362\u6570\u636E</span>
                STU tmp <span class="token operator">=</span> <span class="token operator">*</span>p_i<span class="token punctuation">;</span>
                <span class="token operator">*</span>p_i <span class="token operator">=</span> <span class="token operator">*</span>p_min<span class="token punctuation">;</span>
                <span class="token operator">*</span>p_min <span class="token operator">=</span> tmp<span class="token punctuation">;</span>

                tmp<span class="token punctuation">.</span>next <span class="token operator">=</span> p_i<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                p_i<span class="token operator">-&gt;</span>next <span class="token operator">=</span> p_min<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                p_min<span class="token operator">-&gt;</span>next <span class="token operator">=</span> tmp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            p_i <span class="token operator">=</span> p_i<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span> <span class="token comment">//i++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">//link.h</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">__LINK_H__</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">__LINK_H__</span></span>

<span class="token comment">//\u5B9A\u4E49\u94FE\u8868\u8282\u70B9\u7C7B\u578B</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">stu</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u6570\u636E\u57DF</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">float</span> score<span class="token punctuation">;</span>

    <span class="token comment">//\u6307\u9488\u57DF</span>
    <span class="token keyword">struct</span> <span class="token class-name">stu</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> STU<span class="token punctuation">;</span>

<span class="token keyword">extern</span> STU <span class="token operator">*</span><span class="token function">insert_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> STU tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token function">print_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> STU <span class="token operator">*</span><span class="token function">search_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> STU <span class="token operator">*</span><span class="token function">delete_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> STU<span class="token operator">*</span> <span class="token function">free_link</span><span class="token punctuation">(</span>STU<span class="token operator">*</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> STU<span class="token operator">*</span> <span class="token function">reverse_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token function">sort_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53CC\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CC\u94FE\u8868" aria-hidden="true">#</a> \u53CC\u94FE\u8868</h3><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">stu</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u6570\u636E\u57DF</span>
    <span class="token keyword">int</span> num<span class="token punctuation">;</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//\u6307\u9488\u57DF</span>
    <span class="token keyword">struct</span> <span class="token class-name">stu</span> <span class="token operator">*</span>pre<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">stu</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span> STU<span class="token punctuation">;</span>
STU <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">insert_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token operator">*</span>p_head<span class="token punctuation">,</span> STU tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">print_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
STU <span class="token operator">*</span><span class="token function">search_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">delete_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token operator">*</span>p_head<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">void</span> <span class="token function">free_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token operator">*</span>p_head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token keyword">const</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u5B66\u751F\u7684\u4E2A\u6570:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7B2C%d\u4E2A\u5B66\u5458\u7684\u4FE1\u606F:&quot;</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        STU tmp<span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>tmp<span class="token punctuation">.</span>num<span class="token punctuation">,</span> tmp<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">insert_link</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>head<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u904D\u5386\u94FE\u8868</span>
    <span class="token function">print_link</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u67E5\u8BE2</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4F60\u8981\u67E5\u8BE2\u7684\u5B66\u53F7:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    STU <span class="token operator">*</span>ret <span class="token operator">=</span> <span class="token function">search_link</span><span class="token punctuation">(</span>head<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">!=</span> <span class="token constant">NULL</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u7684\u7ED3\u679C:%d %s\\n&quot;</span><span class="token punctuation">,</span> ret<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> ret<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u5220\u9664\u6307\u5B9A\u8282\u70B9</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4F60\u8981\u5220\u9664\u7684\u5B66\u53F7:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">delete_link</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>head<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u904D\u5386\u94FE\u8868</span>
    <span class="token function">print_link</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u91CA\u653E\u8FD9\u4E2A\u94FE\u8868</span>
    <span class="token function">free_link</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u904D\u5386\u94FE\u8868</span>
    <span class="token function">print_link</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5C3E\u63D2\u6CD5</span>
<span class="token keyword">void</span> <span class="token function">insert_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token operator">*</span>p_head<span class="token punctuation">,</span> STU tmp<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    STU <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token operator">*</span>p_head<span class="token punctuation">;</span>

    <span class="token comment">//\u4E3A\u63D2\u5165\u7684\u8282\u70B9\u7533\u8BF7\u7A7A\u95F4</span>
    STU <span class="token operator">*</span>pi <span class="token operator">=</span> <span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">calloc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>STU<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>pi <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    pi<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u4E3A\u7A7A</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        head <span class="token operator">=</span> pi<span class="token punctuation">;</span>
        pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pi<span class="token punctuation">;</span>
        pi<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> pi<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        head<span class="token operator">-&gt;</span>pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pi<span class="token punctuation">;</span>
        pi<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        pi<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> head<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
        head<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> pi<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u66F4\u65B0\u5916\u90E8\u7684head</span>
    <span class="token operator">*</span>p_head <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">print_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pn <span class="token operator">=</span> head<span class="token punctuation">;</span>
        STU <span class="token operator">*</span>pr <span class="token operator">=</span> head<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pn <span class="token operator">==</span> pr<span class="token punctuation">)</span> <span class="token comment">//\u94FE\u8868\u8282\u70B9\u4E3A\u5947\u6570\u4E2A</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s\\n&quot;</span><span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>next <span class="token operator">==</span> pr<span class="token punctuation">)</span> <span class="token comment">////\u94FE\u8868\u8282\u70B9\u4E3A\u5076\u6570\u4E2A</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s\\n&quot;</span><span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s\\n&quot;</span><span class="token punctuation">,</span> pr<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pr<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s\\n&quot;</span><span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %s\\n&quot;</span><span class="token punctuation">,</span> pr<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pr<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                pn <span class="token operator">=</span> pn<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                pr <span class="token operator">=</span> pr<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

STU <span class="token operator">*</span><span class="token function">search_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span>head<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//\u5224\u65AD\u94FE\u8868\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pn <span class="token operator">=</span> head<span class="token punctuation">;</span>
        STU <span class="token operator">*</span>pr <span class="token operator">=</span> head<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>num <span class="token operator">!=</span> num<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pr<span class="token operator">-&gt;</span>num <span class="token operator">!=</span> num<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pn <span class="token operator">!=</span> pr<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> pr<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            pn <span class="token operator">=</span> pn<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            pr <span class="token operator">=</span> pr<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>num <span class="token operator">==</span> num<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> pn<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pr<span class="token operator">-&gt;</span>num <span class="token operator">==</span> num<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> pr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u627E\u5230\u76F8\u5173\u8282\u70B9\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">0</span> </span></span>
<span class="token keyword">void</span> <span class="token function">delete_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token operator">*</span>p_head<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    STU <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token operator">*</span>p_head<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pn <span class="token operator">=</span> head<span class="token punctuation">;</span>
        STU <span class="token operator">*</span>pr <span class="token operator">=</span> head<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>num <span class="token operator">!=</span> num<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pr<span class="token operator">-&gt;</span>num <span class="token operator">!=</span> num<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pn <span class="token operator">!=</span> pr<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> pr<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            pn <span class="token operator">=</span> pn<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            pr <span class="token operator">=</span> pr<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>num <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token comment">//\u5934\u90E8\u3001\u4E2D\u90E8\u8282\u70B9</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pn <span class="token operator">==</span> head<span class="token punctuation">)</span> <span class="token comment">//\u5220\u9664\u5934\u8282\u70B9</span>
            <span class="token punctuation">{</span>
                head<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> head<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
                head<span class="token operator">-&gt;</span>pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                <span class="token comment">//free(pn);</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token comment">//\u5220\u9664\u4E2D\u90E8\u8282\u70B9</span>
            <span class="token punctuation">{</span>
                pn<span class="token operator">-&gt;</span>pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pn<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                pn<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> pn<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
                <span class="token comment">//free(pn);</span>
            <span class="token punctuation">}</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u5220\u9664\u8282\u70B9:%d %s\\n&quot;</span><span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>pn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pr<span class="token operator">-&gt;</span>num <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token comment">//\u5C3E\u90E8\u3001\u4E2D\u90E8</span>
        <span class="token punctuation">{</span>
            pr<span class="token operator">-&gt;</span>pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pr<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            pr<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> pr<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u5220\u9664\u8282\u70B9:%d %s\\n&quot;</span><span class="token punctuation">,</span> pr<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pr<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>pr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u627E\u5230\u76F8\u5173\u8282\u70B9\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token operator">*</span>p_head <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span></span></span>
<span class="token keyword">void</span> <span class="token function">delete_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token operator">*</span>p_head<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    STU <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token operator">*</span>p_head<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pn <span class="token operator">=</span> head<span class="token punctuation">;</span>
        STU <span class="token operator">*</span>pr <span class="token operator">=</span> head<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>

        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>num <span class="token operator">!=</span> num<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pr<span class="token operator">-&gt;</span>num <span class="token operator">!=</span> num<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pn <span class="token operator">!=</span> pr<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>next <span class="token operator">!=</span> pr<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            pn <span class="token operator">=</span> pn<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            pr <span class="token operator">=</span> pr<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>pn<span class="token operator">-&gt;</span>num <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token comment">//\u5934\u90E8\u3001\u4E2D\u90E8\u8282\u70B9</span>
        <span class="token punctuation">{</span>
            pn<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> pn<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
            pn<span class="token operator">-&gt;</span>pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pn<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>pn <span class="token operator">==</span> head<span class="token punctuation">)</span> <span class="token comment">//\u5220\u9664\u5934\u8282\u70B9</span>
            <span class="token punctuation">{</span>
                head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u5220\u9664\u8282\u70B9:%d %s\\n&quot;</span><span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pn<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>pn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pr<span class="token operator">-&gt;</span>num <span class="token operator">==</span> num<span class="token punctuation">)</span> <span class="token comment">//\u5C3E\u90E8\u3001\u4E2D\u90E8</span>
        <span class="token punctuation">{</span>
            pr<span class="token operator">-&gt;</span>pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> pr<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            pr<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>pre <span class="token operator">=</span> pr<span class="token operator">-&gt;</span>pre<span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u529F\u5220\u9664\u8282\u70B9:%d %s\\n&quot;</span><span class="token punctuation">,</span> pr<span class="token operator">-&gt;</span>num<span class="token punctuation">,</span> pr<span class="token operator">-&gt;</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>pr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6CA1\u6709\u627E\u5230\u76F8\u5173\u8282\u70B9\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token operator">*</span>p_head <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token keyword">void</span> <span class="token function">free_link</span><span class="token punctuation">(</span>STU <span class="token operator">*</span><span class="token operator">*</span>p_head<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    STU <span class="token operator">*</span>head <span class="token operator">=</span> <span class="token operator">*</span>p_head<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> head<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;link not exist\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        STU <span class="token operator">*</span>pn <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">do</span>
        <span class="token punctuation">{</span>
            head <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token function">free</span><span class="token punctuation">(</span>pn<span class="token punctuation">)</span><span class="token punctuation">;</span>
            pn <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>pn <span class="token operator">!=</span> <span class="token punctuation">(</span><span class="token operator">*</span>p_head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">*</span>p_head <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function h(g,y){const a=o("RouterLink");return c(),i("div",null,[r,k,n("nav",d,[n("ul",null,[n("li",null,[p(a,{to:"#\u5B66\u751F\u7BA1\u7406\u7CFB\u7EDF"},{default:t(()=>[v]),_:1}),n("ul",null,[n("li",null,[p(a,{to:"#typedef-\u7ED9\u7ED3\u6784\u4F53\u7C7B\u578B\u53D6\u522B\u540D"},{default:t(()=>[m]),_:1})]),n("li",null,[p(a,{to:"#\u53CC\u94FE\u8868"},{default:t(()=>[b]),_:1})])])])])]),f])}var q=e(u,[["render",h],["__file","page10.html.vue"]]);export{q as default};
