import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Paragraph from './Paragraph';
import readme from './README.md';

storiesOf('Paragraph', module)
  .addDecorator(withReadme(readme))
  .add('standard', () => (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
        ligula ut est tempor venenatis viverra vitae ligula. Ut iaculis a eros
        sed interdum. Donec elementum vulputate lacus et pretium. Vivamus
        dignissim elit massa, facilisis pulvinar erat aliquam eu. Sed lobortis
        diam et lectus egestas placerat. Duis orci orci, facilisis vel sapien
        nec, interdum tempor neque. Aliquam ullamcorper erat in tortor lacinia
        dignissim. Mauris placerat elit nec fringilla tempor. Nulla vulputate
        dolor sodales condimentum vehicula. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia Curae; Nulla maximus
        vestibulum dolor. Maecenas pretium nulla magna. Vivamus sapien lacus,
        egestas eu varius ac, faucibus id augue. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos.
      </Paragraph>

      <Paragraph>
        Etiam ac metus accumsan, rutrum sem suscipit, dictum felis. Donec sit
        amet pharetra velit. Donec nunc ligula, vehicula a interdum sit amet,
        consectetur sed eros. Aliquam porttitor consectetur euismod. Integer
        congue est vel diam dapibus malesuada. Nunc gravida pharetra ante in
        fringilla. Nam ullamcorper diam at turpis tincidunt maximus sed sit amet
        lorem. Suspendisse ut lorem ultricies, iaculis risus vitae, laoreet
        lacus. Nulla cursus justo ac posuere scelerisque. Mauris nec tortor
        commodo, pulvinar mauris sed, egestas leo.
      </Paragraph>

      <Paragraph>
        Donec tortor nunc, vulputate sit amet ex finibus, pellentesque imperdiet
        leo. Nunc quis enim quis elit elementum luctus sed sed ex. Nulla eget
        augue sit amet dolor pretium aliquet eu sed purus. Aenean cursus, sapien
        maximus dictum sodales, magna enim gravida neque, id tincidunt enim
        metus non arcu. Nulla sed velit neque. Aenean congue tincidunt nunc non
        dictum. Fusce viverra sed elit a malesuada. Nam sit amet maximus neque,
        eleifend facilisis ex. In pulvinar mauris dui. Curabitur in risus et est
        consequat fermentum non at magna. Etiam vitae vehicula massa, id mattis
        lorem. Nulla elit neque, varius sed enim id, feugiat scelerisque felis.
        Praesent accumsan feugiat pharetra. Integer nec mauris id nisi posuere
        vestibulum.
      </Paragraph>
    </div>
  ));
