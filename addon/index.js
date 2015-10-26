/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/* jshint node: true, esnext: true */

import { Seq } from './src/Seq';
import { Collection } from './src/Collection';
import { OrderedMap } from './src/OrderedMap';
import { List } from './src/List';
import { Map } from './src/Map';
import { Stack } from './src/Stack';
import { OrderedSet } from './src/OrderedSet';
import { Set } from './src/Set';
import { Record } from './src/Record';
import { Range } from './src/Range';
import { Repeat } from './src/Repeat';
import { is } from './src/is';
import { fromJS } from './src/fromJS';
import { Iterable } from './src/IterableImpl';

export default {

  Iterable: Iterable,

  Seq: Seq,
  Collection: Collection,
  Map: Map,
  OrderedMap: OrderedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,

  Record: Record,
  Range: Range,
  Repeat: Repeat,

  is: is,
  fromJS: fromJS,

};
