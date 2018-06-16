Download
========

Download browser-generated content to the user.

Usage
-----

    import {download} from '@funkybob/download';

    // Sample YAML from http://yaml.org/start.html
    let content = `
    --- !clarkevans.com/^invoice
    invoice: 34843
    date   : 2001-01-23
    bill-to: &id001
        given  : Chris
        family : Dumars
        address:
            lines: |
                458 Walkman Dr.
                Suite #292
            city    : Royal Oak
            state   : MI
            postal  : 48046
    `;

    download(content, 'sample.yaml', 'text/yaml');

