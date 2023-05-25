<?xml version='1.0'?> <!-- As XML file -->

<!-- Created by Sean Fitzpatrick, August 2020                           -->
<!-- Borrows liberally from the style file for Sound Writing  by        -->
<!-- Cody Chun, Kieran O'Neil, Kylie Young, Julie Nelson Christoph.     -->
<!-- With additional... err... inspiration from style files from        -->
<!-- ORCCA, CLP, and the PreTeXt guide.                                 -->

<!--NB: move this file from APEXCalculusPTX/style to mathbook/user !!!  -->

<!DOCTYPE xsl:stylesheet [
    <!ENTITY % entities SYSTEM "entities.ent">
    %entities;
]>

<!-- Identify as a stylesheet -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<!-- next line will fail if this file is not in mathbook/user -->
<xsl:import pretext-href="pretext-latex.xsl"/>

<xsl:output method="text" />

<!-- ########## -->
<!-- Font Setup -->
<!-- ########## -->

<!-- Old Style figures for the body, but reversed to Lining many  -->
<!-- other places. "Old Style" is a lowercase style, "Lining" is  -->
<!-- a (now traditional) uppercase style.  Ornamentation for page -->
<!-- header happens to be specific Unicode characters of the same -->
<!-- font used for the text.  Relevant font table here:           -->
<!-- http://mirrors.ctan.org/fonts/libertinus-fonts/documentation/LibertinusSerif-Regular-Table.pdf -->
<xsl:template name="font-xelatex-main">
    <xsl:text>%% XeLaTeX font configuration from PreTeXt Guide style&#xa;</xsl:text>
    <xsl:text>%% We rely on a font installed at the system level,&#xa;</xsl:text>
    <xsl:text>%% so that we can exercise specific font features&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:call-template name="xelatex-font-check">
        <xsl:with-param name="font-name" select="'Carlito-Regular'"/>
    </xsl:call-template>
    <xsl:text>\setmainfont{Carlito-Regular}&#xa;</xsl:text>
</xsl:template>


<!-- define tcolorboxes for theorem and friends -->

<xsl:template match="list" mode="tcb-style">
    <xsl:text>enhanced jigsaw,middle=1ex, blockspacingstyle, opacityback=0, opacitybacktitle=0, coltitle=black, frame hidden, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="insight" mode="tcb-style">
    <xsl:text>fonttitle=\normalfont\bfseries, colbacktitle=white, colframe=black, colback=white, coltitle=black, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="&DEFINITION-LIKE;" mode="tcb-style">
    <xsl:text>fonttitle=\normalfont\bfseries, colbacktitle=white, colframe=black, colback=white, coltitle=black, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="&THEOREM-LIKE;" mode="tcb-style">
    <xsl:text>fonttitle=\normalfont\bfseries, colbacktitle=white, colframe=black, colback=white, coltitle=black, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="assemblage" mode="tcb-style">
    <xsl:text>fonttitle=\normalfont\bfseries, colbacktitle=white, colframe=black, colback=white, coltitle=black, titlerule=-0.3pt,</xsl:text>
</xsl:template>

<xsl:template match="&ASIDE-LIKE;" mode="tcb-style">
    <xsl:text>enhanced, colback=white, colframe=white,&#xa;</xsl:text>
    <xsl:text>coltitle=black, fonttitle=\bfseries, attach title to upper, after title={\space},left=1pt,</xsl:text>
</xsl:template>

<xsl:template match="example" mode="tcb-style">
    <xsl:text>fonttitle=\normalfont\bfseries, colback=white, colframe=black, colbacktitle=white, coltitle=black,
      enhanced,
      breakable,
      frame hidden,
      overlay unbroken={
          \draw[thick] ([yshift=-2ex]frame.north west)--([yshift=2ex]frame.south west)--([xshift=2ex,yshift=2ex]frame.south west);
      },
      overlay first={
          \draw[thick] ([yshift=-2ex]frame.north west)--(frame.south west);
      },
      overlay middle={
          \draw[thick] ([yshift=-2ex]frame.north west)--(frame.south west);
      },
      overlay last={
          \draw[thick] ([yshift=-2ex]frame.north west)--([yshift=2ex]frame.south west)--([xshift=2ex,yshift=2ex]frame.south west);
      },
    </xsl:text>
</xsl:template>

<!-- now come all the options -->
<!-- turn off hints, answers, and solutions for divisional exercises -->
<xsl:param name="exercise.divisional.hint" select="'no'"/>
<xsl:param name="exercise.divisional.answer" select="'no'"/>
<xsl:param name="exercise.divisional.solution" select="'no'"/>

<!-- turn off page references so print matches electronic -->
<xsl:param name="latex.pageref" select="'no'"/>

<!-- uncommenting these will omit videos -->
<!-- <xsl:template match="video[starts-with(@xml:id, 'vid')]" />
<xsl:template match="figure[starts-with(@xml:id, 'vid')]" />
<xsl:template match="p[starts-with(@xml:id, 'vidint')]" />
<xsl:template match="aside[starts-with(@xml:id, 'vidnote')]" /> -->
</xsl:stylesheet>
