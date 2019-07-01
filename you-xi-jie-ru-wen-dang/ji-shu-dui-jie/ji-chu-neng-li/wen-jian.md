# 文件

```javascript
    FileSystemManager getFileSystemManager()
```

获取全局唯一的文件管理器

_返回值_

* FileSystemManager

文件管理器

```javascript
    FileSystemManager.access(Object object)
```

判断文件/目录是否存在

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| path | string | 是 | 要判断是否存在的文件/目录路径 |
| success | function | 否 | 文件存在的回调函数 |
| fail | function | 否 | 文件不存在的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    FileSystemManager.accessSync(string path)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.access` 的同步版本，判断文件/目录是否存在

_参数_

* string path

  要判断是否存在的文件/目录路径

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 文件/目录不存在 |

```javascript
    FileSystemManager.appendFile(Object object)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

在文件结尾追加内容

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| filePath | string | 是 | 要追加内容的文件路径 |
| data | string | 是 | 要追加的文本或二进制数据 |
| encoding | string | 否 | 指定写入文件的字符编码&lt;/br&gt;当前支持:&lt;/br&gt;utf8\(默认\)&lt;/br&gt;binary |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    FileSystemManager.appendFileSync(string filePath, string|ArrayBuffer data, string encoding)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.appendFile` 的同步版本，在文件结尾追加内容

_参数_

* string filePath

  要追加内容的文件路径

* string\|ArrayBuffer data

  要追加的文本或二进制数据

* string encoding

  指定写入文件的字符编码，当前支持：

  * utf8
  * binary

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 指定的 filePath 文件不存在, 或是一个目录 |
| permission denied | 指定目标文件路径没有写权限 |

```javascript
    FileSystemManager.copyFile(Object object)
```

复制文件

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| srcPath | string | 是 | 源文件路径，只可以是普通文件 |
| destPath | string | 是 | 目标文件路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    FileSystemManager.copyFileSync(string srcPath, string destPath)
```

`FileSystemManager.copyFile` 的同步版本，拷贝文件

_参数_

* string srcPath

  源文件路径，只可以是普通文件

* string destPath

  目标文件路径

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 源文件不存在，或目标文件路径的上层目录不存在 |
| permission denied | 指定目标文件路径没有写权限 |

```javascript
    FileSystemManager.getFileInfo(Object object)
```

获取本地临时文件或本地用户文件的文件信息

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| filePath | string | 是 | 要读取的文件路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| size | number | 文件大小，以字节为单位 |

```javascript
    boolean Stats.isDirectory()
```

判断当前文件是否一个目录

_返回值_

* boolean

表示当前文件是否一个目录

```javascript
    boolean Stats.isFile()
```

判断当前文件是否一个普通文件

_返回值_

* boolean

表示当前文件是否一个普通文件

```javascript
    FileSystemManager.mkdir(Object object)
```

创建目录

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- |
| dirPath | string | 是 | 创建的目录路径 |  |
| recursive | boolean | 否 | 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。 | core &gt;= 1.1.0 |
| success | function | 否 | 接口调用成功的回调函数 |  |
| fail | function | 否 | 接口调用失败的回调函数 |  |
| complete | function | 否 | 接口调用结束的回调函数 |  |

```javascript
    FileSystemManager.mkdirSync(string dirPath, boolean recursive)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.mkdir` 的同步版本，创建目录

_参数_

* string dirPath

  创建的目录路径

* boolean recursive

  是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 上级目录不存在 |
| permission denied | 指定目标文件路径没有写权限 |
| file already exists | 有同名文件或目录 |

```javascript
    FileSystemManager.readFile(Object object)
```

读取本地文件内容

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| filePath | string | 是 | 要读取的文件的路径 |
| encoding | string | 否 | 指定读取文件的字符编码， 当前只支持 binary 与 utf8， 默认为 binary |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| data | string/ArrayBuffer | 文件内容 |

```javascript
    FileSystemManager.readFileSync(string filePath, string encoding)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.readFile` 的同步版本，读取文件

_参数_

* string filePath

  要读取的文件的路径

* string encoding

  指定写入文件的字符编码，当前支持：

  * utf8
  * binary\(默认\)

_返回值_

* string\|ArrayBuffer data

  文件内容

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 指定的 filePath 所在目录不存在 |

```javascript
    FileSystemManager.rename(Object object)
```

重命名文件，可以把文件从 oldPath 移动到 newPath

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| oldPath | string | 是 | 源文件路径，可以是普通文件或目录 |
| newPath | string | 是 | 新文件路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    FileSystemManager.renameSync(string oldPath, string newPath)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.rename` 的同步版本，重命名文件

_参数_

* string oldPath

  源文件路径，可以是普通文件或目录

* string newPath

  新文件路径

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 源文件不存在，或目标文件路径的上层目录不存在 |
| permission denied | 没有写权限 |

```javascript
    FileSystemManager.rmdir(Object object)
```

删除目录

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- |
| dirPath | Object | 是 | 要删除的目录路径 |  |
| recursive | boolean | false | 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。 | core &gt;= 1.1.0 |
| success | function | 否 | 接口调用成功的回调函数 |  |
| fail | function | 否 | 接口调用失败的回调函数 |  |
| complete | function | 否 | 接口调用结束的回调函数 |  |

```javascript
    FileSystemManager.rmdirSync(string dirPath, boolean recursive)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.rmdir` 的同步版本，移除目录

_参数_

* string dirPath

  要删除的目录路径

* string newPath

  是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 目录不存在 |
| directory not empty | 目录不为空 |

```javascript
    FileSystemManager.readdir(Object object)
```

读取目录内文件列表

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| dirPath | string | 是 | 要读取的目录路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| files | Array\[string\] | 指定目录下的文件名数组。 |

```javascript
    FileSystemManager.readdirSync(string dirPath)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.readdir` 的同步版本，读取目录

_参数_

* string dirPath

  要删除的目录路径

_返回值_

* Array files

  指定目录下的文件名数组。

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 目录不存在 |
| directory not empty | 目录不为空 |

```javascript
    Stats FileSystemManager.stat(Object object)
```

获取文件 Stats 对象

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 | 支持版本 |
| :--- | :--- | :--- | :--- | :--- |
| path | string | 是 | 文件/目录路径 |  |
| recursive | bool | 否 | 是否递归获取目录下的每个文件的 Stats 信息&lt;/br&gt;默认为false | core 版本 &gt;= 1.1.0 |
| success | function | 否 | 接口调用成功的回调函数 |  |
| fail | function | 否 | 接口调用失败的回调函数 |  |
| complete | function | 否 | 接口调用结束的回调函数 |  |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| stats | Stats/Object | 当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Object，key 以 path 为根路径的相对路径，value 是该路径对应的 Stats 对象。 |

```javascript
    Stats|Array FileSystemManager.statSync(string path, boolean recursive)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.stat` 的同步版本，获取 stat

_参数_

* string path

  要删除的目录路径

* boolean recursive

  是否递归获取目录中所有文件的信息

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 文件不存在 |

```javascript
    FileSystemManager.unlink(Object object)
```

删除文件

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| filePath | string | 是 | 要删除的文件路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    FileSystemManager.unlinkSync(string path)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.unlink` 的同步版本，删除文件

_参数_

* string filePath

  要删除的文件路径

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 文件不存在 |

```javascript
    FileSystemManager.unzip(Object object)
```

解压文件

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| zipFilePath | string | 是 | 源文件路径，只可以是 zip 压缩文件 |
| targetPath | string | 是 | 目标目录路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    FileSystemManager.writeFile(Object object)
```

写文件

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| filePath | string | 是 | 要写入的文件路径 |
| data | string/ArrayBuffer | 是 | 要写入的文本或二进制数据 |
| encoding | string | 否 | 指定写入文件的字符编码 utf8 or binary，默认值为 utf8 |
| append | bool | 否 | 默认为 false，覆盖旧文件 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数，指定目录不存在调用 |
| complete | function | 否 | 接口调用结束的回调函数 |

```javascript
    FileSystemManager.writeFileSync(string filePath, string|ArrayBuffer data, string encoding)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.writeFile` 的同步版本，写文件

_参数_

* string filePath

  要追加内容的文件路径

* string\|ArrayBuffer data

  要追加的文本或二进制数据

* string encoding

  指定写入文件的字符编码，当前支持：

  * utf8
  * binary

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 指定的 filePath 文件不存在, 或是一个目录 |
| permission denied | 指定目标文件路径没有写权限 |

```javascript
    FileSystemManager.saveFile(Object object)
```

保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| tempFilePath | string | 是 | 临时存储文件路径 |
| filePath | string | 是 | 要存储的文件路径 |
| success | function | 否 | 接口调用成功的回调函数 |
| fail | function | 否 | 接口调用失败的回调函数，指定目录不存在调用 |
| complete | function | 否 | 接口调用结束的回调函数 |

* success 回调函数

_参数_

* Object res

| 属性 | 键值类型 | 说明 |
| :--- | :--- | :--- |
| savedFilePath | string | 存储后的文件路径 |

```javascript
    string FileSystemManager.saveFileSync(string tempFilePath, string filePath)
```

**支持版本: \(core 版本 &gt;= 1.1.0\)**

`FileSystemManager.saveFile` 的同步版本，保存临时文件到本地。

_参数_

* string tempFilePath

  临时存储文件路径

* string filePath

  要存储的文件路径

_返回值_

* string savedFilePath

  存储后的文件路径

_错误_

| 错误信息 | 说明 |
| :--- | :--- |
| no such file or directory | 指定的 tempFilePath 文件不存在, 或是一个目录 |
| permission denied | 指定目标文件路径没有写权限 |

```text
@Deprecated
FileSystemManager.removeSavedFile(Object object)
```

_**该接口已废弃，请使用 FileSystemManager.unlink 代替**_

删除该小程序下已保存的本地缓存文件

_参数_

* Object object

| 属性 | 键值类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| filePath | string | 是 | 需要删除的文件路径 |
| success | function | 否 | 接口调用成功的回调函 |
| fail | function | 否 | 接口调用失败的回调函数，指定目录不存在调用 |
| complete | function | 否 | 接口调用结束的回调函数 |

