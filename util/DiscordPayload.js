function DiscordPayload() {
    this.data = {};
    this.embedColor = null;

    this.setEmbedColor = function (color) {
        this.embedColor = color;
    };

    this.setContent = function (content) {
        this.data.content = content;
    };

    this.addEmbed = function (data) {
        if (typeof this.data.embeds === 'undefined') {
            this.data.embeds = [];
        }

        this.data.footer = {
            text: "Powered by Skyhook",
            icon_url: ""
        };
        if (this.embedColor !== null) {
            data.color = this.embedColor;
        }
        this.data.embeds.push(data);
    };

    this.getData = function () {
        return this.data;
    };
}

module.exports = DiscordPayload;