# PDFBook

## CodePush Login 
```bash
code-push register
```

## CodePush create app 
```bash
code-push app add CBSEClass10 android react-native
```

## Code Push give release 
```bash
code-push release-react CBSEClass10 android -d Production
```
## Setup the code-push to android project [link](https://github.com/microsoft/react-native-code-push/blob/master/docs/setup-android.md)

Add the below file to the file android/app/build.gradle after 
apply from:"../../node_modules/react-native/react.gradle"
```bash
apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"
```
Add to MainApplication.java file in ReactNativeHost(this){}
and import 
```bash
import com.microsoft.codepush.react.CodePush;

```
```bash
@Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
```
Merge to master build auto create
