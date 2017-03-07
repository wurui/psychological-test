<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">

    <xsl:template match="/root" name="wurui.psychological-test">
        <!-- className 'J_OXMod' required  -->
        <xsl:variable name="data" select="data/psychological-test"/>
        <div class="J_OXMod oxmod-psychological-test" ox-mod="psychological-test">
            <h2>
                <xsl:value-of select="$data/title"/>
            </h2>
            <div class="scrollwindow J_ScrollWindow">
                <ol class="J_Content psychological-test-list" data-on="1" data-count="{count($data/questions/i)}">
                    <xsl:for-each select="$data/questions/i">
                        <li>
                            <xsl:variable name="uid" select="generate-id(.)"/>
                            <h3>
                                <xsl:value-of select="title"/>
                            </h3>
                            <p>
                                <xsl:for-each select="options/i">
                                    <label>
                                        <input type="radio" name="{$uid}"/>
                                        <xsl:value-of select="."/>
                                    </label>
                                </xsl:for-each>
                            </p>
                        </li>
                    </xsl:for-each>
                </ol>

            </div>
            <div class="J_Result"></div>
            <div class="J_results">
                <xsl:for-each select="$data/results/i">
                    <input type="hidden" value="{value}" text="{text}"/>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>

</xsl:stylesheet>
